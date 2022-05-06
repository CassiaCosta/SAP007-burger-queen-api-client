import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  const mensagem = 'Tetsando o JS';
  return (
    <Router>
      <h1>Hellow world! {mensagem}</h1>
    </Router>
  )
}

export default App;

// function App() {
//   return (
//     <div className="App">
//         <h1>Hello world</h1>
//     </div>
//   );
// }

// export default App;
