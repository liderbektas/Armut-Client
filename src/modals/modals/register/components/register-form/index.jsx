import InputField from "../../../../../components/input";

export default function RegisterForm({setForm}){

    const changeHandler = (e) => {
        const {name, value} = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    return (
        <div className="grid mt-8 gap-y-5">
            <InputField
                width="w-[400px]"
                placeholder="Ad"
                label="Ad"
                name="name"
                type="text"
                onChange={changeHandler}
            />
            <InputField
                width="w-[400px]"
                placeholder="Email"
                label="Email"
                name="email"
                type="email"
                onChange={changeHandler}
            />
            <InputField
                width="w-[400px]"
                placeholder="Password"
                label="Password"
                name="password"
                type="password"
                onChange={changeHandler}
            />
        </div>
    )
}