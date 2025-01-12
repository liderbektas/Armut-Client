import Button from "../../../../../../components/button";
import {createModal} from "../../../../../../store/modal/actions/actions";
import {useAuth, useModal} from "../../../../../../store/hooks/hooks";
import Modals from "../../../../../../modals/apperance";
import {Link, useNavigate} from "react-router-dom";
import {setLogout} from "../../../../../../store/auth/actions/actions";
import toast from "react-hot-toast";

export default function UserActions() {

    const navigate = useNavigate()
    const {user} = useAuth();
    const modal = useModal();

    return (
        <div className="flex items-center gap-x-2">
            <Button as="button" variant="primary" size="normal">
                Yardım
            </Button>

            {user === undefined || user === null ? (
                <>
                    <Button
                        onClick={() => createModal("login")}
                        as="button" variant="secondary" size="normal">
                        Hizmet Ver
                    </Button>
                    <Button
                        onClick={() => createModal("login")}
                        as="button"
                        variant="primary"
                        size="normal"
                    >
                        Giriş
                    </Button>
                </>
            ) : (
                <>
                    <Button
                        as={Link} to={user?.isVerified ? "/hesabım/hesap-detayları" : "hesap-onayla"}
                        variant="primary" size="normal">
                        Hesabım
                    </Button>
                    <Button
                        onClick={() => {
                            setLogout()
                            navigate("/")
                            toast.success("Çıkış Yapıldı")
                        }}
                        as="button"
                        variant="primary"
                        size="normal"
                    >
                        Çıkış Yap
                    </Button>
                </>
            )}

            {modal.length > 0 && <Modals/>}
        </div>
    );
}
