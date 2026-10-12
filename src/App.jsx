import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Toaster } from "react-hot-toast";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";




function App() {
  return (
      <BrowserRouter>
        <Toaster position="top-center" />
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/forgot-password" element={<ForgotPassword/>} />
<Route path="/reset-password/:token" element={<ResetPassword/>} />

        </Routes>
      </BrowserRouter>

  );
}

export default App;
