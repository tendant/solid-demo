import { Routes, Route } from "@solidjs/router"
import HomePage from './pages/HomePage'

export default function AppRoutes() {
  return <>
    <Routes>
       <Route path="/" component={HomePage} />
    </Routes>
  </>
}