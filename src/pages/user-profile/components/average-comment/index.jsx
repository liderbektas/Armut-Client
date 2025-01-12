import { createModal } from "../../../../store/modal/actions/actions";

export default function AverageComment({ comments, averageRate, rates }) {

    const averageRating = Math.round(rates / comments.length);
    const satisfactionRate = Math.round(averageRate * 20);

    return (
        <div>
            <div className="flex items-center gap-x-4">
                <h2 className="text-3xl font-medium">Müşteri Yorumları</h2>
                <h5
                    onClick={() => createModal("user-comment", comments)}
                    className="text-sm font-semibold pt-2 text-primary cursor-pointer"
                >
                    Tüm yorumları gör
                </h5>
            </div>

            <div className="mt-5 flex items-center gap-x-5 border-b border-zinc-200 p-4">
                <div>
                    <span className="text-5xl font-medium">
                        {averageRating}.0
                    </span>
                    <div className="text-zinc-400 font-medium text-xs pt-4">
                        {comments.length} onaylı yorum
                    </div>
                </div>

                <div className="flex flex-col items-center gap-y-1 border-l pl-5">
                    <span className="text-base font-semibold">
                        %{satisfactionRate} Memnuniyet Oranı
                    </span>
                    <div className="w-48 h-4 bg-gray-200 rounded ml-4">
                        <div
                            className="h-4 bg-green-500 rounded"
                            style={{ width: `${satisfactionRate}%` }}
                        ></div>
                    </div>
                    <div className="text-zinc-400 font-medium text-xs">
                        Bu hizmet veren ile çalışan {comments.length} kişi %{satisfactionRate} oranında memnun kaldı
                    </div>
                </div>
            </div>
        </div>
    );
}
