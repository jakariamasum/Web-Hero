import styles from './Educator.module.css';
import img from '../../assets/img7.jpg'
import { FaFacebook, FaInstagram, FaLinkedin, FaTelegram, FaTwitter } from 'react-icons/fa';
const Educator = () => {
    return (
        <div className={styles.container}>
            <div>
                <img src={img} alt="" />
            </div>
            <div className={styles.right}>

                <div>
                    <h1>John Due</h1>
                    <span>Advanced Educator</span>
                    <p>John is a brilliant educator, whose life was spent for computer science and love of nature. Being a female, she encountered a lot of obstacles and was forbidden to work in this field by her family. With a true spirit and talented gift, she was able to succeed and set an example for others.</p>
                </div>
                <div className={styles.icons}>
                    <FaFacebook  size={30} fill='white'/>
                    <FaInstagram size={30} fill='white'/>
                    <FaLinkedin size={30} fill='white'/>
                    <FaTelegram size={30} fill='white'/>
                    <FaTwitter size={30} fill='white'/>
                </div>
            </div>
        </div>
    );
};

export default Educator;