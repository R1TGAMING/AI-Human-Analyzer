import type React from "react";

const TextArea = ({
    placeholder,
    onChange,
    value,
}: {
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) => {
    return (
        <textarea
            placeholder={placeholder}
            value={value}
            className="outline-2 p-2 outline-blue-400 rounded text-gray-500 bg-slate-400/20 "
            rows={20}
            cols={90}
            onChange={onChange}
        ></textarea>
    );
};

export default TextArea;
