import { React } from 'react';
import './story.css';

const Wonder = () => {
    return (
        <div className="story-wrapper">
            <div className="story-container">
                <div className="story-content">
                    <div className="story-section">
                        <img className="story-image" src='https://images.squarespace-cdn.com/content/v1/5493706de4b0ecaa4047b871/44a3f4b1-f15e-4c1b-99f0-4a2bc4af92fb/I+Wonder+Cover+Smaller.jpeg?format=1500w' alt="I Wonder" />
                        <h3 className="story-text">“I wonder where the sunlight goes.”<br />“I wonder why the rooster crows.”</h3>
                    </div>
                    <div className="story-section">
                        <img className="story-image" src='https://images.squarespace-cdn.com/content/v1/5493706de4b0ecaa4047b871/7f185b57-1c41-4ea1-ab5e-081bbb3891f1/Rooster+Crowing.jpeg?format=1500w' alt="Rooster Crowing" />
                        <h3 className="story-text">“I wonder how the flower grows.”<br />“I wonder why the winter snows.”</h3>
                    </div>
                    <div className="story-section">
                        <img className="story-image" src='https://images.squarespace-cdn.com/content/v1/5493706de4b0ecaa4047b871/c204e9e4-4c6c-42bb-bad0-250cc38c7426/Clouds+with+Snow+Falling.jpeg?format=1500w' alt="Clouds with Snow Falling" />
                        <h3 className="story-text">“I wonder, do snakes have a nose.”<br />“I wonder where the river flows.”</h3>
                    </div>
                    <div className="story-section">
                        <img className="story-image" src='https://images.squarespace-cdn.com/content/v1/5493706de4b0ecaa4047b871/f3c9b81c-e460-4a11-ade5-a1b0f2b26959/Ocean+Flowing+Into+Rivers.jpeg?format=1500w' alt="Ocean Flowing Into Rivers" />
                        <h3 className="story-text">“I wonder why a strong wind blows.”<br />“I wonder… how my teacher knows.”<br /><br />While half the Earth is lit up bright,<br />the other half will sleep through night.</h3>
                    </div>
                    <div className="story-section">
                        <img className="story-image" src='https://images.squarespace-cdn.com/content/v1/5493706de4b0ecaa4047b871/e727da4a-869d-4843-8116-698416ab8998/Sun+Shining+on+Earth.jpeg?format=1500w' alt="Sun Shining on Earth" />
                        <h3 className="story-text">A rooster’s crowing all day long.<br />There’s no one reason for its song.<br /><br />Flowers grows while in the sun,<br />and they need water, every one.</h3>
                    </div>
                    <div className="story-section">
                        <img className="story-image" src='https://images.squarespace-cdn.com/content/v1/5493706de4b0ecaa4047b871/835889bc-923d-42bf-8a12-656eb14cb2bc/Rain+on+Rose.jpeg?format=1500w' alt="Rain on Rose" />
                        <h3 className="story-text">Snow is formed in clouds by ice,<br />and never takes the same shape twice.<br /><br />Snakes have noses, mouths, and lungs,<br />to help them smell they use their tongues.</h3>
                    </div>
                    <div className="story-section">
                        <img className="story-image" src='https://images.squarespace-cdn.com/content/v1/5493706de4b0ecaa4047b871/2b2e6fc4-536a-4e8f-b8ba-3ea448b03fd8/Coiled+Cobra+Hissing.jpeg?format=1500w' alt="Coiled Cobra Hissing" />
                        <h3 className="story-text">A river flows in constant motion,<br />many times into an ocean.<br /><br />The hot air blows while pushing cold,<br />making wind both strong and bold.</h3>
                    </div>
                    <div className="story-section">
                        <img className="story-image" src='https://images.squarespace-cdn.com/content/v1/5493706de4b0ecaa4047b871/6499873b-a1ff-43f6-8d19-8fcd4a8435fd/Stone+Windmill+in+Wind.jpeg?format=1500w' alt="Stone Windmill in Wind" />
                        <h3 className="story-text">Your teacher went to school, like you.<br />That’s where they learned, and you will too!</h3>
                    </div>
                </div>
            </div>
            <div className="decorative-sides">
                <div className="side-decor left-decor"></div>
                <div className="side-decor right-decor"></div>
            </div>
        </div>
    );
}

export default Wonder;
