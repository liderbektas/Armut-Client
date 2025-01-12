import {Outlet} from "react-router-dom";
import QuestionsHeader from "./components/questions-header";
import {motion} from "framer-motion";
import {Toaster} from "react-hot-toast";

export default function QuestionsLayout(){

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            className="flex flex-col">
            <Toaster/>
            <QuestionsHeader/>
            <Outlet/>
        </motion.div>
    )
}