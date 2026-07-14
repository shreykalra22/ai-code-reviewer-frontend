import api from "../api/api";

export async function reviewCode(language, code) {
  const response = await api.post("/review", {
    language,
    code,
  });

  return response.data;
}