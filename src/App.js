import './App.css';
import Header from './components/Header'
import StyliticsMainAndDetail from './components/StyliticsMainAndDetail';

function App() {
  return (
    <div className="App">
      <Header />
      <StyliticsMainAndDetail 
        client={'express'}
        options={{
          api: {
            tags: "new_arrival_demo_gallery",
            min: 3,
            max: 5,
          },
        }}
      />
    </div>
  );
}

export default App;
