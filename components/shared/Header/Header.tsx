import styles from './Header.module.css'
import cn from 'classnames'
import Link from 'next/link'

export const Header = ({
  handleMenuClick,
}: {
  handleMenuClick: () => void
}) => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">LEWIS YOUNG</Link>
      </div>

      <div
        onClick={handleMenuClick}
        className={cn('block', 'md:hidden', 'cursor-pointer')}
      >
        <div className={cn('h-1', 'w-8', 'bg-black')}></div>
        <div className={cn('h-1', 'w-8', 'bg-black', 'mt-1')}></div>
      </div>
      
      <div
        className="relative hidden cursor-pointer md:block"
        onClick={handleMenuClick}
      >
        MENU
      </div>
    </div>
  )
}

export default Header
