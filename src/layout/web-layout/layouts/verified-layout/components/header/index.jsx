import Button from "../../../../../../components/button";
import {Link, useNavigate} from "react-router-dom";
import {setLogout} from "../../../../../../store/auth/actions/actions";
import toast from "react-hot-toast";

export default function VerifiedHeader({warningHandler, user}) {

    const navigate = useNavigate();

    return (
        <div className="w-full h-16 border-b border-zinc-300 shadow-sm flex items-center justify-between">
            <header className="container w-[980px] mx-auto flex items-center justify-between">
                <img  onClick={() => {
                    navigate("/", {replace: true})
                }} className="h-8 cursor-pointer" src="https://cdn.armut.com/images/armut-header-logo-colour@2x.png"/>
                <div className="flex gap-x-2 items-center">
                    <span onClick={() => {
                        setLogout()
                        navigate("/")
                        toast.success("Çıkış yapıldı")
                    }} className="text-primary font-semibold text-sm cursor-pointer">ÇIKIŞ</span>
                    <Button onClick={warningHandler} as={Link} to={user?.isVerified && "/hesabım"}
                            variant="filled-button" size="normal">
                        HESABIM
                    </Button>
                </div>
            </header>
        </div>
    )
}