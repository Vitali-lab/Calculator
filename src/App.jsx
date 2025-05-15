import {  useState } from 'react'
import styles from './app.module.css'

function App() {
 

  const [operand1 , setOperand1] = useState('')
  const [operand2 , setOperand2] = useState('')
  const [operator , setOperator] = useState('')
  const [nextNum , setNextNum] = useState(false)
  const [activeResult , setActiveResult] = useState(false)
  const [result , setResult] = useState('')

  let NUMS = [1,2,3,4,5,6,7,8,9,0]

  NUMS = NUMS.map((el,index)=>{
    return(
      <button className={styles.buttons} onClick={()=>{
        if (!nextNum) {
          setOperand1(String(operand1 + el))
        }else{
          setOperand2(String(operand2 + el))
        }


      }} key={index}>{el}</button>
    )
  })
  let operators = ['+','-','C','=']
      operators = operators.map((el)=>{
    return(
      <button className={styles.buttons2} onClick={(event)=>{
       if(event.target.textContent === '+'){
        if(!operand1) {
          setOperator('')
          setNextNum(false)
        }else {
          setActiveResult(false)
          setOperator('+')
          setNextNum(true)
        }
          
          if(operand1 && operand2){
           const res = String(Number(operand1) + Number(operand2))
            setResult(res)
            setOperand1(res)
            setOperand2('')
          } else if(result){
            setOperand1(result)
            setOperand2('')
          }
       }else if (event.target.textContent === '-') {

           if(!operand1){
          setOperator('')
          setNextNum(false)
          }else{
            setActiveResult(false)
            setOperator('-')
            setNextNum(true)}
        

          if (operand1 && operand2) {
            const res = String(Number(operand1) - Number(operand2))
            setResult(res)
            setOperand1(res)
            setOperand2('')
          } else if (result) {
            setOperand1(result)
            setOperand2('')
          }
       }else if (event.target.textContent === 'C') {
        setOperator('')
          setOperand1('')
          setOperand2('')
          setNextNum(false)
          setResult('')
          setActiveResult(false)
      }else if (event.target.textContent === '='){
          if (operand1 && operand2) {
            setActiveResult(true)
          }
          if (operator === '+') {
           setResult(String(Number(operand1) + Number(operand2)))
          } else if (operator === '-') {
           setResult(String(Number(operand1) - Number(operand2)))
          }
          setNextNum(false)
      }
    }}>{el}</button>
    )
  })   

  
  

  return (
   <main className={styles.main}>
      <div className={styles.calculator}>
        <div className={styles.display} >
          <p className={styles.input}>{`${operand1} ${operator} ${operand2}`}</p>
          <p className={`${activeResult?styles.active:styles.result}`}>{result? result: '0'}</p>
        </div>
        <div className={styles.keybords}>
        <div className={styles.keyBoard}>
          {NUMS}
        </div>
        <div className={styles.keyBoard2}>
          {operators}
          </div>
          </div>
      </div>
   </main>
)}

export default App
