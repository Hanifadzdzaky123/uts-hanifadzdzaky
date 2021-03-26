import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./component/dashboard/dashboard";
import Surat from "./component/daftarSurat/surat";
import Ayat from "./component/daftarAyat/ayat";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route>
        <Dashboard>
        <Route path="/:id" exact component={Ayat}/>
          <Route path="/" exact component={Surat}/>
        </Dashboard>
        <Route path="/" exact component={Dashboard}/>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
