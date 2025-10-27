import React from "react";

const Modal = ({
    children,
    className,
    isOpen,
}: {
    children: React.ReactNode;
    className?: string;
    isOpen?: boolean;
}) => {
    if (!isOpen) return null;

    return (
        <div
            className={
                "z-50 fixed inset-0 bg-black/20 w-screen flex justify-center items-center p-10 transition-all duration-300  ease-in-out transform " +
                className
            }
        >
            <div
                className="bg-white h-full min-w-2xl p-4 rounded"
                data-aos="zoom-in"
                data-aos-duration="1000"
            >
                {children}
            </div>
        </div>
    );
};

export default Modal;
