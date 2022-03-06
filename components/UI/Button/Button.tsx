import styles from "./Button.module.css"

export const Button = ({children}: {
    children: React.ReactNode
}) => {
    return (
        <div className={styles.button}>{children}</div>
    )
}

export default Button