import {NavLink} from "react-router-dom";
import classNames from "classnames";

export default function OfferItem({offer, setSelectedUser}) {

    return (
        <NavLink
            onClick={() => setSelectedUser(true)}
            to={`/mesajlas/${offer.user.id}`}
            key={offer.id}
            className={({isActive}) =>
                classNames("flex items-center justify-between cursor-pointer transition-all duration-200 px-2 h-24", {
                    "bg-[#e3e4e6]": isActive,
                    "hover:bg-[#e3e4e6]": !isActive,
                })
            }
        >
            <div className="flex items-center gap-x-3">
                  <span className="h-12 w-12 rounded-full flex items-center justify-center bg-primary text-white text-sm font-medium">
                      {offer.user.name.slice(0, 1)}
                  </span>
                <div className="flex flex-col gap-y-1">
                    <span className="font-semibold text-sm">{offer.user.name}</span>
                    <span className="font-semibold text-xs">4.9 yorum</span>
                    <p className="text-xs text-zinc-400">Hemen teklifleri değerlendir!</p>
                </div>
            </div>
            <span className="text-sm font-semibold">{offer.offerPrice}TL</span>
        </NavLink>
    )
}