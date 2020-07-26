import { useEffect, useState } from "react";

export function useApi(url) {
  useEffect(() => {
    const timer = setInterval(() => {
      fetchData(url);
    }, 2000);
    return () => clearInterval(timer);
  }, [url]);

  const [state, setState] = useState({ data: undefined, error: undefined, loading: true })

  async function fetchData(url) {
    try {
      const result = await fetch(url);
      const data = await result.json();
      if (!result.ok) {
        setState({ data: undefined, error: data, loading: false })
      } else {
        setState({ data, error: undefined, loading: false })
      }
    } catch (error) {
      setState({ data: undefined, error, loading: false })
    }
  }

  return state

}
