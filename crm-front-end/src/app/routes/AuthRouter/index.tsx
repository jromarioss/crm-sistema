
import { Navigate, Route, Routes } from "react-router-dom";
import * as Page from "@/app/pages";

export function AuthRouter() {
  return (
    <Routes>
      <Route path="/" element={<Page.Login />} />
      <Route path="/login" element={<Page.Login />} />
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  )
}