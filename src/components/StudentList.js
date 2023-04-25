import { useState } from "react";
import Student from "./Student";
import FormAdd from "./FormAdd";
export default function StudentList(){
 const [list,Setlist]=useState([
    {
        id:1,
        name:"Nguyễn Lê Bờm",
        isComplete:false,
    },
    {
        id:2,
        name:"Nguyễn Hồ Óc",
        isComplete:false,
    },
    {
        id:3,
        name:"Châu Tấn Tạ ",
        isComplete:false,
    }
 ])
 const addlist=(textname)=>{
    Setlist([...list,{id:3,name:textname,isComplete:false}])
 }
 const deletelist=(id)=>{
    const newlist=list.filter((item)=>{
        return item.id!=id
    })
    Setlist(newlist)
 }
 return(
    <div className="studentList">
        <FormAdd addlist={addlist}/>
        {list.map((value,index) =>{
            return (
            <Student student={value} deletelist={deletelist} key={index} />
            )
        }
        )}
    </div>
 )
}