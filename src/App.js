import './App.css';
import ProfilePhoto from '../src/Component/profile/ProfilePhoto.js';
import FullName from './Component/profile/FullName';
import Adress from './Component/profile/Adress';
function App() {
  return (
    <div className="App">
     <FullName/>
     <ProfilePhoto/>
     <br/>
     <Adress/>
    </div>
  );
}

export default App;
