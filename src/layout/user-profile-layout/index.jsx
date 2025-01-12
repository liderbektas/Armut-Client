import UserProfileHeader from "./components/user-profile-header";
import {Outlet} from "react-router-dom";
import {Toaster} from "react-hot-toast";
import {motion} from "framer-motion";

export default function UserInformationLayout() {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}>
            <Toaster/>
            <UserProfileHeader/>
            <main className="px-40 pt-8">
                <Outlet/>
            </main>
        </motion.div>
    )
}