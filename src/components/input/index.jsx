const InputField = ({
                        label = "",
                        name,
                        value,
                        onChange,
                        placeholder = "",
                        type = "text",
                        className = "",
                        width = "w-[335px]",
                        height = ""
                    }) => {
    return (
        <div className={`${className}`}>
            <label
                htmlFor={name}
                className="block text-gray-700 font-medium mb-1 text-sm"
            >
                {label}
            </label>
            <input
                id={name}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`border border-gray-300 px-4 py-1.5 text-zinc-600 text-sm focus:border-zinc-600 focus:outline-none ${width} ${height ? `!h-${height}` : ''}`}
            />
        </div>
    );
};


export default InputField