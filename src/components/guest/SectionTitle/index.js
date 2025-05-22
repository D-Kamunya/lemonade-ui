import React from 'react';
import './styles.scss';

const SectionTitle = ({subTitle, title, description}) => {
    return (
        <div className='section-title'>
            <span>{subTitle}</span>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default SectionTitle;
