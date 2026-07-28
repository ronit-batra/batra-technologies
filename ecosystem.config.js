module.exports = {
  apps: [
    {
      name: "batra-backend",
      cwd: "E:\\ronit\\bca\\e commerce\\server",
      script: "src/index.js",
      env: {
        NODE_ENV: "production"
      },
      max_restarts: 50,
      restart_delay: 3000,
      exp_backoff_restart_delay: 100,
      watch: false,
      autorestart: true,
    },
  ],
};
