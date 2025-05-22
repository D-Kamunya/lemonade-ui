import React from 'react';
import './styles.scss';
import IconList from '../../../../components/guest/IconList';
import SectionTitle from '../../../../components/guest/SectionTitle';
import iconOne from '../../../../assets/images/symptoms/1.png';
import iconTwo from '../../../../assets/images/symptoms/2.png';
import iconThree from '../../../../assets/images/symptoms/3.png';
import iconFour from '../../../../assets/images/symptoms/4.png';
import iconFive from '../../../../assets/images/symptoms/5.png';

const Symptoms = () => {
    const symptomsData = [
        {
            'icon' : iconOne,
            'title' : 'Spontaneous pain',
            'description':'Spontaneous pain even when youre not eating or drinking' 
        },
        {
            'icon' : iconTwo,
            'title' : 'Discoloration of tooth',
            'description':'Darkening or discoloration of a tooth' 
        },
        {
            'icon' : iconThree,
            'title' : 'Middle night pain',
            'description':'Pain that wakes you up in the middle of the night' 
        },
        {
            'icon' : iconFour,
            'title' : 'Tenderness in gums',
            'description':'From floss bosses to sweet tooths, every mouth is welcome.' 
        },
        {
            'icon' : iconFive,
            'title' : 'Extreme sensitivity',
            'description':'Extreme sensitivity to cold or heat when your’e drink or eat' 
        }
    ]

    return (
        <section className='symptoms-section section-common pt-100 pb-70'  data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <SectionTitle 
                    subTitle="Symptoms"
                    title="Sign and symptoms you need root canal"
                    description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
                />

                <div className="row">
                    {
                        symptomsData.map(singleSymptoms => 
                            <IconList 
                                icon={singleSymptoms.icon}
                                title={singleSymptoms.title}
                                description={singleSymptoms.description}
                            />
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Symptoms;
