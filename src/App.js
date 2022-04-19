import './Assets/Styles/index.css';
import Homepage from './Components/Homepage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import IndeedModal from './Components/Modals/IndeedModal';
import CognizantModal from './Components/Modals/CognizantModal';
import SBGModal from './Components/Modals/SBGModal';
import KedgeModal from './Components/Modals/KedgeModal';
import TGModal from './Components/Modals/TGModal';
import ZuydModal from './Components/Modals/ZuydModal';
import AboutMeModal from './Components/Modals/AboutMeModal';

function App() { 

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
      <Route path="/" component={IndeedModal} />
      <Route path="/" component={CognizantModal} />
      <Route path="/" component={SBGModal} />
      <Route path="/" component={KedgeModal} />
      <Route path="/" component={TGModal} />
      <Route path="/" component={ZuydModal} />
      <Route path="/" component={AboutMeModal} />
    </Router>
  );
};

export default App;
