import { useEffect } from 'react';
import { loaderAnimation } from '../../animations/loaderAnimation';
import styles from '../../styles/components/Loader.module.css';
import { splitText } from '../../utils/splitText';

function Loader() {
    
    useEffect(() => {

        loaderAnimation(styles.loader);

    }, [])

    return (
        <div className={styles.loader}>
            <h2> 
                {
                    splitText({
                        text: 'Glamour.',
                        className: 'letter'
                    })
                }
            </h2>
        </div>
    );
}

export { Loader };
