import React from 'react';
import './button.scss';

interface ButtonProps {
    type: string;
    value: string;
    clickEvent?: (event: React.MouseEvent<HTMLElement>) => void;
}

const Button = (props: ButtonProps) => {
    const {type, value, clickEvent} = props;
    let buttonClass = 'button-base';

    switch(type) {
        case 'info': buttonClass += ' button-info'; break;
        case 'warn': buttonClass += ' button-warn'; break;
        case 'debug': buttonClass += ' button-debug'; break;
        case 'error': buttonClass += ' button-error'; break;
        case 'default': buttonClass += ' button-default'; break;
        default: buttonClass += ' button-default'; break;
    }

    return !clickEvent ? (
        <button className={buttonClass}>{value}</button>
    ) : (
        <button className={buttonClass} onClick={clickEvent}>{value}</button>
    );
};

export default Button;