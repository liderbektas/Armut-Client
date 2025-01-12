import {useModal} from "../../store/hooks/hooks";
import modals from "../modals";
import {motion} from "framer-motion";

export default function Modals() {

    const activeModal = useModal()

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-10 bg-backdrop/60 flex items-center justify-center">
            {activeModal.map((am, index) => {
                const currentModal = modals.find((modal) =>
                    modal.name === am.name
                )
                return <div key={index} className="hidden last:block">
                    <currentModal.element data={am.data}/>
                </div>
            })}
        </motion.div>
    )
}