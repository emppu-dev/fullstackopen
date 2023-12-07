import StatisticLine from "./StatisticLine";

const Statistics = ( props ) => {
    const total = props.good + props.neutral + props.bad;
    const average = (props.good - props.bad) / total || 0;
    const positivePercentage = (props.good / total) * 100 || 0;
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
        <table>
            <tbody>
                <StatisticLine text="good" value={props.good}/>
                <StatisticLine text="neutral" value={props.neutral}/>
                <StatisticLine text="bad" value={props.bad}/>
                <StatisticLine text="total" value={total}/>
                <StatisticLine text="average" value={average}/>
                <StatisticLine text="positive feedback" value={positivePercentage.toFixed(2)+"%"}/>
            </tbody>
        </table>
      </div>
    );
};

export default Statistics;