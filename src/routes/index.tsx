import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { BookDetails } from "../pages/BookDetalls";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<BookDetails />} />
      </Routes>
    </BrowserRouter>
  );
};
