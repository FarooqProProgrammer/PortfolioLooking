import React, { useState } from 'react'
import ReactiveButton from 'reactive-button';

export default function DownloadCv({className}) {
    const [state, setState] = useState('idle');

    const onClickHandler = () => {
        setState('loading');

        // send an HTTP request
        setTimeout(() => {
            setState('success');
        }, 2000);
    };

    return (
        <ReactiveButton
            buttonState={state}
            idleText="Download Cv"
            loadingText="Loading"
            successText="Done"
            onClick={onClickHandler}
            className={className}
        />
    )
}
