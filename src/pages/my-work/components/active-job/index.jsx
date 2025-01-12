import RequestFalse from "./components/request-false";
import RequestTrue from "./components/request-true";
import {motion} from "framer-motion";

export default function ActiveJob({offers, data}) {

    const hasActiveRequests = data && Array.isArray(data) &&
        data.some(d => d.status === "active");

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
            {hasActiveRequests ? <RequestTrue offers={offers}/> : <RequestFalse/>}
        </motion.div>
    );
}
