import styles from './Learn.module.css';
import img from "../../assets/img1.jpg"
import {BiCheck} from 'react-icons/bi';
import Button from '../Button/Button';
const Learn = () => {
    return (
        <div className={styles.container}>
            <div>
                <img src={img} alt="" />
            </div>
            <div className={styles.right}>
                <h1 >What you'll learn</h1>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, fugiat.</p>
                <h3>Whats Material Includes?</h3>
                <div className={styles.materials}>
                    <div>
                        <div>
                            <BiCheck color='green'/> <span>Become an advanced, confident.</span>
                        </div>
                        <div>
                            <BiCheck color='green'/> <span>Have an intermediate skill.</span>
                        </div>
                        <div>
                            <BiCheck color='green'/> <span>Have a portfolio of various.</span>
                        </div>
                        <div>
                            <BiCheck color='green'/> <span>Use the numpy library to create.</span>
                        </div>
                        <div>
                            <BiCheck color='green'/> <span>Use the numpy library to create.</span>
                        </div>
                        <div>
                            <BiCheck color='green'/> <span>Use the numpy library to create.</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <BiCheck color='green'/> <span>Use the Jupyter Notebook.</span>
                        </div>
                        <div>
                            <BiCheck color='green'/> <span>Use the pandas module with.</span>
                        </div>
                        <div>
                            <BiCheck color='green'/> <span>Have a portfolio of various.</span>
                        </div>
                        <div>
                            <BiCheck color='green'/> <span>Have a portfolio of various.</span>
                        </div>
                        <div>
                            <BiCheck color='green'/> <span>Create data visualizations.</span>
                        </div>
                    </div>
                </div>
                <div style={{width:'fit-content'}}>
                    <Button text={'Learn More'}/>
                </div>
            </div>
        </div>
    );
};

export default Learn;