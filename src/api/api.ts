// ------------------------------
// 공용 타입
// ------------------------------
interface ApiOptions extends RequestInit {
  token?: string;
}

// 서버 2개
const STREAK_BASE_URL = import.meta.env.VITE_STREAK_API_URL;
const METRICS_BASE_URL = import.meta.env.VITE_METRICS_API_URL;


// ------------------------------
// 공통 fetch 함수
// ------------------------------
async function apiFetch<T>(
  endpoint: string,
  options: ApiOptions = {},
  baseUrl: string
): Promise<T> {
  const { token, ...rest } = options;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...rest.headers,
  };

  const res = await fetch(`${baseUrl}${endpoint}`, { ...rest, headers });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || res.statusText);
  }

  return res.json();
}

// ------------------------------
// 공용 GET / POST
// ------------------------------
export const apiGet = <T>(
  url: string,
  token?: string,
  baseUrl: string = STREAK_BASE_URL
) => apiFetch<T>(url, { method: "GET", token }, baseUrl);

export const apiPost = <T>(
  url: string,
  data?: object,
  token?: string,
  baseUrl: string = STREAK_BASE_URL
) =>
  apiFetch<T>(url, { method: "POST", body: JSON.stringify(data), token }, baseUrl);


// ------------------------------
// Metrics 타입 정의
// (백엔드 응답 형태에 따라 수정 가능)
// ------------------------------
export interface Metrics {
  left_pct: number;
  right_pct: number;
  created_at?: string;
  id?: string;
  cop_y_pct: number;
  cop_x_pct: number;
  cop_ok: boolean;
}


// ------------------------------
// 스트릭 관련 API (8001)
// ------------------------------
export const getDailyStats = <T>(date: string, token?: string) =>
  apiGet<T>(
    `api/game/results/daily?date_str=${date}`,
    token,
    STREAK_BASE_URL
  );

// ------------------------------
// total_steps 가져오기 (스트릭 서버 8001)
// ------------------------------
export interface DailyResultResponse {
  total_steps: number;
}

export const getTotalSteps = async (
  date: string,
  token?: string
): Promise<number> => {
  const data = await apiGet<DailyResultResponse>(
    `api/game/results/daily?date_str=${date}`,
    token,
    STREAK_BASE_URL
  );

  return data.total_steps;
};


// ------------------------------
// 메트릭 관련 API (8000)
// ------------------------------
export async function getMetrics(n: number = 1): Promise<Metrics[]> {
  return apiFetch<Metrics[]>(
    `metrics?n=${n}`,
    { method: "GET" },
    METRICS_BASE_URL
  );
}



export default apiFetch;
