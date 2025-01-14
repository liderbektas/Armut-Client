import useFetch from "../../../../../../hooks/get";
import {formatDate} from "../../../../../../utils/date/date";
import {verifiedUser} from "../../../../../../api/admin/put";

export default function UnapprovedUser() {

    const {data: unApprovedUsers} = useFetch("/api/User/get-unapproved-user");

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
                        <th className="text-[#a1a1aa] text-[14px]">
                            <div className="py-2 border-b border-zinc-700 mr-2">Onayla</div>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {unApprovedUsers && unApprovedUsers.length > 0 ? (
                        unApprovedUsers.map((unApprovedUser, index) => (
                            <tr key={index} className="text-zinc-300 text-sm">
                                <td className="py-2">{unApprovedUser.name}</td>
                                <td className="py-2">{unApprovedUser.email}</td>
                                <td className="py-2">
                                    {unApprovedUser.phone ? unApprovedUser.phone : "N/A"}
                                </td>
                                <td className="py-2">
                                    {unApprovedUser.address ? unApprovedUser.address : "N/A"}
                                </td>
                                <td className="py-2">
                                    {formatDate(unApprovedUser.createdAt)}
                                </td>
                                <td className="py-2">
                                    <button onClick={() => verifiedUser(unApprovedUser.id)}
                                            className="bg-[#27272a] rounded-md flex items-center justify-center h-9 px-5">
                                        Onayla
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center py-4 text-zinc-300">
                                Onaylanmamış kullanıcı bulunamadı.
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}