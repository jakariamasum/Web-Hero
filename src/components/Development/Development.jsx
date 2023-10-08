import styles from './Development.module.css';
import img2 from '../../assets/img2.jpg'
import hire from '../../assets/hire.png'
import require from '../../assets/require.png'
import enroll from '../../assets/enroll.png'
const Development = () => {
    return (
        <div className={styles.container}>
            <div>
                <img src={img2} alt="" />
            </div>
            <div className={styles.right}>
                <p>HELLO! WEB DEVELOPMENT COURSE</p>
                <h2>Complete app development course with Web Hero</h2>
                <p>The idea of establishing a private university to provide quality education at an affordable cost in Uk London.</p>
                <div className={styles.stats}>
                    <div>
                        <img src={hire} alt="" />
                        <div>
                            <span>300K+</span>
                            <span>got hired</span>
                        </div>
                    </div>
                    <div>
                        <img src={enroll} alt="" />
                        <div>
                            <span>100K+</span>
                            <span>Enrolled</span>
                        </div>
                    </div>
                    <div>
                        <img src={require} alt="" />
                        <div>
                            <span>300K+</span>
                            <span>month required</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Development;