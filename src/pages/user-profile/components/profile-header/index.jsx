import {FiAward} from "react-icons/fi";
import {FaStar} from "react-icons/fa";
import {createModal} from "../../../../store/modal/actions/actions";

export default function ProfileHeader({user, comments, averageRate}) {
    return (
        <div className="flex items-center gap-x-10 border-b border-zinc-200 pb-8">
            <div className="flex items-center gap-x-10">
                  <span
                      className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-2xl text-white font-medium">
                      {user?.name.slice(0, 1).toUpperCase()}
                  </span>

                <div className="flex items-start flex-col gap-y-3">
                    <h1 className="text-4xl font-bold flex items-center gap-x-2">
                        <FiAward className="text-yellow-500"/>
                        {user.name}
                    </h1>
                    <div className="flex items-center gap-x-2">
                        <span className="flex text-sm">
                            {[...Array(5)].map((_, i) => (
                                <FaStar
                                    key={i}
                                    className={`${i < averageRate ? "text-primary" : "text-gray-300"}`}/>))}
                        </span>
                        <span onClick={() => createModal("user-comment", comments)}
                              className="text-sm text-zinc-700 cursor-pointer">
                            {comments?.length} onaylı yorum
                        </span>
                    </div>
                </div>
            </div>
        </div>)
}