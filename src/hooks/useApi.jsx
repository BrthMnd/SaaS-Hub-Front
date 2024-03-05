import axios from "../libs/axios.libs";
import { useState, useEffect } from "react";

export const ApiGet = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const Get = async () => {
      try {
        const res = await axios.get(url);
        console.log(res.data);
        setData(res.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    Get();
  }, [url]);
  return [data, error, loading];
};

export async function ApiPost(url, dat) {
  try {
    const res = await axios.post(url, dat);
    return res;
  } catch (err) {
    throw err;
  }
}

export async function ApiDelete(url, id) {
  try {
    const res = await axios.delete(`${url}/${id}`);
    return res;
  } catch (err) {
    throw err;
  }
}

export async function ApiUpdate(url, id, data) {
  try {
    const res = await axios.put(`${url}/${id}`, data);
    return res;
  } catch (err) {
    throw err;
  }
}
