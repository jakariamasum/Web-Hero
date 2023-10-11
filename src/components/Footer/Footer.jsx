import Button from '../Button/Button';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div>
                <h1>Web Hero</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae quis repellendus consequuntur recusandae sapiente, doloribus quisquam rerum molestiae tempora aperiam?</p>
                <Button text={'Enroll Now'}/>
            </div>
            <div>
                <h4>Useful Links</h4>
                <ul>
                    <li>Home</li>
                    <li>Instructor</li>
                    <li>Become Teacher</li>
                    <li>Blogs</li>
                </ul>
            </div>
            <div>
                <h3>Contact Us</h3>
                <ul>
                    <li>Home</li>
                    <li>Blogs</li>
                    <li>Teachers</li>
                    <li>Course Details</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;