import Link from 'next/link';
import styles from '../../styles/components/Navbar.module.css';

function Navbar() {
  const routes = [
    {
      name: 'Home page',
      href: '/',
    },
    {
      name: 'About us',
      href: '/',
    },
    {
      name: 'Blog',
      href: '/',
    },
    {
      name: 'Contact',
      href: '/',
    },
  ];

  return (
    <nav className={styles.navbar}>
      <ul>
        {routes.map(({ name, href }) => (
          <Link key={name} href={href}>
            <a>{name}</a>
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export { Navbar };
