const FormBuilder = ({questions, setFieldValue, setFormData}) => {

    console.log(questions)

    return (
        <>
            {questions.map((question, index) => {
                const handleChange = (e) => {
                    setFormData((prevData) => {
                        const updatedData = prevData.filter((item) => item.question !== question.question);
                        return [
                            ...updatedData,
                            { question: question.question, answer: e.target.value }
                        ]
                    });
                    setFieldValue(question.question, e.target.value);
                };
                switch (question.type) {
                    case "radio":
                        return (
                            <div key={index} className="flex flex-col gap-y-5 h-[270px] overflow-auto">
                                <h4 className="text-lg font-semibold">{question.question}</h4>
                                {question.options.map((option, optionIndex) => (
                                    <div key={optionIndex} className="flex items-center space-x-3">
                                        <input
                                            type="radio"
                                            id={option}
                                            name={question.question}
                                            value={option}
                                            onChange={handleChange}
                                            className="form-radio"
                                        />
                                        <label htmlFor={option}>{option}</label>
                                    </div>
                                ))}
                            </div>
                        );
                    default:
                        return null;
                }
            })}
        </>
    );
};

export default FormBuilder;
