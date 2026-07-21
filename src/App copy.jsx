



// function App() {

//   const  [theme, setTheme] = useState("white")
// const changeTheme = (color) => {
//     setTheme(color)
// }

//   return (
//     <>

   
//    <div style={{   backgroundColor: theme,
//         minHeight: "100vh",}}> 
//      <button className="bg-white text-black p-5" onClick={() => changeTheme("white")}>White Theme</button>
//     <button className="bg-red-500 text-white p-5" onClick={() => changeTheme("red")}>Red Theme</button>
//     <button className="bg-blue-500 text-white p-5" onClick={() => changeTheme("blue")}>Blue Theme</button>
//     <button className="bg-green-500 text-white p-5" onClick={()=> changeTheme("Green")}>Green Theme</button>
//    </div>
//     </>
//   )
// }

// export default App

// import React from "react"
// import {useState} from "react"
// const [theme, setTheme] = useState("white");
// const changeTheme = (color) => {
//   setTheme(color)
// }



// function App() {
//   <div style={{ backgroundColor:theme, minHeight: "Change my name"}}>
//   <button onclick={() => changeTheme("white")}>White Theme</button>
//   <button onclick={() => changeTheme("red")}>Red Theme</button>
//   <button onClick={() => changeTehem("green")}>Green Theme</button>
//   </div>

// }

// export default App


import React from "react"
import {useState, useEffect} from "react"
import Todo from "./component/Todo"
import CardGrid from './component/Todo/CardGrid'
import SearchModal from "./component/Todo/SearchModal"



// function App() {
// const [name, setName] = useState("Change my name")
// const changeName = () => {
//   if (name === "change my name") { 
//     setName("Gourav Bairagi");
//   } else {
//     setName("change my name")
//   }
// }
// return(
//     <div>
//     <p onClick={changeName}>{name}</p>

//   </div>
// )

// }

// export default App

// function App() {
//   const [name, setName] = useState("My Name Changed")
//   const nameChange = () => {
//     if( name === "My Name Change") {
//       setName("Gourav Bairagi")
//     } else {
//       setName("My Name Change")
//     }
//   }
//   return(
//     <>
//     <p onClick={nameChange}>{name}</p>
//     </>
//   )
// }
// export default App
//  function App() {
//   const [show, setShow] = useState(true)


//   return (
//     <>
//       {show && <h4>See Magic Here</h4>} 
//       <p onClick={() => setShow(!show)}>Show/Hide Above</p>
//     </>
//   )
//  }
//  export default App

 function App() {
  const [name, setName] = useState("Change my name")
  const changeName = () => {
    if(name === "Change my name") {
      setName("Gourav  Bairagi")
    }else {
      setName("Change my name")
    }
  }  
  const [data, setData] = useState([]);
const [open, setOpen] = useState(false)

//   const BASE_URL = "https://jsonplaceholder.typicode.com/users";
//   const [data, setData] = useState([])
// const [open, setOpen] = useState(false)

// useEffect(() => {
// async function fectData() {
//   try{
//     const response = await fetch(BASE_URL);
//     const result = await response.json();
//     setData(result)
//   }
//   catch(error) {
//     console.error("Error fetching data:", error)
//   }
// }
// fectData()
// }, [])
// const BASE_URL = "https://jsonplaceholder.typicode.com/users";
// const [data, setData] = useState([])

// useEffect(() => {
//   async function fetchData() {
//     try {
//       const response = await fetch(BASE_URL);
//       const result = await response.json();

  
//       setData(result);
//     } catch (error) {
//       console.error("Galti:", error);
//     }
//   }

//   fetchData();
// }, []);
const BASE_URL = "https://jsonplaceholder.typicode.com/users";
useEffect (() => {
  async function fetchData () {
    try{
      const response = await fetch(BASE_URL);
      const result = await response.json();
      console.log(result)
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  fetchData();
}, []) 
  return (
    <>
  
      <Todo  />
   <button onClick={() => setOpen(true)}>Modal</button>    
{data.map((item,index) => (
        <CardGrid key={item.id} name={item.name} username={item.username} email={item.email} address={item.address} />
))}
<SearchModal isOpen={open} onClose={() => setOpen(false)} data={data} />
  

    </>
  )
 }
 export default App