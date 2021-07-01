import React from 'react';
import PropTypes from 'prop-types';
import './button.css';
import VotingBooth from "../components/VotingBooth"
import '../components/styles.css'

const options = [
  {
    text: "Eae, tudo bem?",
    choices: ['Sim', 'Não', 'Talvez']
  },
  {
    text: "Você gosta de ameixa?",
    choices: ['Sim', 'Não']
  }
]

export const Booth = ({ primary, backgroundColor, size, label, ...props }) => {
 return(
    <VotingBooth choices={ props.options[0].choices } onSelect={ select }/>
 );
};
