import styles from './Topics.module.css';
import { BiCheck } from 'react-icons/bi'
const Topics = ({text}) => {
    return (
        <div className={styles.container}>
            <BiCheck size={22} />
            <span>{text}</span>
        </div>
    );
};

export default Topics;