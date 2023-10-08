import Button from '../Button/Button';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.container}>
            <nav>
                <h1>Web Hero</h1>
                <ul>
                    <li>Home</li>
                    <li>Course details</li>
                    <li>About Us</li>
                    <li>Contact</li>
                </ul>
                <div>
                    <Button text={'Enroll Now'}/>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;