export default function UserList({data, setSelectedUser}) {
    return (
        <div
            onClick={() => setSelectedUser(true)}
            className="flex bg-[#e3e4e6] items-center transition-all cursor-pointer duration-200 px-2 h-24">
            <div className="flex items-center gap-x-3">
                <span
                    className="h-12 w-12 rounded-full flex items-center justify-center bg-primary text-white text-sm font-medium">
                    {data?.name?.slice(0, 1)}
                 </span>
                <div className="flex flex-col gap-y-1">
                    <span className="font-semibold text-sm">{data?.name}</span>
                    <span className="font-semibold text-xs">4.9 yorum</span>
                    <p className="text-zinc-600 text-xs truncate w-[270px]">
                        Hemen iş ile ilgili sohbet et
                    </p>
                </div>
            </div>
        </div>
    )
}