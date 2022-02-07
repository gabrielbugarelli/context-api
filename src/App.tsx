import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ShowData } from "./pages/showData";
import { SignUp } from "./pages/signUp";

import { ContextProvider } from "./contexts/Context";

export const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/show" element={<ShowData />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  )
}