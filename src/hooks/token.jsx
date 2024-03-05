import { ApiPost } from "./useApi";

export const VerifyToken = async (token) => {
  try {
    const data = await ApiPost("/EmailVerify", { token });
    return data;
  } catch (error) {
    throw error;
  }
};
