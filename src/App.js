import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import data from './data'

function App() {

  const cardElement = data.map(places => 
      <Card key={places.id} item={places} />
    
    )

  return (
    <div className='container'>
      <Navbar />
      {cardElement}
    </div>
  );
}

export default App;
