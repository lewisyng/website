import Navigation from '../Navigation/Navigation'

export const NavigationWrapper = ({
  children,
  menuOpen
}: {
  children: React.ReactNode
  menuOpen: boolean
}) => {
  return (
    <>
      <Navigation open={menuOpen}></Navigation>
      {children}
    </>
  )
}

export default NavigationWrapper
