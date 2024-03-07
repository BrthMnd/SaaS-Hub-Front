import { ApiGet, ApiPost } from "./useApi";

export const EmailToken = async (token) => {
  try {
    const data = await ApiPost("/EmailVerify", { token });
    return data;
  } catch (error) {
    throw error;
  }
};
export const VerifyTokenLogin = async (token) => {
  try {
    const data = await ApiPost("/verifyToken");
    return data;
  } catch (error) {
    throw error;
  }
};
