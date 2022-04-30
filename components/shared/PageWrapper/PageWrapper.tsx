import NavigationWrapper from '../NavigationWrapper/NavigationWrapper'

export const PageWrapper = ({
  children,
  menuOpen,
  closeMenu,
}: {
  children: React.ReactNode
  menuOpen: boolean
  closeMenu: () => void
}) => {
  return (
    <div className="relative min-h-screen max-w-[100vw] overflow-hidden">
      <NavigationWrapper menuOpen={menuOpen} closeMenu={closeMenu}>
        <div className="mx-auto max-w-[1400px] min-h-screen">{children}</div>
      </NavigationWrapper>
    </div>
  )
}

export default PageWrapper
