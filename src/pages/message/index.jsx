import {useEffect, useState} from "react";
import {useAuth} from "../../store/hooks/hooks";
import {useParams} from "react-router-dom";
import {IoMdSend} from "react-icons/io";
import classNames from "classnames";
import {formatDate} from "../../utils/date/date";
import useFetch from "../../hooks/get";
import {initializeSignalRConnection, sendMessage} from "../../hubs/hub";

export default function MessagePage() {

    const {user} = useAuth();
    const {toUserId} = useParams();
    const [connection, setConnection] = useState(null);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const {data: initialMessages} = useFetch(`http://localhost:5085/api/Chat?userId=${user.id}&toUserId=${toUserId}`);

    useEffect(() => {
        setMessages(initialMessages);
        initializeSignalRConnection(setConnection, setMessages);
    }, []);


    return (
        <form className="bg-[#f3f3f3] h-[calc(100vh-107px)] relative flex flex-col justify-between">
            <ul className="flex flex-col gap-y-3 pt-20 px-16 h-[600px] overflow-y-auto">
                {messages?.map((msg, index) => (
                    <li
                        key={index}
                        className={classNames(
                            "px-3 py-2 rounded-lg shadow-lg text-sm max-w-[70%] break-words",
                            msg.userId === user.id
                                ? "bg-primary text-white self-end"
                                : "bg-white text-gray-800 self-start"
                        )}
                    >
                        <span>{msg.message}</span>
                        <span className="text-[10px] mt-1 ml-2">{formatDate(msg.date)}</span>
                    </li>
                ))}
            </ul>

            <div className="flex items-center justify-center absolute bottom-5 left-0 right-0 p-4">
                <div className="w-full flex items-center space-x-2">
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Mesaj Yaz"
                        className="w-full p-3 border text-sm border-zinc-300 rounded-sm shadow-sm outline-none focus:border-zinc-500"
                    />
                    <button
                        onClick={(e) => sendMessage(e, message, user, toUserId, setMessages, setMessage)}
                        disabled={!message}
                        className={`flex items-center justify-center h-10 w-10 rounded-full ${!message ? "bg-primary opacity-70" : "bg-primary"} text-white`}
                    >
                        <IoMdSend className="text-xl"/>
                    </button>
                </div>
            </div>
        </form>
    );
}
