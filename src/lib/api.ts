const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

const NGROK_BYPASS = "ngrok-skip-browser-warning: true";

export async function apiFetch(path: string, options: RequestInit = {}) {
  const token = typeof window !== "undefined" ? localStorage.getItem("bt-token") : null;
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    [NGROK_BYPASS.split(": ")[0]]: NGROK_BYPASS.split(": ")[1],
    ...((options.headers as Record<string, string>) || {}),
  };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);

  try {
    const res = await fetch(`${API_URL}${path}`, { ...options, headers, signal: controller.signal });
    clearTimeout(timeout);
    let data: any;
    try {
      data = await res.json();
    } catch {
      throw new Error("Server returned an invalid response. Please try again.");
    }
    if (!res.ok) {
      const err: any = new Error(data.error || "Request failed");
      err.code = data.code;
      throw err;
    }
    return data;
  } catch (err: any) {
    clearTimeout(timeout);
    if (err.name === "AbortError") {
      throw new Error("Request timed out. Please check your connection and try again.");
    }
    if (err instanceof TypeError && err.message === "Failed to fetch") {
      throw new Error("Unable to connect to server. Please try again.");
    }
    throw err;
  }
}

export function apiUrl(path: string) {
  return `${API_URL}${path}`;
}

export { API_URL };
