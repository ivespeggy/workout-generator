import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 导入 Link 组件
import musclesData from '../data/muscles';
import "./Home.css"

export default function Home() {
  const navigate = useNavigate();
  const [clickState, setClickState] = useState(Array.from({ length: 13 }, () => 0)); // 初始化 clickState

  const ClickAction = (clickId) => {
    // 更新 clickState 逻辑
    const updatedState = [...clickState];
    updatedState[clickId] = updatedState[clickId] === 0 ? 1 : 0;
    setClickState(updatedState);
  };

  return (
    <div>
      <header className="App-header">
        <h1>牛逼哄哄的title!!!</h1>
        <ul>
          {Object.keys(musclesData).map((key) => {
            const id = musclesData[key].id;
            const name_cn = musclesData[key].name_cn;
            const name_en = musclesData[key].name_en;
            const training_moves = musclesData[key].training_moves;
            return (
              <li className="ul" key={id} onClick={() => ClickAction(id)}>
                <strong>{name_cn}</strong> <strong>{name_en}</strong>
                {clickState[id] === 1 && (
                  <ul>
                    {training_moves.map((move, index) => (
                      <li key={index}>{move}</li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>

        <button className="button primary-button" type="submit" to="/create-plan">点击创建您自己的训练计划吧！！</button>
      </header>
    </div>
  );
}
