import useFetch from "../../../../../../hooks/get";
import {formatDate} from "../../../../../../utils/date/date";

export default function ConfirmUser() {
    const { data: confirmedUsers } = useFetch("/api/User/get-confirmed-user");


    return (
        <div className="p-6 shadow-md w-full">
            <div className="overflow-x-auto">
                <table className="min-w-full">
                    <thead>
                    <tr className="text-left text-sm">
                        <th className="text-[#a1a1aa] text-[14px]">
                            <div className="py-2 border-b border-zinc-700 mr-2">Kullanıcı Adı</div>
                        </th>
                        <th className="text-[#a1a1aa] text-[14px]">
                            <div className="py-2 border-b border-zinc-700 mr-2">E-mail</div>
                        </th>
                        <th className="text-[#a1a1aa] text-[14px]">
                            <div className="py-2 border-b border-zinc-700 mr-2">Telefon</div>
                        </th>
                        <th className="text-[#a1a1aa] text-[14px]">
                            <div className="py-2 border-b border-zinc-700 mr-2">Adres</div>
                        </th>
                        <th className="text-[#a1a1aa] text-[14px]">
                            <div className="py-2 border-b border-zinc-700 mr-2">Oluşturulma Tarihi</div>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {confirmedUsers && confirmedUsers.length > 0 ? (
                        confirmedUsers.map((confirmedUser, index) => (
                            <tr key={index} className="text-zinc-300 text-sm">
                                <td className="py-2">{confirmedUser.name}</td>
                                <td className="py-2">{confirmedUser.email}</td>
                                <td className="py-2">
                                    {confirmedUser.phone ? confirmedUser.phone : "N/A"}
                                </td>
                                <td className="py-2">
                                    {confirmedUser.address ? confirmedUser.address : "N/A"}
                                </td>
                                <td className="py-2">
                                    {formatDate(confirmedUser.createdAt)}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center py-4 text-zinc-300">
                                Onaylanmış kullanıcı bulunamadı.
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
