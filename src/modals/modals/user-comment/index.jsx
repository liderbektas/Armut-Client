import { IoClose } from "react-icons/io5";
import { destroyAllModal } from "../../../store/modal/actions/actions";
import { FaStar } from "react-icons/fa";
import { formatDate } from "../../../utils/date/date";
import { useState } from "react";

export default function UserCommentModal({ data }) {
    const [activeFilter, setActiveFilter] = useState("date");

    const copiedComments = [...data]

    const sortComments = (comments) => {
        switch (activeFilter) {
            case "date":
                return comments?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            case "best":
                return comments?.sort((a, b) => b.rate - a.rate);
            case "worst":
                return comments?.sort((a, b) => a.rate - b.rate);
            default:
                return comments;
        }
    };

    const sortedComments = sortComments(copiedComments);

    return (
        <div className="p-5 w-[500px] max-h-screen bg-white rounded-md">
            <div className="flex items-center justify-between">
                <div></div>
                <span className="text-sm font-semibold">Müşteri Yorumları</span>
                <IoClose onClick={destroyAllModal} className="text-3xl font-semibold cursor-pointer" />
            </div>

            <div className="grid grid-cols-3 border-b border-zinc-300 pt-10 text-center cursor-pointer transition duration-200">
                <div
                    className={`${activeFilter === "date" ? "bg-zinc-200 py-2 font-bold text-zinc-700 text-sm" : "col-span-1 py-2 text-zinc-400 text-sm"}`}
                    onClick={() => setActiveFilter("date")}
                >
                    En Son
                </div>
                <div
                    className={`${activeFilter === "best" ? "bg-zinc-200 py-2 font-bold text-zinc-700 text-sm" : "col-span-1 py-2 text-zinc-400 text-sm"}`}
                    onClick={() => setActiveFilter("best")}
                >
                    En İyi
                </div>
                <div
                    className={`${activeFilter === "worst" ? "bg-zinc-200 py-2 font-bold text-zinc-700 text-sm" : "col-span-1 py-2 text-zinc-400 text-sm"}`}
                    onClick={() => setActiveFilter("worst")}
                >
                    En Kötü
                </div>
            </div>

            <ul className="flex flex-col gap-y-3 pt-4">
                {sortedComments?.map((comment, i) => (
                    <li className={`flex flex-col gap-y-1 ${i === sortedComments.length - 1 ? "" : "border-b border-zinc-200"}`} key={i}>
                        <div className="flex items-center justify-between">
                            <div className="text-sm flex">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar
                                        key={i}
                                        className={`${i < parseInt(comment.rate) ? "text-primary" : "text-gray-300"}`}
                                    />
                                ))}
                            </div>
                            <span className="text-zinc-700 text-xs font-medium">{formatDate(comment.createdAt)}</span>
                        </div>

                        <span className="text-sm font-medium">{comment?.authorName}</span>

                        <span className="text-zinc-700 text-sm">{comment?.content}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
