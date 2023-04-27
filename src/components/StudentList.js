import { useState } from "react";
import Student from "./Student";
import FormAdd from "./FormAdd";
import { v4 as uuidv4 } from 'uuid';
import FormEdit from "./FormEdit";

export default function StudentList() {

    const [list, Setlist] = useState([
        {
            id: 1,
            name: "Nguyễn Lê Hoàng",
            isComplete: false,
            isEdit: false,
        },
        {
            id: 2,
            name: "Nguyễn Hồ Thế Kha",
            isEdit: false,        },
        {
            id: 3,
            name: "Châu Tấn Thành ",
            isEdit: false,        }
    ])
    const addlist = (textname) => {
        Setlist([...list, { id: uuidv4, name: textname, isComplete: false }])
    }
    const deletelist = (id) => {
        const newlist = list.filter((item) => {
            return item.id != id
        })
        Setlist(newlist)
    }
    const editList=(id,name)=>{
        Setlist(
            list.map((value) =>
                value.id === id ? { ...value, name,isEdit:false } : value
            ))
    }
    const toggle_edit = (id) => {
        Setlist(
            list.map((value) =>
                value.id === id ? { ...value, isEdit: !value.isEdit } : value
            ))
    }
    const toggle_complete = (id) => {
        Setlist(
            list.map((value) =>
                value.id === id ? { ...value, isComplete: !value.isComplete } : value
            ))
    }
    return (
        <div className="studentList">
            <FormAdd addlist={addlist} />
            {list.map((value, index) => 
            value.isEdit ? (
                <FormEdit value={value} editList={editList} key={index} />
            ):(
                    <Student
                        student={value}
                        deletelist={deletelist}
                        key={index}
                        toggle_edit={toggle_edit}
                        toggle_complete={toggle_complete}
                    />
                )

            
            )}
        </div>
    )
}