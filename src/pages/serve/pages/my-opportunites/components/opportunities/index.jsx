import {IoIosOptions} from "react-icons/io";
import {createModal} from "../../../../../../store/modal/actions/actions";
import {formatDate} from "../../../../../../utils/date/date";
import {MdOutlineLocalOffer} from "react-icons/md";
import Modals from "../../../../../../modals/apperance";
import {useModal} from "../../../../../../store/hooks/hooks";

export default function Opportunities({opportunites}) {

    const modal = useModal()

    return (
        <>
            <div className="py-5 flex items-center justify-between">
                <div
                    className="px-5 cursor-pointer h-12 gap-x-2 font-medium rounded-2xl border border-zinc-300 hover:border-zinc-500 flex items-center justify-center">
                    <IoIosOptions/>
                    <span>Filtreler</span>
                </div>
                <span className="text-xs text-zinc-700">{opportunites?.length} Fırsat</span>
            </div>
            <ul className="flex flex-col gap-y-5 h-[550px] overflow-auto">
                {opportunites?.map((item, index) => (
                    <li
                        onClick={() => createModal("opportunity", item)}
                        className="border border-zinc-200 rounded-md p-5 cursor-pointer"
                        key={index}>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-x-3">
                                <span className="h-2 w-2 rounded-full bg-green-600"></span>
                                <span className="font-medium text-sm">{item.user.name}</span>
                            </div>
                            <div className="text-xs font-medium text-zinc-500">{formatDate(item.createdAt)}</div>
                        </div>

                        <div className="pt-4 text-sm font-medium">{item.serviceName}</div>

                        <ul className="flex items-center gap-x-3 pt-4 flex-wrap">
                            {item.details.map((detail, index) => (
                                <li
                                    key={index}
                                    className="bg-zinc-200 font-medium rounded-md px-4 py-2 text-xs w-[170px] h-auto flex items-center justify-center mb-2"
                                >
                                    {detail.answer}
                                </li>
                            ))}
                        </ul>

                        <div className="pt-4 flex items-center gap-x-2">
                            <MdOutlineLocalOffer/>
                            <span className="text-zinc-600 text-xs">Teklif verenlerden biri ol</span>
                        </div>
                    </li>
                ))}
            </ul>
            {modal.length > 0 && <Modals/>}
        </>
    )
}
