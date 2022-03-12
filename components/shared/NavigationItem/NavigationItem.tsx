import styles from './NavigationItem.module.css'
import Link from 'next/link'
import cn from 'classnames'

export const NavigationItem = ({
  label,
  href,
  handleClick,
}: {
  label: string
  href: string
  handleClick: () => void
}) => {
  return (
    <div
      onClick={handleClick}
      className={cn(
        styles.navigation__item,
        'my-6',
        'text-[24px]',
        'font-bold',
        'text-right',
        'text-gray-900',
        'md:text-left',
        'md:text-[36px]',
        'md:table',
      )}
    >
      <Link href={href}>{label}</Link>
    </div>
  )
}

export default NavigationItem
