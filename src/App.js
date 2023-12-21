import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./shop/components";
import { CategoryPage } from "./shop/pages/CategoryPage";
import { HomePage } from "./shop/pages/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <main className="App container my-3">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:slug" element={<CategoryPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
