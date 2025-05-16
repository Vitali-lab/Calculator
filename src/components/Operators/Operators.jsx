
import styles from './Operators.module.css'


export const Operators = (props) => {


    function calculate(a,b,operator) {
        a = Number(a)
        b = Number(b)
        if (operator === '+') {
            return a + b
        }
        if (operator === '-') {
            return a - b
        }
        if (operator === '*') {
            return a * b
        }
        if (operator === '/') {
            return a / b
        }
    }

     let operators = ['+','-','*','/','C','=']
          operators = operators.map((el,index)=>{
        return(
          <button className={styles.buttons2} key={index} onClick={(event)=>{
           if(event.target.textContent === '+'){
            if(!props.operand1) {
              props.setOperator('')
              props.setNextNum(false)
            }else {
              props.setActiveResult(false)
              props.setOperator('+')
              props.setNextNum(true)
            }
              
              if(props.operand1 && props.operand2 && props.operator){
               const res = String(calculate(props.operand1, props.operand2 , props.operator))
                props.setResult(res)
                props.setOperand1(res)
                props.setOperand2('')
              } else if(props.result){
                props.setOperand1(props.result)
                props.setOperand2('')
              } 
           }else if (event.target.textContent === '-') {
    
               if(!props.operand1){
                props.setOperator('')
                props.setNextNum(false)
              }else{
                props.setActiveResult(false)
                props.setOperator('-')
                props.setNextNum(true)}
            
    
                if(props.operand1 && props.operand2 && props.operator){
                const res = String(calculate(props.operand1, props.operand2 , props.operator))
                props.setResult(res)
                props.setOperand1(res)
                props.setOperand2('')
              } else if (props.result) {
                props.setOperand1(props.result)
                props.setOperand2('')
              }
           }else if (event.target.textContent === '*') {
            if(!props.operand1){
             props.setOperator('')
             props.setNextNum(false)
           }else{
             props.setActiveResult(false)
             props.setOperator('*')
             props.setNextNum(true)}
             if(props.operand1 && props.operand2 && props.operator){
                const res = String(calculate(props.operand1, props.operand2 , props.operator))
             props.setResult(res)
             props.setOperand1(res)
             props.setOperand2('')
           } else if (props.result) {
             props.setOperand1(props.result)
             props.setOperand2('')
           }  
        }else if (event.target.textContent === '/') {
            if(!props.operand1){
             props.setOperator('')
             props.setNextNum(false)
           }else{
             props.setActiveResult(false)
             props.setOperator('/')
             props.setNextNum(true)}
             if(props.operand1 && props.operand2 && props.operator){
                const res = String(calculate(props.operand1, props.operand2 , props.operator))
             props.setResult(res)
             props.setOperand1(res)
             props.setOperand2('')
           } else if (props.result) {
             props.setOperand1(props.result)
             props.setOperand2('')
           }  
           }else if (event.target.textContent === 'C') {
            props.setOperator('')
            props.setOperand1('')
            props.setOperand2('')
            props.setNextNum(false)
            props.setResult('')
            props.setActiveResult(false)
          }else if (event.target.textContent === '='){
              if (props.operand1 && props.operand2) {
                props.setActiveResult(true)
              }
              if (props.operator === '+') {
                props.setResult(String(Number(props.operand1) + Number(props.operand2)))
              } else if (props.operator === '-') {
                props.setResult(String(Number(props.operand1) - Number(props.operand2)))
              }else if (props.operator === '*') {
                props.setResult(String(Number(props.operand1) * Number(props.operand2)))
              }else if (props.operator === '/') {
                props.setResult(String(Number(props.operand1) / Number(props.operand2)))
              }
              props.setNextNum(false)
              localStorage.setItem('History',`${props.operand1} ${props.operator} ${props.operand2} = ${props.result}`)
          }
        } }>{el}</button>
        )
      })


    return(
        <div className={styles.keyBoard2}>
        {operators}
        </div>
    )
}