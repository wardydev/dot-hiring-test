import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url: string) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getData = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(url, {
        params: { key: "AIzaSyCjK_RFeFEJ4iIj74aKKMetVEnV8ZRFS5U" },
      });
      setData(res.data);
      setIsLoading(false);
    } catch (err) {
      console.log("terjadi kesalahan, Periksa Internet");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [url]);

  return { data, isLoading };
};

export default useFetch;
