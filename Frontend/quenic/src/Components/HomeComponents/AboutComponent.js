import './AboutComponent.css';
import { useState } from 'react';

function AboutComponent() {
    const [showDetails, setShowDetails] = useState({});

    const onDetailsShow = (index) => {
        setOpenIndex(prevIndex => prevIndex === index ? null : index);
    };

    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className="about-wrapper">
            <div className="about-container about-correction">
                <div className="about-container-title">
                    <p className="about-container-text">How to get started with Quenic - your comprehensive tool for queue management</p>
                    <p onClick={() => onDetailsShow(0)} className="about-container-button">
                        {openIndex === 0 ? '-' : '+'}
                    </p>
                </div>
                <span className={`${openIndex === 0 ? 'about-container-details' : 'hidden'}`}>
          Quenic is designed to be user-friendly and intuitive, but if you're just getting started, we have prepared a simple guide for you. To get started, you will need to create an account using a valid email address. A confirmation email will be sent to your inbox. Once you have verified your email, log in to access the main dashboard. This is your command center from which you can create and manage your queues, or join existing ones.
        </span>
            </div>
            <div className="about-container">
                <div className="about-container-title">
                    <p className="about-container-text">Creating your first queue - a hassle-free process with Quenic</p>
                    <p onClick={() => onDetailsShow(1)} className="about-container-button">
                        {openIndex === 1 ? '-' : '+'}
                    </p>
                </div>
                <span className={`${openIndex === 1 ? 'about-container-details' : 'hidden'}`}>
          Once you've made yourself comfortable on the dashboard, you can create your first queue. Click on the "Create Queue" button and provide a name and description for your queue. After the creation process, you will be taken to a new screen where you can manage your queue, including adding users manually, setting queue properties, and monitoring the queue status in real time.
        </span>
            </div>
            <div className="about-container">
                <div className="about-container-title">
                    <p className="about-container-text">How do you actually join a queue if you have a code</p>
                    <p onClick={() => onDetailsShow(2)} className="about-container-button">
                        {openIndex === 2 ? '-' : '+'}
                    </p>
                </div>
                <span className={`${openIndex === 2 ? 'about-container-details' : 'hidden'}`}>
          If you've been given a queue code, you can join an existing queue. Simply click on the "Join Queue" button and enter the provided code. After successfully joining the queue, you'll be presented with a screen displaying your current position in the queue, the estimated wait time, and other relevant queue information. You can also leave the queue at any time.
        </span>
            </div>
            <div className="about-container">
                <div className="about-container-title">
                    <p className="about-container-text">A comprehensive guide on how to effectively manage your queue with Quenic</p>
                    <p onClick={() => onDetailsShow(3)} className="about-container-button">
                        {openIndex === 3 ? '-' : '+'}
                    </p>
                </div>
                <span className={`${openIndex === 3 ? 'about-container-details' : 'hidden'}`}>
          As the owner of a queue, you are bestowed with several management capabilities. You have the power to remove individuals from the queue, manually add users, and close the queue once it's no longer in use. Additionally, you can monitor the queue status, observing how many users are currently in line, their positions, and estimated wait times. The management dashboard is your control panel for ensuring the smooth operation of your queues.
        </span>
            </div>
            <div className="about-container">
                <div className="about-container-title">
                    <p className="about-container-text">Leaving a queue: The simple process of exiting a queue when your turn is done</p>
                    <p onClick={() => onDetailsShow(4)} className="about-container-button">
                        {openIndex === 4 ? '-' : '+'}
                    </p>
                </div>
                <span className={`${openIndex === 4 ? 'about-container-details' : 'hidden'}`}>
          If you find that you no longer need to be in a queue, leaving is simple. In the user dashboard, locate the queue you wish to leave and click on the "Leave Queue" button. A confirmation pop-up will appear to make sure you want to leave. Remember, if you leave a queue, you'll lose your position, so ensure you no longer require the queue's service before deciding to exit.
        </span>
            </div>
        </div>

    );
}

export default AboutComponent;
