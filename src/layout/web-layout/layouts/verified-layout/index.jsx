import {useAuth} from "../../../../store/hooks/hooks";
import toast, {Toaster} from "react-hot-toast";
import VerifiedBody from "./components/verified-body";
import VerifiedHeader from "./components/header";
import {motion} from "framer-motion";

export default function VerifiedLayout() {

    const {user} = useAuth()

    const warningHandler = () => {
        if (!user?.isVerified) {
            toast.error("Hesabınız henüz onaylanmadı!")
        }
    }

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}} className="flex flex-col">
            <Toaster/>
            <VerifiedHeader user={user} warningHandler={warningHandler}/>
            <VerifiedBody/>
        </motion.div>
    )
}