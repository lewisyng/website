import clsx from 'clsx'

export const Text = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <p className={clsx(className)}>{children}</p>
}

export default Text
