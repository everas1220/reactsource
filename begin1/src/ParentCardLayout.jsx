import React from 'react';
import styles from "./Card.module.css";

const ParentCardLayout = () => {
    return (
        <>
            <CardLayout>
                <p>
                    Props of Components
                </p>
            </CardLayout>
            <CardLayout title="Details">
                <ul>
                    <li>Feature A</li>
                    <li>Feature B</li>
                    <li>Feature C</li>
                </ul>
            </CardLayout>
            <CardLayout title="Contact">
                <p>Email: example@gmail.com</p>
                <p>Phone: 123-4567-7890</p>
            </CardLayout>
        </>
    );
};

export default ParentCardLayout;