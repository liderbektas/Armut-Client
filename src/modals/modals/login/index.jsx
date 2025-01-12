import {useState} from "react";
import LoginModalHeader from "./components/header";
import LoginForm from "./components/form";
import LoginButtons from "./components/login-buttons";
import {signIn} from "../../../api/auth/login";

export default function LoginModal() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const changeHandler = (e) => {
        const {name, value} = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        await signIn(form.email, form.password);
    };

    return (
        <form
            onSubmit={submitHandler}
            className="h-auto w-[450px] p-5 rounded-md bg-white text-black shadow-lg"
        >
            <LoginModalHeader/>
            <LoginForm form={form} changeHandler={changeHandler}/>
            <LoginButtons submitHandler={submitHandler}/>
        </form>
    );
}
