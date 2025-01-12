import {motion} from "framer-motion";
import NoJob from "./components/no-job";
import {useAuth} from "../../../../store/hooks/hooks";
import useFetch from "../../../../hooks/get";
import JobDetails from "./components/job-details";

export default function MyJob() {

    const {user} = useAuth()
    const {data: myJobs} = useFetch(`/api/Serve/get-accepted-request/${user.id}`);
    const {data: completeOffer} = useFetch(`/api/Offer/get-finish/${user.id}`);

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
        >
            <h2 className="text-3xl font-medium pb-8">İşlerim</h2>
            {myJobs?.length > 0 || completeOffer?.length > 0 ? <JobDetails completeOffer={completeOffer} myJobs={myJobs}/> : <NoJob/>}
        </motion.div>
    )
}