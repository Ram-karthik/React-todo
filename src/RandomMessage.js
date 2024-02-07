import React from 'react'

const RandomMessage = () => {
    function handleChange() {
        const word = ['Achieve', 'Be Bold', 'Win'];
        const index = Math.floor(Math.random() * 3);
        return word[index];
    }
    return (
        <div>
            <p>
                Born To {handleChange()}!
            </p>
        </div>
    )
}

export default RandomMessage