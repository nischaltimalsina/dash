import { Outlet, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Links from "./components/Links";

function Landing() {
  return (
    <>
      <Outlet />
    </>
  );
}

function Layout() {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route element={<Landing />}>
          <Route exact path="/" element={<Login />} />
        </Route>
        <Route element={<Layout />}>
          <Route path="/links" element={<Links />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
