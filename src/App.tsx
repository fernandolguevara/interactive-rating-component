import { useRoutes } from '@solidjs/router';
import routes from '~/helpers/getRoutes';
import '$css';

function App() {
  const Routes = useRoutes(routes);

  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
