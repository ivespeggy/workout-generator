// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import musclesData  from './data/muscles'
function App() {
  let [clickState,setClickState] = useState(false)

  let ClickAction = (clickId) =>{
    if(!musclesData[clickId].clicked){
      setClickState(!clickState)
    }
    else{
      setClickState(!clickState)
    }

    console.log(clickId)
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
          const clicked = musclesData[key].clicked
          return(
            <li className='ul' key={id} onClick={()=> ClickAction(id)}>
              <strong>{name_cn}</strong> {name_en}
              {
                clickState && id?<h1>yes</h1>: null
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
