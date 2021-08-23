import 'antd/dist/antd.css';
import { useState } from 'react';
import { storageAvailable } from './components/utils/localStorage';
import Spinner from './components/common/Spinner';
import TodoContainer from './components/todo/TodoContainer';

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [isAvailable] = useState(storageAvailable('localStorage'));

  setTimeout(() => {
    setIsLogged(true);
  }, 1500);

  if (!isAvailable) {
    return <h1>지원하지 않는 브라우저입니다</h1>;
  } else {
    return isLogged ? <TodoContainer /> : <Spinner mask />;
  }
}

export default App;
