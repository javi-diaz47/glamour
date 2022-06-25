import Image from 'next/image';
import Link from 'next/link';
import BohoBag from '../../assets/boho-bag.webp';
import styles from '../../styles/components/Welcome.module.css';

function TrendArticle() {
  return (
    <section className={styles.trend_article}>
      <article className={styles.info}>
        <div className={styles.info_text_wrapper}>
          <h2 className={styles.info_title}>
            <span>Designer</span>
            <span>Woman with</span>
            <span>beautiful</span>
            <span>session</span>
          </h2>
          <p className={styles.info_text}>
            Current fashion trends or maybe news from the world of fashion. Find
            out what's going on in the fashion. Read the reports from the shows.
          </p>
        </div>
        <div className={styles.image_wrapper}>
          <figure>
            <Image layout="fill" src={BohoBag} alt="woman with a boho purse" />
          </figure>
        </div>
        <div className={styles.cta}>
          <p>
            Read More
          </p>
          <Link href="/">
            <a>
              -->
            </a>
          </Link>
        </div>
      </article>
    </section>
  );
}

export { TrendArticle };
