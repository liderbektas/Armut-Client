import RegisterHeaeder from "./components/register-heaeder";
import RegisterForm from "./components/register-form";
import RegisterButtons from "./components/register-buttons";
import {useState} from "react";
import {signup} from "../../../api/auth/register";

export default function RegisterModal() {

    const [form, setForm] = useState({
        email: "",
        password: "",
        name: ""
    });

    const submitHandler = async (e) => {
        e.preventDefault();
        await signup(form.name, form.email, form.password);
    };

    return (
        <form
            onSubmit={submitHandler}
            className="h-auto w-[450px] p-5 rounded-md bg-white text-black shadow-lg"
        >
            <RegisterHeaeder/>
            <RegisterForm form={form} setForm={setForm}/>
            <RegisterButtons/>
        </form>
    )
}