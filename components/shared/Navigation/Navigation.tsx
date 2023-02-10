import cn from 'classnames'
import styles from './Navigation.module.css'
import NavigationItem from '../NavigationItem/NavigationItem'
import { navigationItems } from '../../constants'

export const Navigation = ({
  open,
  closeMenu,
}: {
  open: boolean
  closeMenu: () => void
}) => {
  return (
    <div className={cn(styles.navigation, open && styles["navigation--opne"])}>
      <button
        onClick={closeMenu}
        className={cn(
          styles.navigation__toggle,
          open
            ? styles.navigationToggle__open
            : styles.navigationToggle__closed,
          'absolute z-20 cursor-pointer'
        )}
      >
        <span
          className={cn(
            styles.navigationToggle__lineOne,
            'absolute top-8 right-4 block h-1 w-8 bg-black'
          )}
        />
        <span
          className={cn(
            styles.navigationToggle__lineTwo,
            'absolute top-8 right-4 block h-1 w-8 bg-black'
          )}
        />
      </button>

      <div className="hidden md:block"></div>
      <div className={cn('my-auto')}>
        {Object.entries(navigationItems).map(([key, value]) => (
          <NavigationItem
            key={key}
            label={value.label}
            href={value.href}
            handleClick={closeMenu}
          />
        ))}
      </div>
    </div>
  )
}

export default Navigation
