import {Outlet} from "react-router-dom";
import {useState} from "react";
import ServeAndWorkHeader from "../../../../components/serve-and-work-header";
import MessagesSidebar from "./components/sidebar";
import UserDetailHeader from "./components/user-detail-header";
import DefaultSection from "../../../../pages/message/pages/default-section";
import {Toaster} from "react-hot-toast";
import {motion} from "framer-motion";

export default function MessagesLayout() {

    const [selectedUser, setSelectedUser] = useState(false);

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}>
            <Toaster/>
            <ServeAndWorkHeader/>
            <div className="flex">
                <MessagesSidebar setSelectedUser={setSelectedUser}/>
                <main className="flex-1">
                    {selectedUser ? (
                        <>
                            <UserDetailHeader/>
                            <Outlet/>
                        </>
                    ) : (
                        <DefaultSection/>
                    )}
                </main>
            </div>
        </motion.div>
    );
}
