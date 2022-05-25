import { Route, Routes } from "react-router-dom";
import "./App.css";
import Result from "./pages/result/Result";
import LoginPage from "./pages/login/LoginPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
