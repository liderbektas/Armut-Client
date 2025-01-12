import {useState} from 'react';
import useFetch from "../../../../../../hooks/get";
import {formatDate} from "../../../../../../utils/date/date";

export default function OfferDetails({offer}) {

    const {data: users} = useFetch("/api/User");
    const [isDetailsVisible, setIsDetailsVisible] = useState(false);

    const toggleDetails = () => {
        setIsDetailsVisible(!isDetailsVisible);
    };

    return (
        <>
            <div className="mb-6 p-5 bg-white rounded-md border border-zinc-300 overflow-hidden">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex flex-col gap-y-1">
                        <h5 className="font-medium text-sm text-gray-700">Teklif Yapma Tarihi</h5>
                        <p className="text-xs text-zinc-600">{formatDate(offer.createdAt)}</p>
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <h5 className="font-medium text-sm text-gray-700">Teklif Yapılan Kişi</h5>
                        <p className="text-xs text-zinc-600 text-center">{
                            users?.find((u) => u.id === offer.request.userId).email
                        }</p>
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <h5 className="font-medium text-sm text-gray-700">Hizmet Türü</h5>
                        <p className="text-xs text-zinc-600">{offer.request.serviceName}</p>
                    </div>
                </div>

                <div className="flex  gap-x-2">
                    <button
                        className="bg-red-700 text-white px-4 py-2 rounded-md text-xs font-medium transition duration-300">
                        Teklifi iptal et
                    </button>
                    <button
                        onClick={toggleDetails}
                        className="bg-primary text-white px-4 py-2 rounded-md text-xs font-medium transition duration-300">
                        {isDetailsVisible ? 'Detayları Gizle' : 'Detayları Görüntüle'}
                    </button>
                </div>

                {isDetailsVisible && (
                    <div className="mt-4 border-t border-zinc-300 pt-4">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Teklif Bilgisi</h2>
                        <p className="text-sm text-gray-600 mb-4">{offer.blurb}</p>
                        <div>
                            <p className="text-sm font-semibold text-gray-900">
                                <span className="text-sm font-medium">Teklif Ücreti: </span>
                                {offer.offerPrice} ₺
                            </p>
                        </div>

                        <div className="text-center mt-6">
                            <p className="text-sm text-gray-500">
                                Daha fazla bilgi almak için bize ulaşın:
                                <span className="text-primary"> 0532 123 45 67</span>
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
