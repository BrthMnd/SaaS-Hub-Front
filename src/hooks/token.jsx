import axios from "../libs/axios.libs";

export const VerifyToken = async (token) => {
  try {
    const data = await axios.post("/verifyToken", { token });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
