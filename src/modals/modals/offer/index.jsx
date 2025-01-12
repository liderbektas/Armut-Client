import {IoClose} from "react-icons/io5";
import {createModal, destroyAllModal} from "../../../store/modal/actions/actions";
import {formatDate} from "../../../utils/date/date";
import Button from "../../../components/button";
import {useNavigate} from "react-router-dom";

export default function OfferModal({data}) {

    const navigate = useNavigate()

    return (
        <div className="p-5 w-[500px] h-auto bg-white rounded-md">
            <header className="flex items-center justify-between">
                <div></div>
                <span className="text-sm font-medium">Kullanıcı ve Teklif Detayları</span>
                <IoClose onClick={destroyAllModal} className="text-2xl cursor-pointer"/>
            </header>


            <div className="pt-8 flex items-center gap-x-4">
                <span
                    onClick={() => {
                        navigate(`/kullanici-detay/${data.user.id}`)
                        destroyAllModal()
                    }}
                    className="h-12 w-12 rounded-full bg-yellow-700 text-white font-medium flex items-center justify-center cursor-pointer">
                    {data.user.name.slice(0, 1)}
                </span>
                <div className="flex flex-col gap-y-1">
                    <span className="text-xs font-medium">{data.user.name}</span>
                    <span className="text-xs font-medium">{data.user.email}</span>
                    <span className="text-xs font-medium">{formatDate(data.createdAt)}' den beri üye</span>
                </div>
            </div>

            <div className="flex flex-col gap-y-3 pt-6">
                <h5 className="text-base font-medium">Teklif Detayları</h5>
                <div>
                    <h6 className="text-sm font-medium">Teklif Yazısı</h6>
                    <p className="flex-wrap text-xs font-medium">{data.blurb}</p>
                </div>
                <div>
                    <h5 className="text-base font-medium">Teklif Edilen Ücret</h5>
                    <span className="text-sm font-medium">{data.offerPrice}TL</span>
                </div>
            </div>

            <div className="grid pt-6">
                {data.status === "Accepted" ? (
                    <Button onClick={() => {
                         navigate("/mesajlas")
                        destroyAllModal()
                    }} as="button" size="large"
                            variant="filled-button">
                        Mesaj at
                    </Button>
                ) : (
                    <Button onClick={() => createModal("offer-description", data)} as="button" size="large"
                            variant="filled-button">
                        Kabul et
                    </Button>
                )}
            </div>
        </div>
    )
}