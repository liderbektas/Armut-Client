import { motion } from "framer-motion";
import Button from "../../../../components/button";
import { useState } from "react";
import {useAuth} from "../../../../store/hooks/hooks";
import InputField from "../../../../components/input";
import {updatePassword} from "../../../../api/user/update";

export default function ChangePassword() {
    const {user} = useAuth();
    const [passwordState, setPasswordState] = useState({
        password: "",
        newPassword: "",
        newPasswordConfirm: "",
    });

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setPasswordState((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updatePassword(passwordState.password, passwordState.newPassword, passwordState.newPasswordConfirm, user.id);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-black flex flex-col gap-y-7">
            <h3 className="text-3xl font-semibold">Şifre Değiştir</h3>

            <form className="w-full flex flex-col gap-y-6" onSubmit={handleSubmit}>
                <InputField
                    type="password"
                    name="password"
                    label="Mevcut şifre"
                    onChange={changeHandler}
                    placeholder="Mevcut şifre"
                    value={passwordState.password}
                />
                <InputField
                    name="newPassword"
                    type="password"
                    label="Yeni şifre"
                    onChange={changeHandler}
                    placeholder="Yeni şifre"
                    value={passwordState.newPassword}
                />
                <InputField
                    name="newPasswordConfirm"
                    type="password"
                    label="Yeni şifre tekrarla"
                    onChange={changeHandler}
                    placeholder="Yeni şifre tekrarla"
                    value={passwordState.newPasswordConfirm}
                />

                <Button as="button" variant="filled-button" type="submit" size="large">
                    Kaydet
                </Button>
            </form>
        </motion.div>
    );
}
