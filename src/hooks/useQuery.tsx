import axiosInstance from 'config/axios';

import React, { useEffect, useState } from 'react';

const useQuery = (url: string) => {
  const [data, setData] = useState<any>({});
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async (): Promise<void> => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(url);
      setData(response.data);
    } catch (error) {
      setError(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    let here = true;

    fetchData();
    return () => {
      here = false;
    };
  }, [url]);

  return [data, error, loading] as const;
};

export default useQuery;
