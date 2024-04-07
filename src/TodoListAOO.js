import React, { useState } from 'react'
import './TodoAOO.css'
import {CiEdit} from 'react-icons/ci'
import { MdDelete } from "react-icons/md";

const TodoListAOO = () => {

    const [taskList, settaskList] = useState([]);
    const [task, settask] = useState('');
    const [description, setdescription] = useState('');
    const [updateTask,setupdateTask] = useState('');
    const [updateDescription,setupdateDescription] = useState('');
    const [indexRef,setindexRef] = useState(null);


    function AddTask() {
        if ((task.trim() && description.trim()) || (task.trim())) {
            let id;
            {
                taskList.length === 0
                    ? id = 1
                    : id = (taskList[taskList.length - 1].id + 1)
            }
            let obj = { id, task, description }
            console.log(obj)
            let newarray = [...taskList, obj]
            settaskList(newarray)
            settask('')
            setdescription('')
            id = null;
            console.log(taskList)
        }

    }

    function DeleteTask(getindx) {
        console.log(getindx)
        const newarray = taskList.filter((data, i) => {
            return i != getindx;
        })
        settaskList(newarray)
    }

    function EditTask(getindx){
        setupdateTask(taskList[getindx].task)
        setupdateDescription(taskList[getindx].description)
        setindexRef(getindx)
    }

    function UpdateTaskDescription(){
        if (indexRef!=null) {
            let newArray = taskList.map((data,i)=>{
                return data
            })
            // console.log(newArray)
            newArray[indexRef].task = updateTask;
            newArray[indexRef].description = updateDescription;
            // console.log(newArray)
            settaskList(newArray);
            setindexRef(null)
            setupdateTask('')
            setupdateDescription('')
        }
        
    }

    return (
        <div className='most-outer-div'>
            <div className='main-title'>
                <h1>TODO LIST</h1>
            </div>
            <div className='input-task-description'>
                <input type='text' value={task} onChange={(e) => settask(e.target.value)} placeholder='Enter Task'></input>
                <input type='text' value={description} onChange={(e) => setdescription(e.target.value)} placeholder='Enter Description'></input>
                <button className='addbtn addnupdate' onClick={AddTask}>ADD</button>
            </div>
            <div className='all-tasks'>
                {
                    taskList != [] && taskList.map((data, indx) => {
                        return <div key={indx} className='taskbox'>
                            <h4 className='task-title'>{data.task}</h4>
                            <p className='task-description'>{data.description}</p>
                            <div className='edit-n-delete-btn'>
                            <CiEdit className='EnDButn' onClick={()=> EditTask(indx)}>Edit</CiEdit>
                            <MdDelete className='EnDButn' onClick={() => DeleteTask(indx)}>Delete</MdDelete>
                            </div>
                            
                        </div>
                    })
                }
            </div>
            {
                taskList.length >= 1 ?
                    <div className='delete-all-butn'>
                        <button onClick={() => settaskList([])}>Delete All</button>
                    </div>
                    : null

            }

            <div className='edit-area'>
                <input type='text' value={updateTask} onChange={(e)=>setupdateTask(e.target.value)}></input>
                <input type='text' value={updateDescription} onChange={(e)=>setupdateDescription(e.target.value)}></input>
                <button className='updatebtn addnupdate' onClick={UpdateTaskDescription}>Update</button>
            </div>

        </div>
    )
}

export default TodoListAOO