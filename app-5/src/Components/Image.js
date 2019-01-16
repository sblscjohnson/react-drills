import React from 'react';

function Image( props ) {
    return (
        <div>
            <img src={props.fromNet} alt="Dragon" />
        </div>
    )
}

export default Image;