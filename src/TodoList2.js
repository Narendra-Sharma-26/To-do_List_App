import React, { useState } from 'react'
import './todo.css'


const TodoList2 = () => {

    const [activity,setActivity] = useState("");
    const [description,setdescription] = useState("");
    const [updateTask,setupdateTask] = useState("");
    const [taskIndex,settaskIndex] = useState(null);
    const [listData, setlistData] = useState([]);
    


    function addActivity()
    {
        // setlistData([...listData, activity])
        // console.log(listData)
        setlistData((listData)=>{
            const updatedList = [...listData, [activity,description]]
            setActivity("");
            setdescription("");
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
        <input type='textbox' placeholder='Add Description' value={description} onChange={(e)=>setdescription(e.target.value)}/>
        <button className='addButton' onClick={addActivity}>Add</button>
        {
            listData!=[] && listData.map((data,i)=>{
                return data.map((element,indx)=>{
                    return (
                        <>
                    <p key={indx} >
                        <div className='taskbox'>{indx}
                        <p className='description_para'>{indx}</p>
                        </div>
                        <button className='butn' onClick={()=>editActivity(i)}>edit</button>
                        <button className='butn' onClick={()=>removeActivity(i)}>remove</button>
                    </p>
                    </>
                    )
                })
            })
            // listData!=[] && listData.map((data,i)=>{
            //     return (
            //         <>
            //         <p key={i} >
            //             <div className='taskbox'>{data[i]}
            //             <p className='description_para'>{data[i+1]}</p>
            //             </div>
            //             <button className='butn' onClick={()=>editActivity(i)}>edit</button>
            //             <button className='butn' onClick={()=>removeActivity(i)}>remove</button>
            //         </p>
            //         </>
            //     )
            // })
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

export default TodoList2