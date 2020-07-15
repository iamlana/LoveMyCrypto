import { useApi } from "./useApi";

export function useCoinDetails() {
  const result = useApi(`https://api.coinpaprika.com/v1/tickers/`);
  return { coin: result.data, error: result.error, loading: result.loading }
}
