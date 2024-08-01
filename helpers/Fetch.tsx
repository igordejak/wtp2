import { useState, useEffect, ReactNode } from 'react';

interface IProps {
  url: string;
  children: ReactNode;
}

const Fetch = ({ url, children }: IProps) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]); 


  return children({ data, error, isLoading });
};

export default Fetch