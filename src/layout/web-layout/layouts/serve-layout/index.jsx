import ServeSidebar from "./components/serve-sidebar";
import {Outlet} from "react-router-dom";
import {motion} from "framer-motion";
import {Toaster} from "react-hot-toast";

export default function ServerLayout() {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            className="flex h-[calc(100vh-3px)]">
            <Toaster/>
            <ServeSidebar/>
            <main className="flex-1 py-20 px-52 h-auto">
                <Outlet/>
            </main>
        </motion.div>
    )
}