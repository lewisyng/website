import clsx from "clsx";

type FooterProps = {
  className?: string;
};

export const Footer = ({ className }: FooterProps) => (
  <div
    className={clsx(
      className,
      "sticky bottom-0 right-0 left-0 flex justify-center p-3"
    )}
  >
    2024 - Lewis Young
  </div>
);

export default Footer;
