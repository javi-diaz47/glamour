import { useEffect } from 'react';
import { loaderAnimation } from '../../animations/loaderAnimation';
import styles from '../../styles/components/Loader.module.css';
import { SplitText } from '../SplitText';

function Loader() {
  useEffect(() => {
    loaderAnimation(styles.loader);
  }, []);

  return (
    <div className={styles.loader}>
      <h2>
        <SplitText text="Glamour." className="letter" />
      </h2>
    </div>
  );
}

export { Loader };
