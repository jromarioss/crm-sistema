import { BrowserRouter} from "react-router-dom";
import "./App.css";
import { MainContextProvider } from "@/data/contexts";
import { Router } from "@/app/";

function App() {
  return (
    <BrowserRouter>
      <MainContextProvider>
        <Router />
      </MainContextProvider>
    </BrowserRouter>
  )
}

export default App;