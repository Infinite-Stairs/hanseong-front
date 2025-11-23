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

// 스트릭관련 api 받아올때 필요한 코드
export const getDailyStats = <T>(date: string, token?: string) =>
  apiGet<T>(`/api/game/results/daily?date_str=${date}`, token);

// Get/metrics 관련 코드
export async function getMetrics(n: number = 1) {
  const response = await fetch(`${BASE_URL}/metrics?n=${n}`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error(`API 요청 실패: ${response.status}`);
  }

  return response.json(); // 배열 형태 그대로 반환됨
}

export default apiFetch;