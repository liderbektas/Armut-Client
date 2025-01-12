import {motion} from "framer-motion";

export default function NoInactiveJob() {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            className="flex flex-col gap-y-4"
        >
            <div className="flex items-center justify-center gap-x-7">
                <img className="h-36" src="https://cdn.armut.com/images/themes/armut/tr:w-326/illustration-search.png"/>
                <p className="text-center w-[500px] text-base leading-6">
                    Tamamlanmış, iptal edilmiş veya zaman aşımına uğramış bir talebin yok. Hemen arama çubuğuna isteğini yaz, ihtiyacın olan hizmete kolayca ulaş!
                </p>
            </div>
        </motion.div>
    )
}