import {Link} from "react-router-dom";
import {setChatType} from "../../../../../../store/chatType/actions/actions";
import {createModal} from "../../../../../../store/modal/actions/actions";
import {formatDate} from "../../../../../../utils/date/date";
import {MdOutlineLocalOffer} from "react-icons/md";

export default function JobDetails({myJobs, completeOffer}) {

    return (
        <>
            {myJobs && (
                <ul>
                    {myJobs?.map((job, index) => (
                        <li key={index}>
                            <h4 className="text-lg font-medium text-center py-1">Aktif İşlerim</h4>
                            <Link
                                onClick={() => setChatType("job-message")}
                                to={`/mesajlas/${job.user.id}`}
                                className="border rounded-md p-5 cursor-pointer block"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-x-3">
                                        <span className="h-2 w-2 rounded-full bg-green-600"></span>
                                        <span className="font-medium text-sm">{job.user.name}</span>
                                    </div>
                                    <div className="text-xs font-medium text-zinc-500">{formatDate(job.createdAt)}</div>
                                </div>

                                <div className="pt-4 text-sm font-medium">{job.serviceName}</div>

                                <div className="pt-4 flex items-center gap-x-2">
                                    <MdOutlineLocalOffer/>
                                    <span className="text-zinc-600 text-xs">Teklif verenlerden biri ol</span>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}

            {completeOffer && (
                <div className="flex flex-col gap-y-2 mt-5">
                    <h4 className="text-lg font-medium text-center">Eski İşlerim</h4>
                    <ul className="flex flex-col gap-y-5 h-[550px] overflow-auto">
                        {completeOffer?.map((item, index) => (
                            <li
                                onClick={() => createModal("opportunity", item)}
                                className="border border-zinc-200 rounded-md p-5 cursor-pointer"
                                key={index}>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-x-3">
                                        <span className="h-2 w-2 rounded-full bg-red-500"></span>
                                        <span className="font-medium text-sm">{item.user.name}</span>
                                    </div>
                                    <div
                                        className="text-xs font-medium text-zinc-500">{formatDate(item.createdAt)}</div>
                                </div>

                                <div className="pt-4 text-sm font-medium">{item.request.serviceName}</div>

                                <div className="pt-4 flex items-center gap-x-2">
                                    <MdOutlineLocalOffer/>
                                    <span className="text-zinc-600 text-xs">Teklif verenlerden biri ol</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}