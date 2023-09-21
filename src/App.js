import "./App.css";
import { createBrowserHistory } from "history";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Major from "./pages/Major";



function App() {
  const hist = createBrowserHistory();

  return (
    <>
      <BrowserRouter history={hist}>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/major" element={<Major />}></Route>
            
        </Routes>
      </BrowserRouter>
  
    </>
  );
}

export default App;