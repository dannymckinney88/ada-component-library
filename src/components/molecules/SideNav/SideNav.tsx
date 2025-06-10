"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as Dialog from '@radix-ui/react-dialog';
import { HamburgerMenuIcon, Cross2Icon } from '@radix-ui/react-icons';
import styles from './SideNav.module.css';

export interface NavItem {
  label: string;
  href: string;
  items?: NavItem[];
}

interface SideNavProps {
  items: NavItem[];
  className?: string;
}

export const SideNav: React.FC<SideNavProps> = ({ items, className }) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const renderNavItem = (item: NavItem, level: number = 0) => {
    const isActive = pathname === item.href;
    const hasChildren = item.items && item.items.length > 0;

    return (
      <li key={item.href} className={styles.navItem}>
        {hasChildren ? (
          <span className={styles.navSection}>{item.label}</span>
        ) : (
          <Link
            href={item.href}
            className={`${styles.navLink} ${isActive ? styles.active : ''}`}
            aria-current={isActive ? 'page' : undefined}
            tabIndex={0}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        )}
        {hasChildren && (
          <ul className={styles.navSubList} role="list">
            {item.items!.map((subItem) => renderNavItem(subItem, level + 1))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <>
      {/* Hamburger for mobile */}
      <div className={styles.mobileNavBar}>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button
              className={styles.hamburgerBtn}
              aria-label="Open navigation menu"
            >
              <HamburgerMenuIcon />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className={styles.dialogOverlay} />
            <Dialog.Content className={styles.dialogContent} aria-label="Component navigation">
              <Dialog.Title className={styles.visuallyHidden}>Navigation Menu</Dialog.Title>
              <button
                className={styles.closeBtn}
                aria-label="Close navigation menu"
                onClick={() => setOpen(false)}
              >
                <Cross2Icon />
              </button>
              <nav>
                <ul className={styles.navList} role="list">
                  {items.map((item) => renderNavItem(item))}
                </ul>
              </nav>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
      {/* Desktop sidebar */}
      <nav
        className={`${styles.sideNav} ${className || ''}`}
        aria-label="Component navigation"
      >
        <ul className={styles.navList} role="list">
          {items.map((item) => renderNavItem(item))}
        </ul>
      </nav>
    </>
  );
}; 