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
      <Link href="/" className="md:border-r-8 md:border-black">
        <div className={cn(styles.logo, 'md:!py-4 md:!px-8')}>LEWIS YOUNG</div>
      </Link>

      <div className="ml-auto hidden border-black !p-4 md:block md:border-l-8">
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
