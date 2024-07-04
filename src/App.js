import { useState } from 'react';
import './App.css';

function App() {
  const [contents, setContents] = useState('')

  const [todo, setTodo] = useState([
    { id: 1, push: '리액트를 공부하자!' },
    { id: 2, push: 'js를 공부하자!'},
  ])

  const onChangeTodoHandler = (event) => {
    setContents(event.target.value)
  }

  const onClickButtonHandler = () => {
    const AddNewTodo = {
      id: todo.length + 1,
      push: contents.trim(),
    }
    setTodo([...todo, AddNewTodo])
    setContents('')
  }

  return (
    <>
      <div className='header'>
        <input
          type='text'
          value={contents}
          onChange={onChangeTodoHandler} />
        <button onClick={onClickButtonHandler}>추가하기</button>
        <br/>
        <h1>Todo List</h1>
      </div>
      <div>
        <form className='app-style'>
          {
            todo.map(item => {
              return (
                <div key={item.id} className='form'>
                  {item.push}
                  </div>
              )
            })
          }

        </form>
      </div>
    </>
  );
}

export default App;
