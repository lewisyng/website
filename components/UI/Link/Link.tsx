import styles from './Link.module.css'
import Link from 'next/link'

export const CustomLink = ({
  href,
  children,
  type,
  target,
  as,
}: {
  children: React.ReactNode
  href: string
  type?: string
  target?: string
  as: 'Link' | 'a'
}) => {
  return (
    <div className="relative">
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
