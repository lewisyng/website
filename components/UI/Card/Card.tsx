import styles from "./Card.module.css"
import cn from "classnames"

export const Card = ({
  children,
  size,
  backgroundImage,
  className,
}: {
  children: React.ReactNode
  size?: string
  backgroundImage?: string
  className?: string
}) => {
  return (
    <div data-size={size} className={cn(className, styles.card)}>
      {children}
    </div>
  )
}

export default Card
