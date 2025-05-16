
import styles from './Nums.module.css'
import { RiDeleteBack2Line } from "react-icons/ri";

const delButton = <RiDeleteBack2Line />

export const Nums = (props) => {
 


     let NUMS = [1,2,3,4,5,6,7,8,9,0,delButton]
     NUMS = NUMS.map((el,index)=>{
       return(
         <button className={styles.buttons} onClick={(event)=>{
           if (!props.nextNum && event.target.textContent !== '') {
             props.setOperand1(String(props.operand1 + el))
           }else if (props.nextNum && event.target.textContent !== delButton){
             props.setOperand2(String(props.operand2 + el))
           }
           if (event.target.textContent === '' && props.nextNum === false ) {
              props.setOperand1(String(props.operand1).slice(0,props.operand1.length - 1))
              
            } else if (event.target.textContent === '' && props.nextNum === true) {
              props.setOperand2(String(props.operand2).slice(0,props.operand2.length - 1))
              
              
            }
            
            
           
   
   
         }} key={index}>{el}</button>
       )
     })


    return (
     <div className={styles.keyBoard}>
     {NUMS}
    </div>

    )
}