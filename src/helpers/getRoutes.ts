import { Component, lazy } from 'solid-js';
import { RouteDefinition } from '@solidjs/router';

const pages = import.meta.glob('../pages/**/*') as Record<string, () => Promise<{ default: Component }>>;

const getPath = (path: string) => (
  path
    .replace('../pages/', '') // Remove ./pages/ from start
    .replaceAll('index', '') // Remove indexes from path
    .replaceAll('@', ':') // Change @param to :param
    .replace(/\.[tj]sx/, '') // Remove .tsx and .jsx
);

const routes = Object.entries(pages).map(([path, component]): RouteDefinition => ({
  path: getPath(path), component: lazy(component),
}));

export default routes;
