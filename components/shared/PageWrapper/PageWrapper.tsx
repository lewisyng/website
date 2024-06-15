import { ReactNode } from "react";
import NavigationWrapper from "../NavigationWrapper/NavigationWrapper";

export const PageWrapper = ({
  children,
  menuOpen,
  closeMenu,
}: {
  children: ReactNode;
  menuOpen: boolean;
  closeMenu: () => void;
}) => (
  <div className="relative min-h-screen max-w-[100vw] overflow-hidden">
    <NavigationWrapper menuOpen={menuOpen} closeMenu={closeMenu}>
      <div className="container mx-auto grid min-h-screen">{children}</div>
    </NavigationWrapper>
  </div>
);

export default PageWrapper;
