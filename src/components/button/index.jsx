import {createElement} from "react";
import classNames from "classnames";

export default function Button({as, variant, size, children, ...props}) {
     return createElement(as, {
        ...props,
        className: classNames("h-7 flex items-center justify-center font-semibold", {

            "border border-white hover:opacity-30 text-white bg-transparent transition-all transition-duration-200": variant === "primary",
            "border border-zinc-300 text-sm transition-all transition-duration-200" : variant === "secondary",
            "bg-primary text-white px-3 py-1 text-sm hover:bg-[#24a13e]" : variant === "filled-button",


            "px-2": size === "normal",
            "h-9 px-2" : size === "large",
            "!h-14 px-6 rounded-lg text-[15px]" : size === "x-large"
        },)
    }, children);
}