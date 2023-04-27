import { FiDelete } from 'react-icons/fi'
import { BsPencil } from 'react-icons/bs'

export default function Student(props){
  const {student,deletelist,toggle_complete,toggle_edit}=props
    return(
        <div className="student">
            <span 
            className={`${student.isComplete ? "complete":""}`}
            onClick={()=>toggle_complete(student.id)}
            >{student.name}</span>
           <div className="icon"> 
           <BsPencil onClick={()=>toggle_edit(student.id)} />
            <FiDelete className='delete' onClick={()=>{props.deletelist(props.student.id)}}/>
            </div>
           
        </div>
    )
}