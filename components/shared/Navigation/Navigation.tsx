import cn from 'classnames'
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
    <div
      className={cn(
        'fixed',
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
        'border-black',
        'bg-white'
      )}
    >
      <span onClick={closeMenu} className="cursor-pointer absolute top-0 right-0 z-20 p-3 border-[8px] border-black">
        CLOSE
      </span>
      {Object.entries(navigationItems).map(([key, value]) => (
        <NavigationItem
          key={key}
          label={value.label}
          href={value.href}
          handleClick={closeMenu}
        />
      ))}
    </div>
  )
}

export default Navigation
