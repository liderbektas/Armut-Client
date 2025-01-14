import {useState} from "react";
import {useAuth, useModal} from "../../../../../../store/hooks/hooks";
import {SlOptionsVertical} from "react-icons/sl";
import Button from "../../../../../../components/button";
import useFetch from "../../../../../../hooks/get";
import {createModal} from "../../../../../../store/modal/actions/actions";
import Modals from "../../../../../../modals/apperance";
import {updateRequest} from "../../../../../../api/request/put";
import {Link} from "react-router-dom";
import {setChatType} from "../../../../../../store/chatType/actions/actions";

export default function RequestList({offers}) {

    const [visibleMenuIndex, setVisibleMenuIndex] = useState(null);
    const {user} = useAuth();
    const {data: requests} = useFetch(`/api/Request/get-request/${user.id}`);
    const modals = useModal();

    const activeOffers = offers.flat();

    return (
        <div className="flex gap-x-2 gap-y-4">
            {requests?.filter((request) => request.status === "active")?.map((request, index) => {

                const relatedOffers = activeOffers.filter((offer) => offer.requestId === request.id);
                const offerStatus = relatedOffers.some((offer) => offer.status === "Accepted")
                const offerAsAbject = relatedOffers.reduce((acc, curr) => {
                    if (!acc[curr.id]) {
                        acc = curr
                    }
                    return acc
                }, {})

                return (
                    <ul key={index} className="w-[350px] h-auto bg-white border border-zinc-200 rounded-md shadow-md">
                        <div
                            onClick={() => setVisibleMenuIndex(visibleMenuIndex === index ? null : index)}
                            className="flex justify-end px-2 pt-2 relative cursor-pointer"
                        >
                            <SlOptionsVertical className="font-normal text-sm"/>

                            {visibleMenuIndex === index && (
                                <ul className="absolute top-full right-4 bg-white w-auto h-auto px-5 py-2 border border-zinc-300 shadow-md flex flex-col gap-y-3">
                                    {offerStatus ? (
                                        <>
                                            <Link
                                                onClick={() => setChatType("offer")}
                                                to={`/mesajlas/${offerAsAbject.userId}`}
                                                className="text-sm hover:text-zinc-500"
                                            >
                                                İletişime Geç
                                            </Link>
                                            <li
                                                onClick={() => createModal("finish-job", relatedOffers)}
                                                className="text-sm hover:text-zinc-500"
                                            >
                                                İşi Bitir
                                            </li>
                                        </>
                                    ) : (
                                        <>
                                            <li
                                                onClick={() => createModal("active-request", request)}
                                                className="text-sm hover:text-zinc-500"
                                            >
                                                Talep Detaylarına Bak
                                            </li>
                                            <li
                                                onClick={() => updateRequest(request.id)}
                                                className="text-sm hover:text-zinc-500"
                                            >
                                                Talebi İptal Et
                                            </li>
                                        </>
                                    )}
                                </ul>
                            )}
                        </div>

                        <div className="flex flex-col items-center gap-y-1 p-2">
                            <h4 className="text-lg text-zinc-500">{new Date(request.createdAt).toLocaleDateString()}</h4>
                            <span className="text-2xl font-semibold">{request.serviceName}</span>
                        </div>

                        <div className="w-full px-5 border border-zinc-100"></div>

                        {relatedOffers.length > 0 ? (
                            <div className="flex justify-center flex-row items-center gap-x-4 p-2">
                                {relatedOffers.some(offer => offer.status === "Accepted") ? (
                                    relatedOffers
                                        .filter(offer => offer.status === "Accepted")
                                        .map((offer, index) => (
                                            <div key={index} className="flex flex-col items-center gap-y-2">
                                                <h3 className="text-xs font-medium">İş Sahibi</h3>
                                                <div className="flex items-center gap-x-2">
                                                    <div className="flex flex-col items-center">
                                                        <span
                                                            onClick={() => createModal("offer", offer)}
                                                            className="h-10 w-10 rounded-full bg-yellow-700 text-white font-medium flex items-center justify-center cursor-pointer"
                                                        >
                                                            {offer.user.name.slice(0, 1)}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                ) : (
                                    relatedOffers.map((offer, index) => (
                                        <div key={index} className="flex flex-col items-center gap-y-2">
                                            <h3 className="text-xs font-medium
                                            ">Gelen Teklifler</h3>
                                            <div className="flex items-center gap-x-2">
                                                <div className="flex flex-col items-center">
                                                    <span
                                                        onClick={() => createModal("offer", offer)}
                                                        className="h-10 w-10 rounded-full bg-yellow-700 text-white font-medium flex items-center justify-center cursor-pointer"
                                                    >
                                                        {offer.user.name.slice(0, 1)}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        ) : (
                            <div className="text-zinc-300 text-center p-2 py-5 text-sm">
                                Talebin için teklifler toplanıyor. Teklifler gelmeye başladığında hemen bildireceğiz.
                            </div>
                        )}


                        <div className="grid p-2">
                            {offerStatus ? (
                                <Button
                                    onClick={() => setChatType("offer")}
                                    as={Link}
                                    to={`/mesajlas/${offerAsAbject.userId}`}
                                    variant="filled-button"
                                    size="large"
                                >
                                    İletişime Geç
                                </Button>
                            ) : (
                                <Button
                                    onClick={() => createModal("active-request", request)}
                                    as="button"
                                    variant="filled-button"
                                    size="large"
                                >
                                    Detaylara Bak
                                </Button>
                            )}
                        </div>
                    </ul>
                );
            })}

            {modals.length > 0 && <Modals/>}
        </div>
    );
}
