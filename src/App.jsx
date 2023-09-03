import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ImageDetail from "./components/home/ImageDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/image-detail/:id" element={<ImageDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
