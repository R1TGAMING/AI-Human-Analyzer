const Input = ({
    placeholder,
    className,
}: {
    placeholder?: string;
    className?: string;
}) => {
    return (
        <input
            placeholder={placeholder}
            className={
                "outline-2 outline-blue-400 rounded text-gray-400 px-2 py-1 " +
                className
            }
        ></input>
    );
};

export default Input;
