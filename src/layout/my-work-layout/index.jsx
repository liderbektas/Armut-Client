import {Outlet} from "react-router-dom";
import MyWorkHeader from "./components/my-work-header";
import {motion} from "framer-motion";
import {Toaster} from "react-hot-toast";

export default function MyWorkLayout(){

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            className="flex flex-col">
            <Toaster/>
            <MyWorkHeader/>
            <Outlet/>
        </motion.div>
    )
}