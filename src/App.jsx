import { useState } from "react";

function App() {
  let[item, setItem] = useState('');
  let[itemList, setItemList] = useState([]);

  let handleData = (e) => {
    let itemValue = e.target.value ;
    setItem(itemValue);    
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    setItemList([...itemList, item])
  }

  let handleDeleteItem = (id) => {
    
    let newList = itemList.filter((el, i) => itemList.indexOf(el) !== id);
    setItemList([...newList]);
    console.log(newList);
  }

  return (
    <div className="flex justify-center items-center flex-col gap-16">
      <h1 className="flex gap-8 text-5xl text-center antialiased font-bold text-gray-800  mt-20">
        ToDo
        <span>
          <img src="src\assets\pencil.svg" width="40px"></img>
        </span>
      </h1>
      <div className="input-form-container h-24 flex items-center">
        <form onSubmit={handleSubmit} >
          <input
            required
            onChange={handleData}
            type="text"
            name="todo"
            id="todo"
            placeholder="Enter task todo.."
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="list-container">
        <ul id="list">
          {itemList.map((it, i) => <li key={i} id={i} className="list-item" onClick={()=> handleDeleteItem(i)} >{it}</li>)}
        </ul> 
      </div>
    </div>
  );
}

export default App;
