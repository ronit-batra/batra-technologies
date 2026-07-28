"use client";

import Link from "next/link";
import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { Eye, EyeOff, Mail, Lock, Phone, User as UserIcon, Crown, UserPlus } from "lucide-react";
import { apiFetch } from "@/lib/api";

const OWNER_EMAIL = "batraronit32@gmail.com";
const OWNER_PHONE = "9351396757";

function LoginContent() {
  const searchParams = useSearchParams();
  const addMode = searchParams.get("add") === "1";
  const [showPassword, setShowPassword] = useState(false);
  const [loginMethod, setLoginMethod] = useState<"email" | "phone">("email");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [errorCode, setErrorCode] = useState<string | "">("");
  const [loading, setLoading] = useState(false);
  const [showRoleChoice, setShowRoleChoice] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const isOwnerInput = () => {
    const cleaned = phone.replace(/[\s\-\(\)+]/g, "");
    const normalizedPhone = cleaned.startsWith("91") && cleaned.length === 12 ? cleaned.slice(2) : cleaned;
    if (loginMethod === "email" && email.toLowerCase() === OWNER_EMAIL) return true;
    if (loginMethod === "phone" && normalizedPhone === OWNER_PHONE) return true;
    return false;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setErrorCode("");
    const identifier = loginMethod === "email" ? email : phone;
    if (loginMethod === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address"); return;
    }
    if (loginMethod === "phone") {
      const cleaned = phone.replace(/[\s\-\(\)+]/g, "");
      const phoneOk = cleaned.startsWith("91") && cleaned.length === 12 ? /^[6-9]\d{9}$/.test(cleaned.slice(2)) : /^[6-9]\d{9}$/.test(cleaned);
      if (!phoneOk) { setError("Please enter a valid 10-digit Indian phone number"); return; }
    }
    if (!password) {
      setLoading(true);
      try {
        const body = loginMethod === "email" ? { email: identifier } : { phone: identifier };
        await apiFetch("/auth/login", { method: "POST", body: JSON.stringify(body) });
      } catch (err: any) {
        const code = (err as any).code || "";
        if (code === "NOT_FOUND") {
          router.push(`/register?prefill=${encodeURIComponent(identifier)}`);
          return;
        }
        setError(err.message);
        setErrorCode(code);
      } finally {
        setLoading(false);
      }
      return;
    }
    setLoading(true);
    try {
      await login(identifier, password, addMode);
      if (addMode) {
        router.push("/");
      } else if (isOwnerInput()) {
        setShowRoleChoice(true);
      } else {
        router.push("/");
      }
    } catch (err: any) {
      setError(err.message);
      setErrorCode((err as any).code || "");
    } finally {
      setLoading(false);
    }
  };


  if (showRoleChoice) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 pt-24 pb-12 page-transition">
        <div className="w-full max-w-md">
          <div className="text-center mb-10">
            <span className="text-gold-400 text-xs font-semibold uppercase tracking-[0.3em]">Welcome Ronit</span>
            <h1 className="text-4xl font-display font-bold text-white mt-2">Choose Access</h1>
            <p className="text-dark-400 text-sm mt-2">How would you like to continue?</p>
          </div>

          <div className="space-y-4">
            <button onClick={() => router.push("/")} className="w-full bg-dark-900/60 border border-dark-800/50 hover:border-gold-500/30 rounded-2xl p-6 text-left transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-dark-800 border border-dark-700 group-hover:border-gold-500/30 flex items-center justify-center transition-colors">
                  <UserIcon size={24} className="text-dark-400 group-hover:text-gold-400 transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-white">Shop as Customer</h3>
                  <p className="text-sm text-dark-400">Browse products and place orders</p>
                </div>
              </div>
            </button>

            <button onClick={() => router.push("/admin/orders")} className="w-full bg-dark-900/60 border border-gold-500/20 hover:border-gold-500/40 rounded-2xl p-6 text-left transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center transition-colors">
                  <Crown size={24} className="text-gold-500" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-gold-400">Owner Dashboard</h3>
                  <p className="text-sm text-dark-400">Manage orders, users and products</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-24 pb-12 page-transition">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <span className="text-gold-400 text-xs font-semibold uppercase tracking-[0.3em]">{addMode ? "Add Account" : "Welcome"}</span>
          <h1 className="text-4xl font-display font-bold text-white mt-2">{addMode ? "Sign In to New Account" : "Sign In"}</h1>
        </div>

        <div className="bg-dark-900/60 border border-dark-800/50 rounded-2xl p-8">
          {error && (
            <div className="mb-4 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
              <p className="text-red-400 text-sm">{error}</p>
              {errorCode === "NOT_FOUND" && (
                <Link href={`/register?prefill=${encodeURIComponent(loginMethod === "email" ? email : phone)}`} className="inline-flex items-center gap-1.5 text-gold-400 text-sm font-medium mt-2 hover:text-gold-300 transition-colors">
                  <UserPlus size={14} /> Create Account
                </Link>
              )}
            </div>
          )}

          <div className="flex bg-dark-800 rounded-xl p-1 mb-6">
            <button type="button" onClick={() => { setLoginMethod("email"); setError(""); }} className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all ${loginMethod === "email" ? "bg-gold-500 text-dark-950" : "text-dark-400 hover:text-white"}`}>
              <Mail size={14} /> Email
            </button>
            <button type="button" onClick={() => { setLoginMethod("phone"); setError(""); }} className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all ${loginMethod === "phone" ? "bg-gold-500 text-dark-950" : "text-dark-400 hover:text-white"}`}>
              <Phone size={14} /> Phone
            </button>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {loginMethod === "email" ? (
              <div>
                <label className="block text-xs text-dark-400 uppercase tracking-wider mb-2 font-medium">Email</label>
                <div className="relative">
                  <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-500" />
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required autoComplete="off" className="w-full bg-dark-800 border border-dark-700 rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder:text-dark-500 focus:outline-none focus:border-gold-500 transition-colors" />
                </div>
              </div>
            ) : (
              <div>
                <label className="block text-xs text-dark-400 uppercase tracking-wider mb-2 font-medium">Phone Number</label>
                <div className="relative">
                  <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-500" />
                  <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter your phone number" required autoComplete="off" className="w-full bg-dark-800 border border-dark-700 rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder:text-dark-500 focus:outline-none focus:border-gold-500 transition-colors" />
                </div>
              </div>
            )}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs text-dark-400 uppercase tracking-wider font-medium">Password</label>
                <Link href="/forgot-password" className="text-gold-400 text-xs font-medium hover:text-gold-300 transition-colors">Forgot Password?</Link>
              </div>
              <div className="relative">
                <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-500" />
                <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" autoComplete="new-password" className="w-full bg-dark-800 border border-dark-700 rounded-xl pl-11 pr-11 py-3.5 text-sm text-white placeholder:text-dark-500 focus:outline-none focus:border-gold-500 transition-colors" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-dark-500 hover:text-dark-300 transition-colors">
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-dark-950 py-4 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-gold-500/20 disabled:opacity-50">
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>
        </div>

        <p className="text-center text-sm text-dark-500 mt-8">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-gold-400 font-medium hover:text-gold-300 transition-colors">Create one</Link>
        </p>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-10 h-10 border-2 border-gold-500/20 border-t-gold-500 rounded-full animate-spin" />
      </div>
    }>
      <LoginContent />
    </Suspense>
  );
}
