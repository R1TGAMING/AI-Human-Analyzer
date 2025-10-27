import type React from "react";

const Details = ({
    children,
    className,
    attribute,
}: {
    children: React.ReactNode;
    className?: string;
    attribute?: React.DetailsHTMLAttributes<HTMLDetailsElement>;
}) => {
    return (
        <details
            className={
                "shadow-md shadow-blue-400 px-10 ring-blue-500 ring-1 py-5 w-full rounded-full text-blue-400 font-bold   " +
                className
            }
            {...attribute}
        >
            {children}
        </details>
    );
};

export default Details;
