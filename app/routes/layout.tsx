
import { Outlet } from "react-router";
import Navbar from "@/components/navbar";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
