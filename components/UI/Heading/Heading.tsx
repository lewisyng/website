import styles from "./Heading.module.css"
import cn from "classnames"

export type HeadingVariant = "large" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

export const Heading = ({children, className, variant}: {
    children: React.ReactNode,
    className?: string,
    variant?: HeadingVariant
}) => {
    return (
        <div className={cn(className, styles.heading)} data-variant={variant}>{children}</div>
    )
}

export default Heading