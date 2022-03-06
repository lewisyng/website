import Navigation from '../Navigation/Navigation'
import NavigationWrapper from '../NavigationWrapper/NavigationWrapper'

export const PageWrapper = ({
  children,
  menuOpen,
}: {
  children: React.ReactNode
  menuOpen: boolean
}) => {
  return (
    <NavigationWrapper menuOpen={menuOpen}>
      <div className="mx-auto min-h-screen max-w-[1400px]">
        {children}
      </div>
    </NavigationWrapper>
  )
}

export default PageWrapper
