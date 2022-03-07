import Link from 'next/link'

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
      className="border-b-[8px] border-black bg-white p-4 text-[16px] font-bold text-gray-900"
    >
      <Link href={href}>{label}</Link>
    </div>
  )
}

export default NavigationItem
