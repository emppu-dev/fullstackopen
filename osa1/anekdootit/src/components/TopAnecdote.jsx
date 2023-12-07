import React from 'react';

const TopAnecdote = (props) => {
  const mostVotedIndex = props.votes.indexOf(Math.max(...props.votes));
  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <p>{props.anecdotes[mostVotedIndex]}</p>
      <p>Votes: {props.votes[mostVotedIndex]}</p>
    </div>
  );
};

export default TopAnecdote;