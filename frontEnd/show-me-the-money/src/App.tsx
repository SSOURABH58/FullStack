import "./App.css";
import axios from "axios";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BalanceSheet from "./components/BalanceSheet";

const queryClient = new QueryClient();
export const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BalanceSheet />
    </QueryClientProvider>
  );
}

export default App;
