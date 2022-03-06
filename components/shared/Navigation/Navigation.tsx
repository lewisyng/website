import styles from './Navigation.module.css'
import cn from 'classnames'

export const Navigation = ({ open }: { open: boolean }) => {
  return (
    <div
      className={cn(
        'absolute',
        'z-10',
        'left-[100%]',
        'top-0',
        'h-screen',
        'w-[40%]',
        'min-w-[300px]',
        'max-w-[800px]',
        'flex-col',
        'gap-8',
        'transition-all',
        'duration-[500]',
        open && 'translate-x-[-100%]',
        'border-[8px]',
        'border-black'
      )}
    >
      <div className={styles.navigation__item}>Home</div>
      <div className={styles.navigation__item}>Über mich</div>
      <div className={styles.navigation__item}>Kontakt</div>
    </div>
  )
}

export default Navigation
