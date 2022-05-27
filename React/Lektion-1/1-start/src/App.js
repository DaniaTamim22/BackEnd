
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
      <Person />
      <Person />

    </div>

  )
}

export default App;
