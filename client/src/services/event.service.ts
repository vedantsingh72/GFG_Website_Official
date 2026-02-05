const API_URL = "http://localhost:3000/api/event";


// Admin: Create Event
export const createEvent = async (formData: FormData, token: string) => {
  const response = await fetch(`${API_URL}/create`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!response.ok) throw new Error("Failed to create event");
  return response.json();
};

// Admin: Get All Events (active + inactive)
export const getAllEvents = async (token: string) => {
  const response = await fetch(`${API_URL}/all`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) throw new Error("Failed to fetch events");
  return response.json();
};

// Public/Admin: Get only Active Events
export const getAllActiveEvents = async (token: string) => {
  const response = await fetch(`${API_URL}/active`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) throw new Error("Failed to fetch active events");
  return response.json();
};

// Get single Event by ID
export const getEventById = async (eventId: string, token: string) => {
  const response = await fetch(`${API_URL}/${eventId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) throw new Error("Failed to fetch event");
  return response.json();
};

// Admin: Update Event
export const updateEvent = async (
  eventId: string,
  formData: FormData,
  token: string
) => {
  const response = await fetch(`${API_URL}/update/${eventId}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!response.ok) throw new Error("Failed to update event");
  return response.json();
};

// Admin: Delete Event
export const deleteEvent = async (eventId: string, token: string) => {
  const response = await fetch(`${API_URL}/delete/${eventId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) throw new Error("Failed to delete event");
  return response.json();
};

// Admin: Get all responses for an Event
export const getEventResponses = async (eventId: string, token: string) => {
  const response = await fetch(`${API_URL}/responses/${eventId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) throw new Error("Failed to fetch responses");
  return response.json();
};

// User: Register for Event
export const registerForEvent = async (
  eventId: string,
  payload: Record<string, any>,
  token: string
) => {
  const response = await fetch(`${API_URL}/register/${eventId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) throw new Error("Failed to register for event");
  return response.json();
};
