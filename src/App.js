import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import GuessWord from "./components/GuessWord";
import Header from "./components/Header";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <GuessWord />
    </QueryClientProvider>
  );
}

export default App;
