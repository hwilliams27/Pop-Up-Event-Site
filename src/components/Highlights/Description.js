import React from 'react';
import Fade from 'react-reveal/Fade';

const Description = () => {
    return (
        <Fade>
            <div className="highlight_center_wrapper">
                <h2>Highlights</h2>
                <div className="highlight_description">
                Hello there, feel free to come on down to ______ to see the Pop up shops we will be hosting!  
                </div>
                
                <div className="highlight_description">
                We have a large selection of choices, such as Food Clothes, and much more. We have our info here, such as the date, address, and location placed here, so you know where it is.
                </div>

                <div className="highlight_description">
                 And if you need a map, not to worry, we have you covered on that as well! We will also have certain events going on throughout the day, so don't miss out on that either! (psst, there may even be a few prizes to be given out...)
                </div>
            </div>
        </Fade>
    );
};

export default Description;