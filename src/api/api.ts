interface ApiOptions extends RequestInit {
  token?: string;
}

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

async function apiFetch<T>(endpoint: string, options: ApiOptions = {}): Promise<T> {
  const { token, ...rest } = options;
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...rest.headers,
  };

  const res = await fetch(`${BASE_URL}${endpoint}`, { ...rest, headers });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || res.statusText);
  }

  return res.json();
}

// 예제: GET / POST
export const apiGet = <T>(url: string, token?: string) => apiFetch<T>(url, { method: "GET", token });
export const apiPost = <T>(url: string, data?: object, token?: string) =>
  apiFetch<T>(url, { method: "POST", body: JSON.stringify(data), token });

export default apiFetch;
