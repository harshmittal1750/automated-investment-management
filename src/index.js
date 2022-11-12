import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import reportWebVitals from "./reportWebVitals";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Deposit from "./components/Deposit";
import PriceForm from "./components/PriceForm";
import CreateProfile from "./components/CreateProfile";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="home" element={<App />} />
        <Route path="deposit" element={<Deposit />} />
        <Route path="price-menu" element={<PriceForm />} />
        <Route path="create" element={<CreateProfile />} />
        <Route path="nav" element={<Nav />} />
        <Route path="header" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
