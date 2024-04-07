import React, { useState } from 'react'
import './todo.css'


const TodoList = () => {

    const [activity,setActivity] = useState("");
    const [updateTask,setupdateTask] = useState("");
    const [taskIndex,settaskIndex] = useState(null);
    const [listData, setlistData] = useState([]);


    function addActivity()
    {
        // setlistData([...listData, activity])
        // console.log(listData)
        setlistData((listData)=>{
            const updatedList = [...listData, activity]
            setActivity("");
            console.log(updatedList)
            return updatedList;
        })
    }

    function removeActivity(index)
    {
        const updatedListData = listData.filter((elem, id)=>{
            return index!=id;
        })
        setlistData(updatedListData)
    }

    function editActivity(i)
    {
        setupdateTask(listData[i])
        settaskIndex(i)
    }

    function updateTaskData()
    {
        let arr = listData
        arr[taskIndex] = updateTask

        // const arr = listData
        // console.log(arr)
        // const arr1 = arr.slice(0,taskIndex)
        // const arr2 = arr.slice(taskIndex+1,arr.length)
        // arr1.push(updateTask)
        // const finalarray = arr1.concat(arr2)
        
        setlistData(arr)
        setupdateTask("")
    }

    function removeAll(){
        setlistData([])
    }
  return (
    <>
    <div className='container'>
        <div className='header'><h1>TODO LIST</h1></div>
        <input type='text' placeholder='Add a Task' value={activity} onChange={(e)=>{setActivity(e.target.value)}}/>
        <button className='addButton' onClick={addActivity}>Add</button>
        {
            listData!=[] && listData.map((data,i)=>{
                return (
                    <>
                    <p key={i} >
                        <div className='taskbox'>{data}</div>
                        <button className='butn' onClick={()=>editActivity(i)}>edit</button>
                        <button className='butn' onClick={()=>removeActivity(i)}>remove</button>
                    </p>
                    </>
                )
            })
        }
        {
            listData.length>=1 && <button className='RemoveAllButton' onClick={removeAll}>Remove All</button>
        }
        
    </div>
    <div className='editBox'>
        <input  type='text' value={updateTask} onChange={(e)=>setupdateTask(e.target.value)}/>
        <button onClick={updateTaskData}>update</button>
    </div>
    </>
  )
}

export default TodoList