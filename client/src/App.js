import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NuevoAutor from './componentes/NuevoAutor';
import TodosAutores from './componentes/TodosAutores';

const App = () => {
  return(
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={()=><TodosAutores />} />
          <Route path="/nuevo" render={() => <NuevoAutor />} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
