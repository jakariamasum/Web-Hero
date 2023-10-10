import ReviewCard from "../ReviewCard/ReviewCard";
import styles from './Review.module.css'
import facebook from '../../assets/facebook.png'
import google from '../../assets/google.png'
import bing from '../../assets/bing.png'
import hubs from '../../assets/hubs.png'
import yelp from '../../assets/yelp.png'
import user1 from '../../assets/img4.jpg'
import user2 from '../../assets/img5.jpg'
import user3 from '../../assets/img6.jpg'
const Review = () => {
    return (
        <div className={styles.container}>
            <h1>People like Web Hero education. <br />
                No joking - here’s the proof!</h1>
            <div className={styles.cards}>
                <ReviewCard img={user1} companyImage={facebook} review={'People says about, vulputate at sapien sit amet, auctor iaculis lorem. In vel hend rerit nisi. Vestibulum eget risus velit.'} name={'Martha Maldonado, CEO'}/>
                <ReviewCard img={user2} companyImage={yelp} review={'Our educational, vulputate at sapien sit amet, auctor iaculis lorem. In vel hend rerit nisi. Vestibulum eget risus velit.'} name={'Valerie J., CEO'}/>
                <ReviewCard img={user3} companyImage={bing} review={'Like this histudy, vulputate at sapien sit amet, auctor iaculis lorem. In vel hend rerit nisi. Vestibulum eget risus velit.'} name={'Hannah R., CEO'}/>
                <ReviewCard img={user1} companyImage={google} review={'Histudy education, vulputate at sapien sit amet, auctor iaculis lorem. In vel hend rerit nisi. Vestibulum eget risus velit.'} name={'Michele D., CEO'}/>
            </div>
        </div>
    );
};

export default Review;