import InputField from "../../../../../components/input";

export default function LoginForm ({form, changeHandler}) {
    return (
        <div className="grid mt-8 gap-y-5">
            <InputField
                width="w-[400px]"
                placeholder="Email"
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={changeHandler}
            />
            <InputField
                width="w-[400px]"
                placeholder="Password"
                label="Password"
                name="password"
                type="password"
                value={form.password}
                onChange={changeHandler}
            />
        </div>
    )
}