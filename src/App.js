import { useState } from 'react'

const StatisticLine = (props)=>{
  return(
  <>
    <p> {props.name} {props.part} </p>
  </>
  )
}
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
const Statistics = (props) =>{
 
 
  if(props.total === 0) {
    return(
      <>
      <h1>Statistics</h1>
      <p>No data</p>
      </>
    )
  }
  else{
    return(
    <>
     <h1>Statistics</h1>
<StatisticLine name="good" part={props.good}/>
<StatisticLine name="neutral" part={props.neutral}/>
<StatisticLine name="bad" part={props.bad}/>
<StatisticLine name="average" part={props.average/props.total.toFixed(2)}/>
<StatisticLine name="total" part={props.total}/>
<StatisticLine name="positive"part={props.good / props.total * 100.+ "%"}/>
</>
    )
}


}
const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [average, setAverage] = useState(0)
  const [total, setTotal] = useState(0)
  const goodClick = () => {
    setGood(good +1)
    setTotal(total + 1)
    setAverage(average +1 )
    
 }
 const neutralClick = () => {
  setNeutral(neutral +1)
  setTotal(total + 1)
  setAverage(average + 0)
 
}
const badClick = () => {
  setBad(bad +1)
  setTotal(total + 1)
  setAverage(average - 1)
  
}


 return(

<>


    <h1>Give feedback</h1>
    <Button handleClick={goodClick} text="good" />
    <Button handleClick={neutralClick} text="neutral" />
    <Button handleClick={badClick} text="bad" />
    <Statistics good={good} neutra={neutral} bad={bad} average={average} total={total}/>

</>
 ) 
}

export default App