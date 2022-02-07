import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ShowData } from "./pages/showData";
import { SignUp } from "./pages/signUp";

export const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/show" element={<ShowData />} />
        </Routes>
      </BrowserRouter>
  )
}