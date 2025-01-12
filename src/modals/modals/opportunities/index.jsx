import {IoClose} from "react-icons/io5";
import {destroyAllModal} from "../../../store/modal/actions/actions";
import {MdOutlinePhone} from "react-icons/md";
import {CiDollar} from "react-icons/ci";
import {FaTrashAlt} from "react-icons/fa";
import {useState} from "react";
import {createOffer} from "../../../api/offer/post";
import {useAuth} from "../../../store/hooks/hooks";

export default function OpportunitiesModal({data}) {

    const {user} = useAuth()
    const [character, setCharacter] = useState(0);
    const [offer, setOffer] = useState({
        price: "",
        blurb: "",
    });

    const changeHandler = (e) => {
        const {name, value} = e.target;
        setOffer((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        await createOffer(data, offer, user)
    };

    return (
        <div className="w-[700px] max-h-[600px] relative overflow-auto bg-white rounded-md">
            <div className="flex items-center justify-between p-5">
                <div></div>
                <span className="text-sm font-medium">{data.serviceName}</span>
                <IoClose onClick={() => destroyAllModal()} className="text-2xl cursor-pointer"/>
            </div>

            <div className="flex items-center gap-x-4 my-2 p-5">
                <span
                    className="h-14 w-14 rounded-full bg-[#c96ab1] text-white text-xl font-semibold flex items-center justify-center">
                    {data.user.name.slice(0, 1)}
                </span>
                <span className="text-xl font-medium">{data.user.name}</span>
            </div>

            <div className="flex flex-col gap-y-2 text-zinc-700 text-xs pb-4 border-b border-zinc-200 px-5">
                <div className="flex items-center gap-x-2">
                    <MdOutlinePhone className="text-base"/>
                    <span>Müsteriyi arayabilirsin ancak müsterinin telefon numarasi bu isi kazanana kadar gizli kalacak</span>
                </div>
                <div className="flex items-center gap-x-2">
                    <CiDollar className="text-base"/>
                    <span>Teklif ücreti 125,19 TL</span>
                </div>
            </div>

            <ul className="flex flex-col gap-y-5 py-6 p-5">
                {data.details.map((detail, index) => (
                    <li className="flex flex-col gap-y-3" key={index}>
                        <span className="text-base font-medium">{detail.question}</span>
                        <span className="text-sm leading-5">{detail.answer}</span>
                    </li>
                ))}
            </ul>

            <div className="p-5 border-t border-zinc-200 bg-zinc-100">
                <h3 className="text-lg font-medium mb-4">Teklif Ver</h3>
                <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
                    <div className="flex gap-x-2 items-center relative">
                        <input
                            type="number"
                            id="price"
                            name="price"
                            value={offer.price}
                            onChange={changeHandler}
                            placeholder="0"
                            className="flex-1 text-sm border border-zinc-300 rounded-md h-10 px-3 outline-none"
                        />
                        <span
                            className="absolute top-0 right-0 h-full border-l px-3 text-sm border-zinc-300 flex items-center justify-center">TL</span>
                    </div>
                    <>
                        <textarea
                            id="message"
                            name="blurb"
                            value={offer.blurb}
                            onChange={(e) => {
                                changeHandler(e);
                                setCharacter(e.target.value.length);
                            }}
                            placeholder="Müşterinin ihtiyacını anladığını göster. Onun ihtiyacına özel bir fiyat teklifi ver. Neden güvenilir ve farklı olduğunu anlat."
                            className="w-full border border-zinc-300 rounded-md p-3 h-28 resize-none text-sm outline-none"
                        />
                        <span className="text-xs text-zinc-500">{character}/2000 karakter</span>
                    </>
                </form>
            </div>

            <div className="flex gap-x-4 sticky bottom-0 bg-white p-5 border-t border-zinc-300 text-sm">
                <button
                    type="button"
                    className="flex-1 border border-zinc-300 h-10 rounded-md flex items-center justify-center gap-x-2 cursor-pointer"
                >
                    <FaTrashAlt/>
                    <span className="font-medium">Reddet</span>
                </button>
                <button
                    onClick={() => handleSubmit()}
                    type="button"
                    className="flex-1 border bg-primary text-white border-zinc-300 h-10 rounded-md flex items-center justify-center cursor-pointer"
                >
                    <span className="font-medium">Teklif Ver (125,19 TL)</span>
                </button>
            </div>
        </div>
    );
}
