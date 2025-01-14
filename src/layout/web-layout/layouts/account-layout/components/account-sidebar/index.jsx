import {ACCOUNT_SIDEBAR} from "../../../../../../utils/account-sidebar";
import {Link, NavLink} from "react-router-dom";
import classNames from "classnames";

export default function AccountSidebar() {
    return (
        <div className="w-[300px] h-[calc(100vh-63px)] border-r border-zinc-300 shadow flex flex-col">
            <h3 className="text-3xl font-semibold mt-12 px-8">Hesabım</h3>

            <ul className="flex flex-col mt-8">
                {ACCOUNT_SIDEBAR.slice(0, 3).map((item, index) => (
                    <li key={index}>
                        <NavLink
                            to={item.path}
                            className={({isActive}) =>
                                classNames(
                                    "group flex items-center px-8 py-6 text-zinc-700 text-[14px] font-semibold w-full transition-all",
                                    {
                                        "bg-[#f3f3f3]": isActive,
                                        "hover:bg-[#f3f3f3]": !isActive,
                                    }
                                )
                            }
                        >
                            {item.title}
                        </NavLink>
                    </li>
                ))}
            </ul>

            <h3 className="text-2xl font-semibold mt-12 px-8">Destek</h3>
            <ul className="flex flex-col mt-8">
                {ACCOUNT_SIDEBAR.slice(3, ACCOUNT_SIDEBAR.length - 1).map((item, index) => (
                    <li key={index}>
                        <NavLink
                            to={item.path}
                            className={({isActive}) =>
                                classNames(
                                    "group flex items-center px-8 py-6 text-zinc-700 text-[14px] font-semibold w-full transition-all",
                                    {
                                        "bg-[#f3f3f3]": isActive,
                                        "hover:bg-[#f3f3f3]": !isActive,
                                    }
                                )
                            }
                        >
                            {item.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <Link
                to="/hizmet-ver/fırsatlarım"
                className="flex items-center px-8 py-6 text-zinc-700 text-[14px] font-semibold w-full transition-all hover:bg-[#f3f3f3]">
                    Hizmetveren olarak kullan
            </Link>
        </div>
    );
}
