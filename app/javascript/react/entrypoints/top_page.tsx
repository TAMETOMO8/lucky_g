import React from "react";
import { createRoot } from "react-dom/client";
import TopPages from "../index";

const container = document.getElementById("top_page");
if (container) {
  const root = createRoot(container);
  root.render(<TopPages />);
}