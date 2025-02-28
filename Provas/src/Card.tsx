import styles from './Card.module.css'

interface CardProps{
  title: string;
  description: string
}

const Card = ({ title, description }: CardProps) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Card;
