import React, {useState} from 'react';
import './App.css';
import Data from './Data';
import List from './List';
function App() {
  const [people, setPeople] = useState(Data);
  return (
    <div className="App">
      <section className="container">
        <h4>{people.length} Birthday Today</h4>
        <List people = {people} />
        <button className="clear-btn" onClick={()=> setPeople([])}>Clear All</button>
      </section>
    </div>
  );
}

export default App;
