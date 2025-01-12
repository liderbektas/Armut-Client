import Logo from "./components/logo";
import ServiceList from "./components/service-list";
import UserActions from "./components/user-actions";

export default function Header() {

    return (
        <header className="container relative w-[1150px] relative mx-auto flex justify-between items-center h-16 z-10">
            <Logo/>
            <ServiceList/>
            <UserActions/>
        </header>
    );
}
