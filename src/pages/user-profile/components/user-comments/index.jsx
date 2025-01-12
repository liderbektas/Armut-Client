import {FaStar} from "react-icons/fa";
import {formatDate} from "../../../../utils/date/date";

export default function UserComments({comments}) {
    return (
        <ul className="flex flex-col gap-y-3 pt-3">
            {comments
                .slice()
                ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                .slice(0, 3)
                .map((comment, i) => (
                    <li className="flex flex-col gap-y-2 border-b border-zinc-200 py-1" key={i}>
                        <div className="flex items-center justify-between">
                            <div className="text-sm flex">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar
                                        key={i}
                                        className={`${i < parseInt(comment.rate) ? "text-primary" : "text-gray-300"}`}
                                    />
                                ))}
                            </div>
                            <span className="text-zinc-500 text-xs font-medium">{formatDate(comment.createdAt)}</span>
                        </div>
                        <span className="text-sm font-medium">{comment?.authorName}</span>
                        <span className="text-zinc-700 text-sm">{comment?.content}</span>
                    </li>
                ))}
        </ul>
    )
}