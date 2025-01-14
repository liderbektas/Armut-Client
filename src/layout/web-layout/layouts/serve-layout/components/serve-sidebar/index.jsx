import {Link, NavLink} from "react-router-dom";
import {SERVE_SIDEBAR} from "../../../../../../utils/serve-sidebar";
import classNames from "classnames";
import {useAuth} from "../../../../../../store/hooks/hooks";

export default function ServeSidebar() {

    const {user} = useAuth()

    return (
        <aside className="w-[250px] h-full border-r border-zinc-200 px-8 py-6 flex flex-col">
            <div className="pt-12">
                <svg fill="none" height="36" version="1.1" width="99.5" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 100 32">
                    <path clipRule="evenodd"
                          d="M9.4 5.27a.17.17 0 0 1-.16.1.16.16 0 0 1-.16-.11.17.17 0 0 1 0-.07c.13-2.15.67-3.48 1.2-4.2.09-.12.18-.22.28-.32a2.48 2.48 0 0 1 2.07-.64.23.23 0 0 1 .2.23.22.22 0 0 1 0 .05 3.58 3.58 0 0 1-1 1.82s-.05.05-.08.07l-.08.07A6.26 6.26 0 0 0 10.1 4c-.33.54-.72 1.27-.72 1.27Zm6.06 10.53a13.4 13.4 0 0 1 1.7 2.1 9.05 9.05 0 0 1 1.34 4.55v.5a9.31 9.31 0 0 1-2.71 6.33 9.23 9.23 0 0 1-6.3 2.71h-.56a9.23 9.23 0 0 1-6.25-2.74A9.31 9.31 0 0 1 0 22.94v-.45a9.28 9.28 0 0 1 2.48-6.11c.13-.15.65-.65.77-.77a7.76 7.76 0 0 0 1.76-2.34l.39-.94a8.5 8.5 0 0 0 .49-2.08l.01-.2.01-.24A3.38 3.38 0 0 1 6.94 7.7a3.35 3.35 0 0 1 2.16-.93h.36a3.35 3.35 0 0 1 2.13.95c.57.56.93 1.3 1 2.1v.15l.02.32a8.69 8.69 0 0 0 .88 2.96 8.18 8.18 0 0 0 1.96 2.55Z"
                          fill="#2CB34F" fillRule="evenodd"></path>
                    <path clipRule="evenodd"
                          d="M98.1 15.14a1.38 1.38 0 0 0 1.37-1.36V11.9h-3.45V8.34H92.5v15.67a5.14 5.14 0 0 0 5.23 4.98h1.72v-3.55H97.7a1.7 1.7 0 0 1-1.2-.52 1.71 1.71 0 0 1-.48-1.21v-8.57h2.07Zm-42.24 3.11a3.03 3.03 0 0 1 3.02-2.97 3 3 0 0 1 3 2.97v9.42c0 .74.51 1.3 1.25 1.3h2.24V18.25c.01-.8.34-1.55.9-2.1a3 3 0 0 1 2.11-.87 2.96 2.96 0 0 1 2.12.86 2.98 2.98 0 0 1 .9 2.11v9.42a1.34 1.34 0 0 0 .84 1.21c.17.06.34.1.51.09h2.16V18.25c0-3.53-2.73-6.4-6.53-6.4a6.6 6.6 0 0 0-4.9 2.17 6.36 6.36 0 0 0-3.23-1.98 6.34 6.34 0 0 0-3.79.23 6.37 6.37 0 0 0-2.98 2.35 6.41 6.41 0 0 0-1.13 3.63v10.72h3.51V18.25Zm30.74 9.42v-.65c-.25.9-1.06 1.38-1.85 1.65-3.76 1.2-7.67-2.22-7.66-6.1V11.9h3.49V22.6a3 3 0 0 0 3 2.97h.04a3.03 3.03 0 0 0 2.98-2.97V11.89h3.51v17.08h-2.15a1.32 1.32 0 0 1-1.25-.8 1.34 1.34 0 0 1-.11-.5Zm-40.24 1.3h-3.52V11.89h3.52v1.94c.27-.45.63-.84 1.07-1.14.75-.54 1.95-1 3.71-.72.44.1.87.23 1.28.4l-1.64 3.04a3.44 3.44 0 0 0-4.42 3.27v10.29ZM32 11.89a8.44 8.44 0 0 1 4.97 1.6v-1.6h3.52v17.08h-2.2a1.31 1.31 0 0 1-.89-.34 1.32 1.32 0 0 1-.42-.87v-.4a8.48 8.48 0 0 1-7.63 1.18 8.5 8.5 0 0 1-3.38-2.09 8.55 8.55 0 0 1-2.06-3.4 8.58 8.58 0 0 1 1.22-7.65 8.51 8.51 0 0 1 3.01-2.58 8.47 8.47 0 0 1 3.86-.93Zm-4.97 8.54a5 5 0 0 0 1.48 3.47 4.96 4.96 0 0 0 6.97 0 5 5 0 0 0 1.49-3.47 5 5 0 0 0-1.49-3.48 4.96 4.96 0 0 0-6.97 0 5 5 0 0 0-1.48 3.48Z"
                          fill="#111321" fillRule="evenodd"></path>
                </svg>
            </div>

            <ul className="flex flex-col gap-y-3 pt-12">
                {SERVE_SIDEBAR.map((item, index) => (
                    <NavLink key={index} to={item.path}
                             className={({isActive}) =>
                                 classNames("group flex items-center gap-x-3 w-24 px-2 py-2 text-zinc-700 rounded-2xl text-[14px] font-semibold w-full transition-all", {
                                     "bg-[#f3f3f3]": isActive,
                                     "hover:bg-[#f3f3f3]": !isActive,
                                 })
                             }
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </NavLink>
                ))}
            </ul>

            <div className="mt-auto">
                <Link to="/hesabım/hesap-detayları" className="flex gap-x-2 items-center cursor-pointer">
                    <span className="h-10 w-10 flex items-center justify-center rounded-full text-white font-semibold bg-[#c96ab1]">
                        {user.name.slice(0,1)}
                    </span>
                    <div className="flex flex-col justify-center text-xs">
                        <span>{user.name}</span>
                        <span className="font-semibold">Ayarlar</span>
                    </div>
                </Link>
            </div>
        </aside>
    )
}