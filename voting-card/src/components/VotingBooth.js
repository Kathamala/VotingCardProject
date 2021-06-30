//Opções da votação

import React from 'react'

export default function VotingBooth(props) {

    const choices = props.choices.map((option, index) => (
        <button key={option.text} onClick={() => props.onSelect(index)}>
        {option.text}
      </button>
    ))
      

    return (
        <div className="choices">
            { choices }
        </div>
    )
}