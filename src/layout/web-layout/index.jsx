import {Outlet} from "react-router-dom";
import Header from "./components/header";
import {Toaster} from "react-hot-toast";
import {motion} from "framer-motion";
import {useAuth} from "../../store/hooks/hooks";

export default function Weblayout() {

    const {user} = useAuth()
    console.log(user)



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