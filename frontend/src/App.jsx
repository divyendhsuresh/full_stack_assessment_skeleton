import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./utils";
import DashBoard from "./components/DashBoard";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DashBoard />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

export default App;
