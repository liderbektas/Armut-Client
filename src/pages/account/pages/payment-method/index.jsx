import { motion } from "framer-motion";
import { LuPlus } from "react-icons/lu";
import { useState } from "react";
import InputField from "../../../../components/input";
import { MONTHS, YEARS } from "../../../../utils/credit-card-time";
import Button from "../../../../components/button";
import {useAuth} from "../../../../store/hooks/hooks";
import {updatePaymentMethod} from "../../../../api/user/update";

export default function PaymentMethod() {

    const {user} = useAuth();
    const [show, setShow] = useState(false);
    const [paymentState, setPaymentState] = useState({
        creditCardNumber: user.creditCardNumber || "",
        creditCardMonth: user.creditCardNumber || "",
        creditCardYear: user.creditCardMonth || "",
        cvv: user.creditCardCvvCode || "",
    });

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setPaymentState((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updatePaymentMethod(
            paymentState.creditCardNumber,
            paymentState.creditCardMonth,
            paymentState.creditCardYear,
            paymentState.cvv,
            user.id
        )
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-black flex flex-col gap-y-7"
        >
            <h3 className="text-3xl font-semibold">Ödeme seçenekleri</h3>
            <h4 className="text-xl font-semibold">Bir kredi kartı seç</h4>

            <div className="bg-[#f8f8f8] p-2 flex items-center justify-between gap-x-2">
                <span className="text-sm cursor-pointer">Kredi kartı ekle</span>
                <LuPlus onClick={() => setShow(true)} className="cursor-pointer" />
            </div>

            {show && (
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-y-4"
                >
                    <h3 className="text-xl font-semibold">Kart bilgileri</h3>

                    <InputField
                        placeholder="1542 0545 0658 0789"
                        name="creditCardNumber"
                        value={paymentState.creditCardNumber}
                        onChange={changeHandler}
                    />

                    <div className="grid grid-cols-2 gap-x-4">
                        <select
                            name="creditCardMonth"
                            value={paymentState.creditCardMonth}
                            onChange={changeHandler}
                            className="border border-gray-300 px-4 py-1.5 text-sm focus:outline-none"
                        >
                            <option value="">Ay</option>
                            {MONTHS.map((month, index) => (
                                <option key={index} value={month}>
                                    {month}
                                </option>
                            ))}
                        </select>

                        <select
                            name="creditCardYear"
                            value={paymentState.creditCardYear}
                            onChange={changeHandler}
                            className="border border-gray-300 px-4 py-1.5 text-sm focus:outline-none"
                        >
                            <option value="">Yıl</option>
                            {YEARS.map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>
                    </div>

                    <InputField
                        placeholder="CVV"
                        name="cvv"
                        value={paymentState.cvv}
                        onChange={changeHandler}
                    />

                    <Button
                        as="button"
                        type="submit"
                        size="large"
                        variant="filled-button"
                    >
                        Kaydet
                    </Button>
                </form>
            )}
        </motion.div>
    );
}
