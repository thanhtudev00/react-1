import logo from './logo.svg';
import './App.css';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album';

function App() {
  const name = 'Tú';
  const age = 18;
  const isMale = true;
  const student = {
    name: 'Easy Frontend'
  };
  const colorlist = ['red', 'green', 'blue']
  return (
    <div className="App">
      {/* <header className="App-header">
        <p>
          Xin chào {name} - Tôi năm nay {age} tuổi - {isMale ? 'Male' : 'Female'}
        </p>
        {isMale ? <p>Male</p> : <p>Female</p>}

        {isMale && <p>Male</p>}
        {!isMale && <p>Female</p>}

        {isMale &&(
          <div>
          <p>Male</p>
          <p>Male</p>
          <p>Male</p>
          </div>
        )}

        {isMale && (
          <>
          <p>Male</p>
          <p>Male</p>
          <p>Male</p>
          </>
        )}

        {student.name}

          <ul>
            {colorlist.map(color =>(
              <li style={{color}}>{color}</li>
            ))}
          </ul>
      </header> */}

      {/* Render Todofeature */}
      <TodoFeature/>

      {/* Render Album */}
      {/* <AlbumFeature/> */}
    </div>
  );
}

export default App;
