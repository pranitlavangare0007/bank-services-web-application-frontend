import axios from "axios";

const api = axios.create({
 baseURL: "http://localhost:8080",
  headers: { "Content-Type": "application/json" }
});

api.interceptors.request.use(config => {
  const url = config.url || "";

  const isPublic = ["/login", "/register", "/oauth2", "/oauth-success"]
    .some(p => url.startsWith(p));

  if (!isPublic) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});

export default api;
