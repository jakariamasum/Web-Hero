import { BiPlayCircle } from 'react-icons/bi';
import styles from './AccordiannContent.module.css';
import { FaBook, FaLock } from 'react-icons/fa';
const AccordiannContent = () => {
    return (
        <div className={styles.container}>
            <div>
                <div>
                    <BiPlayCircle size={25} />
                    <span>Course Intro</span>
                </div>
                <FaLock size={22} />
            </div>
            <div>
                <div>
                    <FaBook size={22} />
                    <span>Read Before You Start</span>
                </div>
                <FaLock size={22} />
            </div>
            <div>
                <div>
                    <BiPlayCircle size={25} />
                    <span>Course Intro</span>
                </div>
                <FaLock size={22} />
            </div>
            <div>
                <div>
                    <FaBook size={22} />
                    <span>Read Before You Start</span>
                </div>
                <FaLock size={22} />
            </div>
        </div>
    );
};

export default AccordiannContent;