import {useState} from 'react';
import Context from './context';
import CountCtrl from './CountCtrl';
import CountView from './CountView';

function App() {
  const [count, setCount] = useState(0);

  const contextData = {
      state:{count},
      action:{setCount}
  }

  return (
    <div >
        <Context.Provider value={contextData}>
            <CountCtrl />
            <CountView />
        </Context.Provider>
    </div>
  );
}

export default App;
