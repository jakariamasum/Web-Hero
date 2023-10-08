import Button from '../Button/Button';
import styles from './Guideline.module.css'
const Guildeline = () => {
    return (
        <div className={styles.container}>
            <h1><span>Complete guideline</span> from absolute
                beginners to getting hired. </h1>
                <div className={styles.btns}>
                    <Button text={'Explore Course'}/>
                    <Button text={'Hired List'}/>
                </div>
        </div>
    );
};

export default Guildeline;