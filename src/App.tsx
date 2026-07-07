import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home/page";
import Hotel from "./pages/Hotel/page";

const isHome = location.pathname === "/"

export default function App() {
  return (
    <>
      <Header />
      <main className={isHome ? "" : "pageInternal"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route
            path="*"
            element={
              <div style={{ padding: "100px" }}>Página não encontrada</div>
            }
          />
        </Routes>
      </main>
    </>
  );
}