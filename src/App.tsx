import { RouteDefinition, useRoutes } from '@solidjs/router';
import { Component, lazy } from 'solid-js';

const pages = import.meta.glob('./pages/**/*') as Record<string, () => Promise<{ default: Component }>>;

const getPath = (path: string) => path
  .replace('./pages/', '') // Remove ./pages/ from start
  .replaceAll('index', '') // Remove indexes from path
  .replace(/\.[tj]sx/, '') // Remove .tsx and .jsx
  .replace(/\[.+]/, (param) => param.slice(1, -1)); // Change [param] to :param

const routes = Object.entries(pages).map(([path, component]): RouteDefinition => ({
  path: getPath(path), component: lazy(component),
}));

function App() {
  const Routes = useRoutes(routes);

  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
