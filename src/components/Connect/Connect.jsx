import Button from '../Button/Button';
import styles from './Connect.module.css';

const Connect = () => {
    return (
        <div>
            <h1>Want to get special offers <br />
                and Course updates?</h1>
            <div className={styles.container}>
                <input type="email" name="email" placeholder='give your Email' />
                <Button text={'Subscribe'} />
            </div>
        </div>
    );
};

export default Connect;