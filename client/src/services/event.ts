const BASE_URL = "http://localhost:3000/api/event";

const buildHeaders = (isJson: boolean = false): Headers => {
  const headers = new Headers();
  const token = localStorage.getItem("token");

  if (token) {
    headers.append("Authorization", `Bearer ${token}`);
  }

  if (isJson) {
    headers.append("Content-Type", "application/json");
  }

  return headers;
};

const handleResponse = async (res: Response) => {
  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || "Request failed");
  }
  return res.json();
};

export const createEvent = async (formData: FormData) => {
  const res = await fetch(`${BASE_URL}/create`, {
    method: "POST",
    headers: buildHeaders(false),
    body: formData,
  });
  return handleResponse(res);
};

export const getAllEvents = async () => {
  const res = await fetch(`${BASE_URL}/all`, {
    headers: buildHeaders(),
  });
  return handleResponse(res);
};

export const updateEvent = async (eventId: string, formData: FormData) => {
  const res = await fetch(`${BASE_URL}/update/${eventId}`, {
    method: "PUT",
    headers: buildHeaders(false),
    body: formData,
  });
  return handleResponse(res);
};

export const deleteEvent = async (eventId: string) => {
  const res = await fetch(`${BASE_URL}/delete/${eventId}`, {
    method: "DELETE",
    headers: buildHeaders(),
  });
  return handleResponse(res);
};

export const getEventResponses = async (eventId: string) => {
  const res = await fetch(`${BASE_URL}/responses/${eventId}`, {
    headers: buildHeaders(),
  });
  return handleResponse(res);
};

export const getActiveEvents = async () => {
  const res = await fetch(`${BASE_URL}/active`);
  return handleResponse(res);
};

export const getEventById = async (eventId: string) => {
  const res = await fetch(`${BASE_URL}/${eventId}`);
  return handleResponse(res);
};

export const registerForEvent = async (
  eventId: string,
  answers: Record<string, any>
) => {
  const res = await fetch(`${BASE_URL}/register/${eventId}`, {
    method: "POST",
    headers: buildHeaders(true),
    body: JSON.stringify({ answers }),
  });
  return handleResponse(res);
};
