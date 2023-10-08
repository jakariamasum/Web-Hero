import styles from './Button.module.css';
import { BsArrowRight } from 'react-icons/bs';

const Button = ({text}) => {
    return (
        <div className={styles.btn}>
            {text} <BsArrowRight/>
        </div>
    );
};

export default Button;