import { useParams } from "react-router-dom";
import useFetch from "../../hooks/get";
import { useModal } from "../../store/hooks/hooks";
import Modals from "../../modals/apperance";
import ProfileHeader from "./components/profile-header";
import AverageComment from "./components/average-comment";
import UserComments from "./components/user-comments";

export default function UserProfilePage() {

    const { userId } = useParams();
    const { data: user } = useFetch(`/api/User/get-user-by-id/${userId}`);
    const { data: comments } = useFetch(`/api/Comment/get-comment-by-user/${userId}`);
    const modals = useModal();

    const rates = comments?.reduce((acc, curr) => acc + parseInt(curr.rate), 0);
    const averageRate = comments?.length > 0 ? Math.round(rates / comments.length) : 0;

    return (
        <>
            {user && comments ? (
                <div className="p-6 w-[600px]">

                    <ProfileHeader
                        user={user}
                        comments={comments}
                        averageRate={averageRate}
                    />

                    <div className="mt-6">

                        <AverageComment
                            rates={rates}
                            comments={comments}
                            averageRate={averageRate}
                        />

                        <UserComments comments={comments} />
                    </div>

                    {modals?.length > 0 && <Modals />}
                </div>
            ) : (
                <div>Yorumlar veya kullanıcı verisi yüklenmedi.</div>
            )}
        </>
    );
}
