import './AboutComponent.css';
import { useState } from 'react';

function AboutComponent() {
    const [showDetails, setShowDetails] = useState({});

    const onDetailsShow = (index) => {
        setShowDetails((prevState) => ({ ...prevState, [index]: !prevState[index] }));
    };

    return (
        <div className="about-wrapper">
            <div className="about-container about-correction">
                <div className="about-container-title">
                    <p className="about-container-text">How does EmailShareViaLink work?</p>
                    <p onClick={() => onDetailsShow(0)} className="about-container-button">
                        {showDetails[0] ? '-' : '+'}
                    </p>
                </div>
                <span className={`${showDetails[0] ? 'about-container-details' : 'hidden'}`}>
          We design and produce premium quality furniture and accessories for living, dining,
          sleeping, home-office, and also for commercial spaces. For the manufacture of our
          products, we use only high-quality raw materials. EmailShareViaLink is a tool that
          allows you to share an email message with others via a link. Simply forward the email
          to a special address provided by EmailShareViaLink, and you will receive a link to
          the email that can be shared with anyone you wish.
        </span>
            </div>
            <div className="about-container">
                <div className="about-container-title">
                    <p className="about-container-text">Is EmailShareViaLink secure?</p>
                    <p onClick={() => onDetailsShow(1)} className="about-container-button">
                        {showDetails[1] ? '-' : '+'}
                    </p>
                </div>
                <span className={`${showDetails[1] ? 'about-container-details' : 'hidden'}`}>
          EmailShareViaLink uses the latest encryption and security protocols to ensure that your
          email messages are protected from unauthorized access. We take your privacy seriously
          and do everything we can to keep your information safe and secure.
        </span>
            </div>
            <div className="about-container">
                <div className="about-container-title">
                    <p className="about-container-text">Can I control who has access to the email link?</p>
                    <p onClick={() => onDetailsShow(2)} className="about-container-button">
                        {showDetails[2] ? '-' : '+'}
                    </p>
                </div>
                <span className={`${showDetails[2] ? 'about-container-details' : 'hidden'}`}>
          Yes, you can control who has access to the email link by setting password protection or
          limiting the number of times the link can be accessed. EmailShareViaLink gives you
          complete control over your email messages and how they are shared with others.
        </span>
            </div>
            <div className="about-container">
                <div className="about-container-title">
                    <p className="about-container-text">Can I control who has access to the email link?</p>
                    <p onClick={() => onDetailsShow(3)} className="about-container-button">
                        {showDetails[3] ? '-' : '+'}
                    </p>
                </div>
                <span className={`${showDetails[3] ? 'about-container-details' : 'hidden'}`}>
          Yes, you can control who has access to the email link by setting password protection or
          limiting the number of times the link can be accessed. EmailShareViaLink gives you
          complete control over your email messages and how they are shared with others.
        </span>
            </div>
            <div className="about-container">
                <div className="about-container-title">
                    <p className="about-container-text">Can I control who has access to the email link?</p>
                    <p onClick={() => onDetailsShow(4)} className="about-container-button">
                        {showDetails[4] ? '-' : '+'}
                    </p>
                </div>
                <span className={`${showDetails[4] ? 'about-container-details' : 'hidden'}`}>
          Yes, you can control who has access to the email link by setting password protection or
          limiting the number of times the link can be accessed. EmailShareViaLink gives you
          complete control over your email messages and how they are shared with others.
        </span>
            </div>
        </div>
    );
}

export default AboutComponent;
