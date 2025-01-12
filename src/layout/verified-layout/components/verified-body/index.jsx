export default function VerifiedBody() {
    return (
        <div className="h-[calc(100vh-63px)] bg-[#f8f8f8]">
            <div className="container w-[980px] mx-auto">
                <div
                    className="h-[276px] bg-white w-full p-10 shadow-2xl border-r border-l border-b border-zinc-300 grid grid-cols-2">
                    <div className="flex flex-col gap-y-2 w-[440px] grid grid-cols-1">
                        <h3 className="font-semibold text-xl">Güvenlik taraması</h3>
                        <p className="text-sm font-semibold">Güvenlik taraması güvenilir bir platform olma amacıyla
                            hesabının doğrulanması için gerçekleştirdiğimiz rutin bir adım. </p>
                        <p className="text-sm font-semibold">Onaylanma süreci 1 saat sürebilir. Onaylandıktan sonra
                            yakınındaki iş fırsatlarını görmeye devam edip daha fazla kazanmaya başla!</p>
                        <p className="text-sm">Hesabın onaylandıktan sonra hesabın tekrar kullanıma açılacak, hesabın
                            kullanıma açıldığında bizden bir bilgilendirme SMS’i alacaksın.</p>
                    </div>

                    <div className="grid grid-cols-1 place-items-center">
                        <img className="h-[210px]" src="https://cdn.armut.com/images/svgs/safe.svg"/>
                    </div>
                </div>
            </div>
        </div>
    )
}