import Button from '../Button/Button';
import styles from './Hero.module.css';
import { FaBook,FaUsers,FaStar} from 'react-icons/fa';
const Hero = () => {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <span>HELLO! WEB DEVELOPMENT COURSE</span>
            </div>
            <div className={styles.text}>
                <span>A Complete Guide to</span> <br />
                <span> Web Development.</span>
            </div>
            <div className={styles.subText}>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. perferendis, maiores? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, officiis? </span>
            </div>
            <div className={styles.btn}>
                <Button text={'Enroll Now'} />
            </div>
            <div className={styles.stats}>
                <div>
                    <div><FaBook size={25}/> <span>12 lessons</span></div>
                    <div><FaUsers size={25}/> <span>500 students</span> </div>
                </div>
                <div>
                    <span>$750</span>
                    <span><s>$1500</s></span>
                </div> 
                <div>
                    <FaStar size={25} fill='yellow'/>
                    <FaStar size={25} fill='yellow'/>
                    <FaStar size={25} fill='yellow'/>
                    <FaStar size={25} fill='yellow'/>
                     <span>(105+ reviews)</span>
                </div>
            </div>
        </div>
    );
};

export default Hero;