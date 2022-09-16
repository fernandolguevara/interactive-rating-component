import solid from 'vite-plugin-solid';
import { defineConfig } from 'vite';
import css from 'unocss/vite';
import autoImport from 'unplugin-auto-import/vite';
import path from 'path';

export default defineConfig({
  server: {
    port: 3333,
  },
  resolve: {
    alias: {
      '~': path.join(__dirname, '/src/'),
      $css: path.join(__dirname, '/src/assets/style/index.ts'),
    },
  },
  plugins: [
    solid(),
    css(),
    autoImport({
      dts: 'src/auto-imports.d.ts',
      imports: [
        'solid-js',
        {
          '@solidjs/router': ['Link', 'NavLink', 'Navigate', 'Outlet', 'Route', 'Router', 'Routes', '_mergeSearchString', 'createIntegration', 'hashIntegration', 'normalizeIntegration', 'pathIntegration', 'staticIntegration', 'useHref', 'useIsRouting', 'useLocation', 'useMatch', 'useNavigate', 'useParams', 'useResolvedPath', 'useRouteData', 'useRoutes', 'useSearchParams'],
        },
      ],
    }),
  ],
});
