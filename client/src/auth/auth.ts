const API_URL = "http://localhost:3000/api/auth"; // backend port

export const login = async (email: string, password: string) => {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) {
    let data;
    try {
      data = await res.json();
    } catch {
      throw new Error("Login failed");
    }
    throw new Error(data?.message || "Login failed");
  }
  return res.json();
};

export const signup = async (name: string, email: string, password: string) => {
  const res = await fetch(`${API_URL}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });
  if (!res.ok) {
    let data;
    try {
      data = await res.json();
    } catch {
      throw new Error("Signup failed");
    }
    throw new Error(data?.message || "Signup failed");
  }
  return res.json();
};

export const googleLogin = async (googleToken: string) => {
  const res = await fetch(`${API_URL}/google`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ credential: googleToken }),
  });
  if (!res.ok) {
    let data;
    try {
      data = await res.json();
    } catch {
      throw new Error("Google login failed");
    }
    throw new Error(data?.message || "Google login failed");
  }
  return res.json();
};
