import {IoClose} from "react-icons/io5";
import {destroyAllModal} from "../../../../store/modal/actions/actions";
import {AiOutlineSchedule} from "react-icons/ai";
import {formatDate} from "../../../../utils/date/date";
import {FaPhone} from "react-icons/fa6";

export default function ActiveRequestModal({data}) {
    return (
        <div className="h-[600px] w-[500px] bg-white rounded-md py-4 overflow-auto">
            <div className="flex items-center justify-between px-3">
                <div></div>
                <h5 className="text-sm font-semibold">Talep Detayları</h5>
                <IoClose onClick={() => destroyAllModal()} className="text-3xl cursor-pointer"/>
            </div>

            <div className="px-12">
                <div className="py-10 border-b border-zinc-200">
                    <h3 className="text-3xl font-bold leading-8">{data.serviceName}</h3>
                    <div className="flex flex-col gap-y-2 pt-5">
                        <div className="flex gap-x-4 items-center text-sm">
                            <AiOutlineSchedule/>
                            <span>{formatDate(data.createdAt)}</span>
                        </div>
                        <div className="flex gap-x-4 items-center text-sm">
                            <FaPhone/>
                            <span>Telefonla arayabilirler, numaram gizli kalsın</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-8 flex flex-col gap-y-4 px-12">
                {data.details.map((item, index) => (
                    <div key={index}>
                        <div className="font-semibold mb-1">{item.question}</div>
                        <div className="text-sm">{item.answer}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}