import React, {useState} from "react";
import {Formik, Form} from "formik";
import {useNavigate, useParams} from "react-router-dom";
import {SERVICE_LIST} from "../../utils/service-list";
import FormBuilder from "../../components/form-builder";
import QuestionHeader from "./components/question-header";
import QuestionButtons from "./components/question-buttons";
import {useAuth} from "../../store/hooks/hooks";
import {createRequest} from "../../api/request/create";

const QuestionsPage = () => {

    const {user} = useAuth();
    const {id} = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState([]);

    const list = SERVICE_LIST.find((item) => item.id === Number(id));

    const initialValues = list.questions.reduce((acc, curr) => {
        acc[curr.question] = "";
        return acc;
    }, {});

    const submitHandler = async (values) => {
        if (values.step === values.lastStep) {
            await createRequest(user, list, formData);
        }
        navigate("/islerim")
    };

    return (
        <>
            <div className="flex justify-center pt-6">
                <Formik
                    initialValues={{
                        step: 1,
                        lastStep: list.questions.length - 1,
                        answers: initialValues
                    }}
                    onSubmit={(values) => {
                        //
                    }}
                >
                    {({values, setFieldValue}) => {
                        const currentQuestions = list.questions.filter(
                            (q, index) => index === values.step - 1)

                        const nextHandle = () => {
                            if (values.step < values.lastStep) {
                                setFieldValue("step", values.step + 1);
                            } else {
                                submitHandler(values);
                            }
                        };

                        const prevHandle = () => {
                            if (values.step > 1) {
                                setFieldValue("step", values.step - 1);
                            }
                        };

                        return (
                            <div className="w-full max-w-lg border border-zinc-200 rounded-md p-6">
                                <QuestionHeader
                                    list={list}
                                    values={values}
                                    prevHandle={prevHandle}
                                />

                                <Form>
                                    <FormBuilder
                                        setFormData={setFormData}
                                        questions={currentQuestions}
                                        setFieldValue={setFieldValue}
                                    />

                                    <QuestionButtons
                                        submitHandler={submitHandler}
                                        values={values}
                                        nextHandle={nextHandle}
                                    />
                                </Form>
                            </div>
                        );
                    }}
                </Formik>
            </div>
        </>
    );
};


export default QuestionsPage;
