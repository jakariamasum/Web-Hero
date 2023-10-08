import styles from './Acheivemnet.module.css';
import award from '../../assets/award.png';
import certificate from '../../assets/certificate.jpg';
import carrier from '../../assets/carrier.png';
import project1 from '../../assets/project1.jpg';
import Carosal from '../Carosal/Carosal';
import Topics from '../Topics/Topics';
const Acheivement = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <img src={certificate} alt="" />
                <h1>Get a Certificate</h1>
                <p>Apply for Admission in Post Graduate Diploma. Application Deadline: 26th September year Undergraduate.</p>
                <div>
                    <div>
                        <img src={award} alt="" />
                        <div>
                            <span>5000+</span>
                            <span>get award</span>
                        </div>
                    </div>
                    <div>
                        <img src={carrier} alt="" />
                        <div>
                            <span>10K+</span>
                            <span>zero to carrirer</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <h1>Projects You Will Build</h1>
                <p>Apply for Admission in Post Graduate Diploma. Application Deadline: 26th September year Undergraduate.
                </p>
                <div className={styles.topics}>
                    <Topics text={'Ecommerce Website'}/>
                    <Topics text={'Travel Agency'}/>
                    <Topics text={'Shopping Cart'}/>
                    <Topics text={'News Portal'}/>
                    <Topics text={'Education Management'}/>
                </div>
                {/* <Carosal/> */}
                <img src={project1} alt="" />
            </div>
        </div>
    );
};

export default Acheivement;