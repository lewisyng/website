import Navigation from '../Navigation/Navigation';

export const NavigationWrapper = ({
  children,
  menuOpen,
  closeMenu,
}: {
  children: React.ReactNode;
  menuOpen: boolean;
  closeMenu: () => void;
}) => {
  return (
    <>
      <Navigation open={menuOpen} closeMenu={closeMenu} />
      {children}
    </>
  );
};

export default NavigationWrapper;
