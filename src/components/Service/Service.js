import React from 'react';
import { Link } from 'react-router-dom';
import ThemeIcon from '../ThemeIcon/ThemeIcon';
import {ArrowRight} from 'react-feather'
import './Service.scss';

const Service = ({serviceList}) => {
    const {title,description, icon} = serviceList;

    const truncate = (text, max = 90) =>
        text.length > max ? text.substring(0, max).trim() + '...' : text;

    return (
        <div className='col-lg-3 col-md-4 col-sm-6' data-aos="fade-right" data-aos-duration="2000">
            <div className="service-box">
                    <div className="service-icon">
                        <div className='icon-area'>
                            <ThemeIcon icon={icon} />
                        </div>
                    </div>
                    <div className="service-text">
                        <h3><Link to="/services">{title}</Link></h3>
                        <p>{truncate(description)}</p>
                        <Link to="/services" className="read-more">
                            Read More <ArrowRight size={14} />
                        </Link>
                    </div>
            </div>
        </div>
    );
};

export default Service;
