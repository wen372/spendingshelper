import logo from './logo.svg';
import './App.css';
import Transaction from './components/Transaction';
import TransactionComponent from './components/TransactionComponent';
import FileDropZone from './components/FileDropZone';
function App() {
  return (
    <div className="App">
      Hello
      <Transaction content="transaction test"/>
      <TransactionComponent/>
      <FileDropZone/>
    </div>
  );
}

export default App;
