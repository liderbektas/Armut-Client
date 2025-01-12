import {SERVICE_LIST} from "../../../../../../utils/service-list";

export default function ServiceList(){
    return (
        <ul className="flex items-center justify-between gap-x-6">
            {SERVICE_LIST.slice(0,10).map((item, index) => (
                <li className="font-bold cursor-pointer" key={index}>
                    <span>{item.category}</span>
                </li>
            ))}
        </ul>
    )
}