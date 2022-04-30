import styles from "./Heading.module.css"
import cn from "classnames"

export type HeadingVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

export const Heading = ({children, className, variant}: {
    children: React.ReactNode,
    className?: string,
    variant?: HeadingVariant
}) => {
    const HeadingVariant = variant || "h1";
    return (
        <HeadingVariant className={cn(className)}>{children}</HeadingVariant>
    )
}

export default Heading