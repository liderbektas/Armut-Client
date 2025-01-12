import {Outlet} from "react-router-dom";
import AccountHeader from "./components/account-header";
import AccountSidebar from "./components/account-sidebar";
import {motion} from "framer-motion";
import {useAuth} from "../../store/hooks/hooks";
import {Toaster} from "react-hot-toast";

export default function AccountLayout() {

    const {user} = useAuth()

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}} className="flex flex-col h-screen">
            <Toaster/>
            <AccountHeader/>
            <div className="flex flex-1">
                <AccountSidebar/>
                <main className="flex-1 text-black flex justify-center pt-16 overflow-auto">
                    <Outlet/>
                </main>
            </div>
        </motion.div>
    );
}
