import {Outlet} from "react-router-dom";
import Header from "./components/header";
import {Toaster} from "react-hot-toast";
import {motion} from "framer-motion";

export default function Weblayout() {

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            className="w-screen h-screen text-white relative">
            <Toaster/>
            <Header/>
            <Outlet/>
        </motion.div>
    )
}