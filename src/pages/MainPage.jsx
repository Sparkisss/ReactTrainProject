import React from 'react';
import MainImg from '../components/mainImg/MainImg';
import MainContent from '../components/mainContent/MainContent'
import pageOne from '../source/image/page1.jpg'
import pageTwo from '../source/image/page2.jpg'
import pageThree from '../source/image/page3.jpg'

const MainPage = () => {
    const content = [
        {
            header: '50% off a drink when you get the app',
            description: 'Get 50% off a drink when you download the app and join Starbucks Rewards by the end of May. Just download the app to get started.*',
            bthText: 'Sing up here',
            img: pageOne, 
            clsHead: '',
            clsDiv: '',
            color: 'blockMain backColorRouse'
        },
        {
            header: 'Starbucks® Summer Game',
            description: 'Play for a chance to win a trip for two to Costa Rica and millions of other prizes!**',
            bthText: 'Play now',
            img: pageTwo,
            clsHead: 'bigHead',
            clsDiv: 'bigDiv',
            color: 'blockMain backColorPurple'
        },
        {
            header: 'Summertime crew',
            description: 'Super chill flavors, all lined up and ready for fun.',
            bthText: 'Order now',
            img: pageThree,
            clsHead: 'bigHead',
            clsDiv: 'bigDiv',
            color: 'blockMain backColorBlue'
        },
    ]

    return (        
        <>            
            {content.map((item, index) => (
                <div key={index} className="mainBlock">
                    <MainImg page={item}/>
                    <MainContent key={index} content={item} />          
                </div>
            ))}
        </>
    );
};

export default MainPage;