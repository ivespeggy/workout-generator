// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import musclesData  from './data/muscles'
function App() {
  const [clickState,setClickState] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0])

  let ClickAction = (clickId) =>{
    let updatedState = [...clickState]

    if(clickState[clickId] === 0){
      // 还没有被点击过，或者是合上的状态,
      // change the state here
      updatedState[clickId] = 1
      setClickState(updatedState)
      console.log(clickState)
    }
    else{
      //state is 1
      updatedState[clickId] = 0
      setClickState(updatedState)
      console.log(clickState)
    }

    // console.log(updatedState)
  }
  return (
    <div className="App">
      <header className="App-header">
      <h1>牛逼哄哄的title!!!</h1>
      <ul>
        {Object.keys(musclesData).map(key =>{
          const id = musclesData[key].id
          const name_cn = musclesData[key].name_cn
          const name_en = musclesData[key].name_en
          const training_moves = musclesData[key].training_moves
          // const clicked = musclesData[key].clicked
          return(
            <li className='ul' key={id} onClick={()=> ClickAction(id)}>
              <strong>{name_cn}</strong> <strong>{name_en}</strong>
              {
                clickState[id] === 1 && training_moves.map((move,index) =>{
                  return(
                    <ul key={index}>
                    {move}
                  </ul>
                  )
                })
              }
            </li>
          )
        })}

      </ul>

      <button className='create-plan-button' type='submit'>点击创建您自己的训练计划吧！！</button>
      </header>
    </div>
  );
}

export default App;
