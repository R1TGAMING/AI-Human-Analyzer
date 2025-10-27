import React from "react";

const Button = ({
    className,
    text,
    icon,
    onClick,
    disabled,
    type,
    children,
    attribute,
}: {
    disabled?: boolean;
    onClick?: () => void;
    className?: string;
    text?: string;
    type?: "button" | "submit" | "reset";
    icon?: React.ReactNode;
    children?: React.ReactNode;
    attribute?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}) => {
    return (
        <button
            type={type}
            disabled={disabled}
            className={
                "flex flex-row transition delay-150 duration-500 ease-in-out cursor-pointer  shadow-md shadow-blue-200 hover:bg-blue-100 hover:text-blue-500 hover:shadow-blue-300  px-4 py-1 outline-white rounded-2xl " +
                className
            }
            onClick={onClick}
            {...attribute}
        >
            <div className="">
                {icon && <span className="mr-2">{icon}</span>}
            </div>
            {children}
            {text}
        </button>
    );
};

export default Button;
