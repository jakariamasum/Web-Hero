import styles from './PlanFeature.module.css';
import { BiCheck } from 'react-icons/bi';

const PlanFeature = ({text}) => {
    return (
        <div className={styles.plans}>
            <BiCheck className={styles.icon} /> <span>{text}</span>
        </div>
    );
};

export default PlanFeature;