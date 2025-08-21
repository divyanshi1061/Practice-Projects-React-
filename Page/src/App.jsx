
import './App.css'

import React from 'react';
import Button from './Components/Button/Button.jsx';



function App() {
  return (
    <div className="flex items-center gap-3 justify-center h-screen">
      <Button icon={<span>👍 </span>} text="Like" />
    <Button icon={<span>❤️ </span>} text="Love" />
      <Button icon={<span>😂 </span>} text="Haha" />
      <Button icon={<span>😢 </span>} text="Sad" />
      <Button icon={<span>😡 </span>} text="Angry" />

    </div>
  );
}


export default App
