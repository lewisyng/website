import cn from 'classnames';
import styles from './Navigation.module.css';
import NavigationItem from '../NavigationItem/NavigationItem';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../../LanguageSwitcher/LanguageSwitcher';

export const Navigation = ({
  open,
  closeMenu,
}: {
  open: boolean;
  closeMenu: () => void;
}) => {
  const { t } = useTranslation();

  const navigationItems = {
    home: {
      label: t('general.home'),
      href: '/',
    },
    about: {
      label: t('general.aboutMe'),
      href: '/about',
    },
    contact: {
      label: t('general.contact'),
      href: '/contact',
    },
  };

  return (
    <div className={cn(styles.navigation, open && styles['navigation--open'])}>
      <button
        onClick={closeMenu}
        className={cn(
          styles.navigation__toggle,
          open
            ? styles.navigationToggle__open
            : styles.navigationToggle__closed,
          'absolute top-4 right-4 z-20 cursor-pointer'
        )}
      >
        <img src="/img/icons/close.svg" alt="" width={40} />
      </button>

      <div className="hidden md:block"></div>
      <div className={cn('my-auto')}>
        {Object.entries(navigationItems).map(([key, value]) => (
          <NavigationItem
            key={key}
            label={value.label}
            href={value.href}
            handleClick={closeMenu}
          />
        ))}

        <div className="flex justify-end border-t border-dashed border-black pt-4 md:hidden">
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
