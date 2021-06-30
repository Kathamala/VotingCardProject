// YourComponent.stories.js

import React from 'react';
import '../components/styles.css'

import VotingCard from '../components/VotingCard';

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

function increaseChoice(index){
  options[index].votes++;
}

//👇 This default export determines where your story goes in the story list
export default {
  title: 'VotingCard',
  component: VotingCard,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <VotingCard {...args} />;

export const FirstStory = Template.bind({});
export const SecondStory = Template.bind({});

FirstStory.args = {
  title: "Não aguenta mais isso?",
  state: 'open',
  options: options.slice(0, 2),
  onChose: increaseChoice
};

SecondStory.args = {
  title: "Vai pedir pra sair?",
  state: 'closed',
  options: options.slice(0, 3),
  onChose: increaseChoice
};