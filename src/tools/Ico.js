// tools/icons.js
import React from 'react';

const Ico = ({ name }) => {
    return <i className={`fa ${name}`} aria-hidden="true"></i>;
};

export default Ico;