import {HubConnectionBuilder} from "@microsoft/signalr";
import axios from "axios";

export const initializeSignalRConnection = async (setConnection, setMessages) => {
    const conn = new HubConnectionBuilder()
        .withUrl("http://localhost:5085/chat")
        .withAutomaticReconnect()
        .build();

    try {
        await conn.start();
        setConnection(conn);
        conn.on("ReceiveMessage", (newMessage) => {
            setMessages((prevMessages) => [...prevMessages, newMessage]);
        });
    } catch (err) {
    }
};

export const sendMessage = async (e, message, user, toUserId, setMessages, setMessage) => {
    e.preventDefault();
    if (!message.trim()) return;

    try {
        const response = await axios.post("http://localhost:5085/api/Chat", {
            UserId: user.id,
            ToUserId: parseInt(toUserId),
            Message: message,
        });

        setMessages((prevMessages) => [
            ...prevMessages,
            response.data.Message
        ]);

        setMessage("");
    } catch (error) {
    }
};
