const Statistics = ({ good, neutral, bad }) => {
    const total = good + neutral + bad;
    const average = (good - bad) / total || 0;
    const positivePercentage = (good / total) * 100 || 0;
    if (total === 0) {
        return (
        <div>
            <h1>statistics</h1>
            <p>No feedback given</p>
        </div>
        );
    }
    return (
      <div>
        <h1>statistics</h1>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>total {total}</p>
        <p>average {average}</p>
        <p>positive feedback {positivePercentage.toFixed(2)}%</p>
      </div>
    );
};

export default Statistics;