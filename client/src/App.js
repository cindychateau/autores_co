import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ActualizarAutor from './componentes/ActualizarAutor';
import Error from './componentes/Error';
import NuevoAutor from './componentes/NuevoAutor';
import TodosAutores from './componentes/TodosAutores';

const App = () => {
  return(
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={()=><TodosAutores />} />
          <Route path="/nuevo" render={() => <NuevoAutor />} />
          <Route path="/autor/editar/:id" render={() => <ActualizarAutor />}/>
          <Route path="/error" render={() => <Error /> } />
          <Route path="*" render={() => <Error /> } />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
