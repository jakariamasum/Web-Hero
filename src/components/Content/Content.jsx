import Accordiann from '../Accordiann/Accordiann';
import styles from './Content.module.css';
import img3 from '../../assets/img3.jpg'
import Button from '../Button/Button';
const Content = () => {
    return (
        <div className={styles.container}>
            <h1>Course Content</h1>
            <p>32 sections • 376 lectures • 27h 8m total length</p>
            <div>
                <div>
                    <img src={img3} alt="" />
                    <div style={{ marginTop: '25px', backgroundColor: '#555BEC', borderRadius: '10px', color: 'white' }}>
                        <Button text={'Continue Course'} />
                    </div>
                </div>
                <div className={styles.accordianWrapper}>
                    <div className={styles.accordian}>
                        <Accordiann/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;