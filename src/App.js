import React from 'react';
//Import profile components into App.js and use them
import Profile from './Component/ProfilePhoto';
import Name from './Component/FullName';
import Adress from './Component/Adress';


function App() {
    return (
      <div className="App">
        <Profile/>
        <Adress/>
        <Name/>
       
      </div>
    );
}
export default App;
