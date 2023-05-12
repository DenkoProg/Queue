import './AboutComponent.css'
import React, { useState } from 'react'
function AboutComponent () {
        const [isOpen, setIsOpen] = useState(false);

        const toggleOpen = () => {
            setIsOpen(!isOpen);
        };
    return(
        <div className = "about-wrapper">
            <div className = "about-container about-correction">
                <div className = "about-container-title">
                    <p className = "about-container-text">How does EmailShareViaLink work?</p>
                    <p className = "about-container-button" onClick={toggleOpen}>
                        {isOpen ? "-" : "+"}
                    </p>
                </div>
                {isOpen && (
                    <span className = "about-container-details">
                    We design and produce premium quality furniture and accessories for
                    living,dining, sleeping, home-office, and also for commercial spaces.
                    For the manufacture of our products, we use only high-quality
                    EmailShareViaLink is a tool that allows you to share an email message
                    with others via a link. Simply forward the email to a special address
                    provided by EmailShareViaLink, and you will receive a link to the email
                    that can be shared with anyone you wish.y raw materials.
                </span>
                )}
            </div>
            <div className = "about-container">
                <div className = "about-container-title">
                    <p className = "about-container-text">Is EmailShareViaLink secure?</p>
                    <p className = "about-container-button">+</p>
                </div>
            </div>
            <div className = "about-container">
                <div className = "about-container-title">
                    <p className = "about-container-text">Can I control who has access to the email link?</p>
                    <p className = "about-container-button">+</p>
                </div>
            </div>
            <div className = "about-container">
                <div className = "about-container-title">
                    <p className = "about-container-text">What are the benefits of using EmailShareViaLink?</p>
                    <p className = "about-container-button">+</p>
                </div>
            </div>
            <div className = "about-container">
                <div className = "about-container-title">
                    <p className = "about-container-text">How can I contact EmailShareViaLink if I have more questions?</p>
                    <p className = "about-container-button">+</p>
                </div>
            </div>
        </div>
    )
}

export default AboutComponent;
