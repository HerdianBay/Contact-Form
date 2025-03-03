import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import ContactForm from "./ContactForm/ContactForm";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContactForm />
  </StrictMode>
);
