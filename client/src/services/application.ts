const API_BASE = "http://localhost:3000/api/application";

export const submitApplication = async (payload: any, token: string) => {
  const res = await fetch(`${API_BASE}/apply`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "Failed to submit application");
  }

  return res.json();
};

export const getFilledApplication = async (token: string) => {
  const res = await fetch(`${API_BASE}/filled`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "Failed to fetch application");
  }

  return res.json();
};

export const withdrawApplication = async (token: string) => {
  const res = await fetch(`${API_BASE}/withdraw`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "Failed to withdraw application");
  }

  return res.json();
};