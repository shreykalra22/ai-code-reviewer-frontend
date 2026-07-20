import api from "../api/api";

export const getReviews = async () => {
  const response = await api.get("/reviews?limit=100");
  return response.data;
};

export const deleteReview = async (id) => {
  await api.delete(`/reviews/${id}`);
};

export const getReview = async (id) => {
  const response = await api.get(`/reviews/${id}`);
  return response.data;
};