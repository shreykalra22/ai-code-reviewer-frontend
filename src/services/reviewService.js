import api from "../api/api";

export const analyzeCode = async (language, code) => {
    const response = await api.post("/review", {
        language,
        code,
    });

    return response.data;
};