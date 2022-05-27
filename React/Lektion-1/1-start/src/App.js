
import './App.css';
import Person from './components/Person';

// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }
const onClick = (name) => {
  console.log(name + ' tryckte på knappen!')
}

const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={() => { onClick('Dania') }} >Tryck här</button>
      <Person name="Dania" age="35" />
      <Person name="Zain" age="8" />
      <Person name="Laya" age="5" />


    </div>

  )
}

export default App;
