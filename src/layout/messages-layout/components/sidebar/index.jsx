import useFetch from "../../../../hooks/get";
import {useParams} from "react-router-dom";
import UserList from "./components/user-list";
import SidebarHeader from "./components/sidebar-header";

export default function MessagesSidebar({setSelectedUser}) {

    const {toUserId} = useParams();
    const {data} = useFetch(`/api/User/get-user-by-id/${toUserId}`);

    return (
        <div className="h-[calc(100vh-63px)] shadow w-[425px] border-r border-zinc-200">
            <SidebarHeader/>
            <ul className="flex flex-col">
                <UserList data={data} setSelectedUser={setSelectedUser}/>
            </ul>
        </div>
    )
}
