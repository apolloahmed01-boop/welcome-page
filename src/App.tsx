import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "./pages/StartPage";
import MyWork from "./pages/MyWork";
import Contact from "./pages/Contact";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/my-work" element={<MyWork />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);

export default App;
