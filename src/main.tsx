import { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import InterviewPlayground from "./pages/InterviewPlayground/InterviewPlayground.tsx";
import "./index.css";

const Introduction = lazy(
  () => import("./pages/Introduction/Introduction.tsx")
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="interview" element={<InterviewPlayground />} />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
