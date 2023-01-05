import React from 'react'
import './styles.css';

export const ToggleBar = () => {
    return (
        <div>
            <div class="split left">
                <div class="centered">
                    <h2>Work</h2>
                </div>
            </div>
            <div class="split right">
                <div class="centered">
                    <h2>John Doe</h2>
                    <p>Some text here too.</p>
                </div>
            </div>
        </div>
    )
}
export default ToggleBar;
