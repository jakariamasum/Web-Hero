import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import styles from './Navbar.module.css';
import bar from '../../assets/bars.png'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        function handleResize() {
            const isMobile = window.innerWidth <= 768;
            setOpen(false);
            setMobile(isMobile);
        }

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [mobile, setMobile] = useState(window.innerWidth <= 768);
    return (
        <div className={styles.container}>
            <nav>
                <h1>Web Hero</h1>
                {
                    open === false && mobile === true ? (
                        <div style={{ backgroundColor: '#4759EE', borderRadius: '5px', padding: '0.5rem' }}>
                            <img src={bar} alt="" style={{ width: '1.5rem', height: '1.5rem' }} onClick={() => setOpen(true)} />
                        </div>
                    ) : (
                        <ul className={styles.navmenu}>
                            <li onClick={() => setOpen(false)}>
                                < a to='#' onClick={() => setOpen(false)}>Home</ a>
                            </li>
                            <li onClick={() => setOpen(false)}>
                                < a to='#' onClick={() => setOpen(false)}>Course Details</ a>
                            </li>
                            <li onClick={() => setOpen(false)}>
                                < a to='#' onClick={() => setOpen(false)}>About Us</ a>
                            </li>
                            <li onClick={() => setOpen(false)}>
                                < a to='#' onClick={() => setOpen(false)}>Contact</ a>
                            </li>
                            <li>
                            <div>
                    <Button text={'Enroll Now'} />
                </div>
                            </li>
                        </ul>
                    )
                }
                {/* <ul>
                    <li>Home</li>
                    <li>Course details</li>
                    <li>About Us</li>
                    <li>Contact</li>
                </ul> */}
                {/* <div>
                    <Button text={'Enroll Now'} />
                </div> */}
            </nav>

        </div>
    );
};

export default Navbar;