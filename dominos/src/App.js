import {GenerateButton} from './components/generateButton/generateButton';

const App = () => {

  return (
    <div className="App">
      <p>
      Dominos can have 0 to 6 (inclusive) dots on a face.
      Clicking the "Generate" button will populate
      the domino with a random number of dots on each of the 2 faces.
      </p>
      <GenerateButton />
    </div>
  );
}

export default App;
