import {useAuth} from "../../../../store/hooks/hooks";
import {motion} from "framer-motion";
import AccountForm from "./components/account-form";

export default function AccountDetails() {
    const {user} = useAuth();

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}} className="flex flex-col gap-y-6 items-start max-w-xl mx-auto">
            <h3 className="text-[32px] font-bold">Hesap bilgilerim</h3>

            <div
                className="h-24 w-24 rounded-full bg-[#c96ab1] flex items-center justify-center text-white font-semibold text-3xl">
                {user?.name.charAt(0).toUpperCase()}
            </div>

            <AccountForm/>
        </motion.div>
    );
}
