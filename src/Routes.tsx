import { Routes, Route } from "@solidjs/router"

export default function AppRoutes() {
  return <>
    <Routes>
       <Route path="/" component={HomePage} />
    </Routes>
  </>
}