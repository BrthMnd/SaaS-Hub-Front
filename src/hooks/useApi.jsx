import axios from "../libs/axios.libs";
import { useState, useEffect } from "react";

export const ApiGet = (url, token) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const res = await axios.get(url, config);
        setData(res.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, token]);

  return [data, error, loading];
};

export async function ApiPost(url, data) {
  try {
    const res = await axios.post(url, data);
    return res;
  } catch (err) {
    return err;
  }
}

export async function ApiDelete(url, id) {
  try {
    const res = await axios.delete(`${url}/${id}`);
    return res;
  } catch (err) {
    return err;
  }
}


export async function ApiPut(url, id, data){
  try {
    const res =await axios.put(`${url}/${id}`,data)
    return res
  } catch (error) {
    return error
  }
}


export async function ApiGetOne(url, id) {
  try {
    const res = await axios.get(`${url}/${id}`);
    return res;
  } catch (err) {
    return err;
  }
}