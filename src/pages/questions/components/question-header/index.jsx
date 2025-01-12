import {MdChevronLeft} from "react-icons/md";
import {IoClose} from "react-icons/io5";
import {useNavigate} from "react-router-dom";

export default function QuestionHeader({values, prevHandle, list}) {

    const navigate = useNavigate();

    return (
        <header className="mb-6">
            <div className="flex justify-between items-center">
                {values.step > 1 ?
                    <MdChevronLeft onClick={prevHandle} className="cursor-pointer"/> :
                    <div></div>}
                <h2 className="text-md font-semibold text-center text-gray-800">
                    {list.service}
                </h2>
                <IoClose onClick={() => navigate("/islerim")}
                         className="text-2xl cursor-pointer"/>
            </div>
            <div className="flex justify-between items-center px-10 mt-4">
                <span className="text-xs font-semibold text-zinc-500">Ortalama fiyat aralığı:</span>
                <span className="font-semibold text-zinc-500">{list.priceRange}</span>
            </div>
            <div className="w-full bg-gray-200 h-1 rounded-full mt-4">
                <div
                    className="bg-green-500 h-1 rounded-full"
                    style={{
                        width: `${(values.step / values.lastStep) * 100}%`,
                    }}
                ></div>
            </div>
        </header>
    )
}