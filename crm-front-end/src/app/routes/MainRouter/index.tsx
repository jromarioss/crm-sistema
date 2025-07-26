import { Route, Routes } from "react-router-dom";
import * as Page from "@/app/pages";

export function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Page.Home />} />
      <Route path="/home" element={<Page.Home />} />
      <Route path="*" element={<Page.NotFound />} />
    </Routes>
  )
}