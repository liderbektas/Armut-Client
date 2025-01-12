import {ErrorMessage, Form, Formik} from "formik";
import Button from "../../../components/button";
import {serveStepper} from "../../../validations/serve-stepper-validations";
import {createServe} from "../../../api/serve/create";
import {useAuth} from "../../../store/hooks/hooks";
import {IoClose} from "react-icons/io5";
import {destroyAllModal} from "../../../store/modal/actions/actions";
import {useNavigate} from "react-router-dom";

export default function ServeModal({data}) {

    const {user} = useAuth();
    const navigate = useNavigate();

    const submitHandler = async (values) => {
        await createServe(user.id, data.service, data.category, values.description);
        navigate("/hizmet-ver/hizmetlerim")
    };

    return (
        <div className="w-[520px] h-auto bg-white rounded-md p-6">
            <Formik
                validationSchema={serveStepper}
                initialValues={{
                    step: 1,
                    lastStep: 1,
                    description: "",
                }}
                onSubmit={(values) => {
                    submitHandler(values);
                }}
            >
                {({values, setFieldValue}) => {
                   /* const nextHandle = () => {
                        if (values.step < values.lastStep) {
                            setFieldValue("step", values.step + 1);
                        }
                    };*/

                    return (
                        <Form>
                            {values.step === 1 && (
                                <div className="flex flex-col gap-y-5 items-center relative">
                                    <IoClose
                                        onClick={() => destroyAllModal()}
                                        className="absolute -top-2 -right-2 text-3xl cursor-pointer" />
                                    <h3 className="text-2xl font-medium">Tanıtım yazısı</h3>
                                    <p className="text-zinc-400 text-sm text-center">
                                        Müşterilerin dikkatini çekmek ve farklılaşmak için deneyimini ve seni farklı
                                        yapan özelliklerini anlat.
                                    </p>
                                    <textarea
                                        name="description"
                                        className="rounded-md border border-zinc-300 w-full outline-none focus:border-zinc-500 p-5"
                                        rows="8"
                                        onChange={(e) => setFieldValue("description", e.target.value)}
                                    />
                                    <ErrorMessage
                                        name="description"
                                        component="small"
                                        className="text-red-600 block text-xs"
                                    />
                                    <div className="grid w-full">
                                        <Button
                                            as="button"
                                            type="submit"
                                            variant="filled-button"
                                            size="x-large"
                                        >
                                            Bitir ve Oluştur
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
}
