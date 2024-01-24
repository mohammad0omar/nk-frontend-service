import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import GetPersons from './components/Persons/Persons';
import DeletePerson from './components/DeletePerson/DeletePerson';


function App() {
  return (
    <div className="App">
      <h1>My Application</h1>
      <SignUp />
      <Login />
      <GetPersons />
      <DeletePerson />
    </div>
  );
}

export default App;
