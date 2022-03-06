import styles from './Header.module.css'

export const Header = ({handleMenuClick}: {
    handleMenuClick: () => void
}) => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>LEWIS YOUNG</div>
      <div className="relative cursor-pointer" onClick={handleMenuClick}>MENU</div>
    </div>
  )
}

export default Header
