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
    <div className={cn(styles.navigation, open && styles.navigation__open)}>
      <span
        onClick={closeMenu}
        className={cn(
          styles.navigation__toggle,
          open
            ? styles.navigationToggle__open
            : styles.navigationToggle__closed,
          'cursor-pointer',
          'absolute',
          'z-20'
        )}
      >
        <span
          className={cn(
            styles.navigationToggle__lineOne,
            'h-1',
            'w-8',
            'bg-black',
            'absolute',
            'block',
            'top-8',
            'right-4'
          )}
        ></span>
        <span
          className={cn(
            styles.navigationToggle__lineTwo,
            'h-1',
            'w-8',
            'bg-black',
            'absolute',
            'block',
            'top-8',
            'right-4'
          )}
        ></span>
      </span>
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
