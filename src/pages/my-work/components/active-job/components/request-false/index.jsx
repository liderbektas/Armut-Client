export default function RequestFalse() {
    return (
        <div className="flex gap-x-20 items-center">
            <img
                src="https://cdn.armut.com/images/themes/armut/tr:w-326/illustration-search.png"
                className="h-36"
                alt="No active request"
            />
            <p className="text-center w-[450px] font-normal leading-6">
                Aktif bir talebin bulunmuyor. Hemen arama çubuğuna isteğini yazarak ihtiyacın olan hizmete kolayca
                ulaşabilirsin!
            </p>
        </div>
    )
}