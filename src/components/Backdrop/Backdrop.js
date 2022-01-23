import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
    const cssClassname = ['Backdrop', props.show ? 'BackdroplOpen' : 'BackdropClosed'];

    return <div className={cssClassname.join(' ')}></div>
};

export default backdrop;