import styles from './Header.module.css';
import cn from 'classnames';
import Link from 'next/link';
import { LanguageSwitcher } from '../../LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

export const Header = ({
  handleMenuClick,
}: {
  handleMenuClick: () => void;
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.header}>
      <Link href="/" className="border-r-8 border-black">
        <div className={cn(styles.logo, '!px-8 !py-4')}>LEWIS YOUNG</div>
      </Link>

      <div className="ml-auto border-l-8 border-black !p-4">
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
        className="relative hidden cursor-pointer border-l-8 border-black !px-8 !py-4 uppercase md:block"
        onClick={handleMenuClick}
      >
        {t('general.menu')}
      </button>
    </div>
  );
};

export default Header;
