import styles from './Link.module.css'
import Link from 'next/link'
import cn from 'classnames'

export const CustomLink = ({
  href,
  children,
  type,
  target,
  as,
  className,
}: {
  children: React.ReactNode
  href: string | { pathname: string; query?: any }
  type?: string
  target?: string
  as: 'Link' | 'a'
  className?: string
}) => {
  return (
    <div className={cn(className, 'relative')}>
      {as === 'Link' ? (
        <Link href={href}>{children}</Link>
      ) : (
        <a className={styles.customLink__a} href={href} target={target}>
          {children}
        </a>
      )}
    </div>
  )
}

export default CustomLink
