import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import FBCallback from "./FBCallback";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/auth/facebook/callback" element={<FBCallback />} />
      </Routes>
    </BrowserRouter>
  );
}
