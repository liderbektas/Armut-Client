import {Link, useNavigate, useParams} from "react-router-dom";
import useFetch from "../../../../../../hooks/get";
import {FaPhoneAlt} from "react-icons/fa";

export default function UserDetailHeader() {

    const {toUserId} = useParams()
    const {data: user} = useFetch(`/api/User/get-user-by-id/${toUserId}`)
    const navigate = useNavigate();

    return (
        <div className="border-b border-zinc-300 shadow h-[48px] px-4 flex items-center w-full">
            <div className="flex items-center justify-between w-full">
                <div className="flex gap-x-3">
                    <Link
                        to={`/kullanici-detay/${user?.id}`}
                        className="h-8 w-8 rounded-full bg-primary text-white text-xs font-medium flex items-center justify-center">
                        {user?.name.slice(0, 1)}
                    </Link>
                    <div className="flex flex-col items-center justify-center">
                        <span className="text-sm font-medium">{user?.name}</span>
                    </div>
                </div>

                <div className="flex items-center gap-x-8">
                    <FaPhoneAlt className="font-medium"/>
                    <button onClick={() => navigate(`/kullanici-detay/${user?.id}`)}
                            className="text-sm font-medium text-white bg-primary h-8 px-10 rounded-md flex items-center justify-center">
                        Profili Gör
                    </button>
                </div>
            </div>
        </div>
    )
}