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
    
<h1>Statistics</h1>
{total === 0 &&<><p1> No data</p1>
  </>
  }
{total ?  <>
<StatisticLine name="good" part={good}/>
<StatisticLine name="neutral" part={neutral}/>
<StatisticLine name="bad" part={bad}/>
<StatisticLine name="average" part={average/total}/>
<StatisticLine name="total" part={total}/>
<StatisticLine name="positive"part={good / total * 100+ "%"}/>
  
  </> :<></>}
  
</>
 ) 
}

export default App