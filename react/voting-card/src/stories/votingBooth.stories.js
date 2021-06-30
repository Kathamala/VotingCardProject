import React from 'react';
import '../components/styles.css'

import VotingBooth from '../components/VotingBooth';

const options = [
  {
    text: "Sim",
    votes: 5
  },
  {
    text: "Não",
    votes: 2
  },
  {
    text: "Talvez",
    votes: 6
  }
]

function select(){
    return;
}

//👇 This default export determines where your story goes in the story list
export default {
  title: 'VotingBooth',
  component: VotingBooth,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <VotingBooth {...args} />;

export const FirstStory = Template.bind({});
export const SecondStory = Template.bind({});

FirstStory.args = {
    choices: options.slice(0, 2),
    onSelect: select
};

SecondStory.args = {
    choices: options.slice(0, 3),
    onSelect: select
};