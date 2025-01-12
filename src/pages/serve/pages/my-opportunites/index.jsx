import useFetch from "../../../../hooks/get";
import {useAuth} from "../../../../store/hooks/hooks";
import {motion} from "framer-motion";
import Opportunities from "./components/opportunities";
import NoOffer from "./components/no-offer";


export default function MyOpportunities() {

    const {user} = useAuth()
    const {data: opportunites} = useFetch(`/api/Serve/get-not-accepted-request/${user.id}`);

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
        >
            <h2 className="text-3xl font-medium pb-8">Fırsatlar</h2>

            {opportunites ? <Opportunities opportunites={opportunites}/> : <NoOffer/>}

        </motion.div>
    );
}
