import styles from './ReviewCard.module.css';
const ReviewCard = ({ img, review, name, companyImage }) => {
    return (
        <div className={styles.container}>
            <img src={companyImage} alt="" />
            <p>{review}</p>
            <div>
                <img src={img} alt="" />
                <p>{name}</p>
            </div>
        </div>
    );
};

export default ReviewCard;