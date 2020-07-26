import { useApi } from "./useApi";

export function useCoins() {

  const result = useApi(`https://api.coinpaprika.com/v1/tickers/`);
  return { coins: result.data, error: result.error, loading: result.loading }
}
