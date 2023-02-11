import styles from './Header.module.css';
import cn from 'classnames';
import Link from 'next/link';
import { LanguageSwitcher } from '../../LanguageSwitcher/LanguageSwitcher';
import { t } from 'i18next';
import clsx from 'clsx';

export const Header = ({
  handleMenuClick,
}: {
  handleMenuClick: () => void;
}) => {
  return (
    <div className={styles.header}>
      <div className={clsx(styles.logo, 'border-r-8 border-black !px-8')}>
        <Link href="/">LEWIS YOUNG</Link>
      </div>

      <div className="ml-auto border-l-8 border-black !px-4">
        <LanguageSwitcher />
      </div>

      <div
        onClick={handleMenuClick}
        className={cn('block', 'md:hidden', 'cursor-pointer')}
      >
        <div className={cn('h-1', 'w-8', 'bg-black')}></div>
        <div className={cn('h-1', 'w-8', 'bg-black', 'mt-1')}></div>
      </div>

      <button
        className="relative hidden cursor-pointer border-l-8 border-black !px-8 uppercase md:block"
        onClick={handleMenuClick}
      >
        {t('general.menu')}
      </button>
    </div>
  );
};

export default Header;
