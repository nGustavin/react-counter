import React, {useState} from 'react';
import { Value, Container, Increment } from './styles'
import CountUp from 'react-countup'


export default function Counter(){

  const [ count, setCount ] = useState(0)

  const startCounter = count

  function increment(){
    setCount(currentCount => currentCount + 1)
  }

  function decrement(){
    setCount(currentCount => currentCount - 1) 
  }


  return(
    <>
      <Container>
        <Value> Contador: 
         <h1>
         
        <CountUp
          // start={startCounter}
          end={count}
          duration={1}
        />
        </h1>
        </Value>
        <Increment onClick={increment}> Increment </Increment>
        <Increment onClick={decrement}> Decrement </Increment>
      </Container>
    </>
  )
}