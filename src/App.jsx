import {  useState } from 'react'
import styles from './app.module.css'
import { Nums } from './components/Nums/Nums'
import { Operators } from './components/Operators/Operators'

function App() {
 

  const [operand1 , setOperand1] = useState('')
  const [operand2 , setOperand2] = useState('')
  const [operator , setOperator] = useState('')
  const [nextNum , setNextNum] = useState(false)
  const [activeResult , setActiveResult] = useState(false)
  const [result , setResult] = useState('')



  return (
   <main className={styles.main}>
      <div className={styles.calculator}>
        <div className={styles.display} >
          <p className={styles.input}>{`${operand1} ${operator} ${operand2}`}</p>
          <p className={`${activeResult?styles.active:styles.result}`}>{result? result: '0'}</p>
        </div>
        <div className={styles.keyboards}>
          <Operators 
          operand1 = {operand1} 
          operand2 = {operand2} 
          result = {result}
          operator = {operator}
          setOperand1={setOperand1}
          setOperand2 = {setOperand2}
          setNextNum = {setNextNum}
          setResult = {setResult}
          setActiveResult = {setActiveResult}
          setOperator = {setOperator}
          />
          <Nums 
          nextNum={nextNum}
          operand1 = {operand1} 
          operand2 = {operand2} 
          setOperand1={setOperand1}
          setOperand2 = {setOperand2}/>
          </div>
      </div>
   </main>
)}

export default App
