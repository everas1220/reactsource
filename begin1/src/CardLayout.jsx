import React from 'react';
import styles from "./Card.module.css";

const CardLayout = (title,) => {
    return (
        <div className={styles.card}>
            <h2>{title}</h2>
        </div>
    );
};

export default CardLayout;