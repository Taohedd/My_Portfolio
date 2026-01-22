import React, { FC } from "react"
interface PageWrapperProps extends React.HTMLAttributes<HTMLDivElement>{
    className?: string;
    children?: React.ReactNode;
}

const PageWrapper: FC<PageWrapperProps> = ({className, children}: PageWrapperProps) => {
    return(
        <div className={`w-[94%] relative min-h-screen my-12 mx-auto ${className ?? ""}`}>
            {children}
        </div>
    )
}
export default PageWrapper;