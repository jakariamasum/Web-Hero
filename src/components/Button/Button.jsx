import styles from './Button.module.css';

const Button = ({text}) => {
    return (
        <div className={styles.btn}>
            {text}
        </div>
    );
};

export default Button;