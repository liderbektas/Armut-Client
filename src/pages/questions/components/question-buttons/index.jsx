export default function QuestionButtons({values, nextHandle, submitHandler}) {
    return (
        <div className="flex justify-between mt-6">
            {values.step === values.lastStep ? (
                <button
                    onClick={() => submitHandler(values)}
                    type="button"
                    className="px-6 py-2 bg-green-500 w-full text-white rounded-md hover:bg-green-600"
                >
                    Tamamla
                </button>
            ) : (
                <button
                    type="button"
                    onClick={nextHandle}
                    className="px-6 py-2 bg-primary text-white rounded-md w-full"
                >
                    Devam
                </button>
            )}
        </div>
    )
}