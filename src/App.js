import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import getRandomWord from "./utils/DisplayWord";
 import { ReactQueryDevtools } from "react-query/devtools";
import GuessWord from "./components/GuessWord";
import DisplayWord from "./utils/DisplayWord";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Keyboard from "./components/Keyboard";
import { useEffect } from "react";
const API = "https://random-word-api.herokuapp.com/word?number=1";

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
      <Footer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
