import PlanFeature from '../PlanFeature/PlanFeature';
import styles from './Plans.module.css';
import { BiCheck, BiSolidStar } from 'react-icons/bi'
const Plans = () => {
    return (
        <div className={styles.container}>
            <h2>Plans For This Course</h2>
            <p>See this our three main plans for our histudy courses. It starts from here! You can teach yourself what you really like.</p>
            <div className={styles.plans}>
                <div className={styles.leftPlans}>
                    <h1>Active Plan Mode</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, ipsa vitae necessitatibus id nobis officiis eligendi voluptatibus cupiditate dolorem illo?</p>
                    <p><span>$129</span>/month</p>
                    <div className={styles.btns}>
                        <button>Purchase Now</button>
                        <button>Upgrade</button>
                    </div>
                    <div className={styles.review}>
                        <div>
                            <BiSolidStar fill='yellow' />
                            <BiSolidStar fill='yellow' />
                            <BiSolidStar fill='yellow' />
                            <BiSolidStar fill='yellow' />
                            <BiSolidStar fill='yellow' />
                        </div>
                        <p>rated 4.5/5 Stars in 1000+ reviews.</p>
                    </div>
                </div>
                <div className={styles.rightPlans}>
                    <h1>Advance Plans You can Get.</h1>
                    <div>
                        <PlanFeature text={'5 PPC Campaigns'} />
                        <PlanFeature text={'Digital Marketing'} />
                        <PlanFeature text={'Marketing Agency'} />
                        <PlanFeature text={'Seo Friendly'} />
                    </div>
                    <h1>Basic Plans You can Get.</h1>
                    <div>
                        <PlanFeature text={'5 PPC Campaigns'} />
                        <PlanFeature text={'Digital Marketing'} />
                        <PlanFeature text={'Marketing Agency'} />
                        <PlanFeature text={'Seo Friendly'} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Plans;