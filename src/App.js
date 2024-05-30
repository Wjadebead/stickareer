import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useAtomValue } from "jotai";
import { darkModeAtom } from "./components/Navbar/DarkModeButton";
import { useEffect } from "react";

const queryClient = new QueryClient();

function App() {

  //전역에 다크모드 class를 넣어주는 로직
  const darkMode = useAtomValue(darkModeAtom);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);

    return () => {
      document.body.classList.remove("dark");
    };
  }, [darkMode]);

  return (
    <>
      <Navbar />
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </>
  );
}

export default App;
