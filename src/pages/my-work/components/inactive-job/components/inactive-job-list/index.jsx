import {motion} from "framer-motion";
import Modals from "../../../../../../modals/apperance";
import {useModal} from "../../../../../../store/hooks/hooks";
import {createModal} from "../../../../../../store/modal/actions/actions";

export default function InactiveJobList({data}) {

    const modal = useModal()
    console.log(data)

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            className="flex gap-4"
        >
            {data?.filter((d) => d.status === "inactive" || d.status === "Finished")?.map((request, index) => (
                <ul key={index}
                    className="w-[380px] h-auto bg-white p-4 border border-zinc-200 shadow-md cursor-pointer">

                    <div className="flex flex-col items-start gap-y-1">
                        <span className="text-xl font-semibold">{request.serviceName}</span>
                        <h4 className="text-xs text-zinc-400">{new Date(request.createdAt).toLocaleDateString()}</h4>

                    </div>

                    <div className="w-full border border-zinc-100 my-4"></div>

                    <>
                        <div
                            onClick={() => createModal("inactive-request", request)}
                            className="flex justify-between items-center">
                            <div
                                className={`px-4 py-1 rounded-2xl text-xs font-semibold flex items-center justify-center bg-[#f8f8f8] ${request.status === "inactive" ? "text-black" : "text-primary"}`}>
                                {request.status === "inactive" ? "İptal Edildi" : "İş Başarıyla bitirildi"}
                            </div>
                        </div>
                    </>
                    {modal.length > 0 && <Modals/>}
                </ul>
            ))}

        </motion.div>
    )
}