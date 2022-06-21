import Link from 'next/link';
import { Instagram } from '../Icons/Instagram';
import { Twitter } from '../Icons/Twitter';
import styles from '../../styles/components/SocialMedia.module.css';

function SocialMedia() {
  return (
    <div className={styles.socialMedia}>
      <ul>
        <Link href="/">
          <a>
            <Instagram />
          </a>
        </Link>
        <Link href="/">
          <a>
            <Twitter />
          </a>
        </Link>
      </ul>
    </div>
  );
}

export { SocialMedia };
