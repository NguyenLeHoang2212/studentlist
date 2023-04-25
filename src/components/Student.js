import { FiDelete } from 'react-icons/fi'
import { BsPencil } from 'react-icons/bs'

export default function Student(props){
    return(
        <div className="student">
            <span>{props.student.name}</span>
           <div className="icon"> 
           <BsPencil />
            <FiDelete className='delete' onClick={()=>{props.deletelist(props.student.id)}}/>
            </div>
           
        </div>
    )
}