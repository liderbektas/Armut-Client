import AdminSidebar from "./components/admin-sidebar";
import {Outlet} from "react-router-dom";
import {Toaster} from "react-hot-toast";

export default function AdminLayout() {
    return (
        <div className="flex bg-[#0a0a0a]">
            <Toaster/>
            <AdminSidebar/>
            <main className="flex-1 h-screen overflow-auto">
                <Outlet/>
            </main>
        </div>
    )
}