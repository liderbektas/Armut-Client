import {motion} from "framer-motion";
import InactiveJobList from "./components/inactive-job-list";
import NoInactiveJob from "./components/no-inactive-job";

export default function OldJob({data}) {

    const hasInActiveRequests = data && Array.isArray(data)
        ? data.some((d) => d.status === "inactive" || d.status === "Finished")
        : false

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            className="flex flex-col gap-y-4"
        >
            {hasInActiveRequests ? <InactiveJobList data={data}/> : <NoInactiveJob/>}
        </motion.div>
    );
}