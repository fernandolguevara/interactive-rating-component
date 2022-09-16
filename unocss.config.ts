import {
  defineConfig,
  transformerDirectives,
  transformerVariantGroup,
  presetWind,
  presetUno,
  presetWebFonts,
  presetIcons,
} from 'unocss';
import * as fs from 'fs';
import * as path from 'path';
import { theme } from './tailwind.config.cjs';

const shortcuts: [string, string][] = [

];

const config = defineConfig({
  shortcuts,
  // WebStorm don't support unocss config, so theme put in tailwind.config.cjs
  theme: {
    ...theme.extend,
  },
  rules: [
    [/^((min|max)-)?size-(\d+)(.+)?$/, ([matcher]) => {
      const [type, sizePart] = matcher.split('size-');
      const sizeNum = Number(sizePart);
      let size = sizePart;
      if (sizeNum > 0) size = `${sizeNum / 4}rem`;
      else if (sizePart.includes('/')) {
        const [prev, suf] = sizePart.split('/');
        const percent = 100 * Number(prev) / Number(suf);
        size = `${percent}%`;
      }

      return { [`${type}width`]: size, [`${type}height`]: size };
    }],
  ],
  variants: [
    (matcher) => {
      if (!matcher.startsWith('max-')) return matcher;

      const [variant, ...rest] = matcher.split(':');

      const mediaPx = {
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
      }[variant.replace('max-', '')] || 0;

      if (mediaPx == 0) return matcher;

      return {
        matcher: rest.join(':'),
        parent: `@media (max-width: ${mediaPx}px)`,
      };
    },
    (matcher) => {
      if (!matcher.startsWith('hocus:')) return matcher;

      return {
        matcher: matcher.slice(6),
        selector: (s) => `${s}:hover, ${s}:focus`,
      };
    },
  ],
  presets: [
    presetUno(),
    presetWind(),
    presetWebFonts({
      fonts: {
        sans: 'Space Grotesk:500',
      },
    }),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        height: 'auto',
        'min-height': '1em',
        'white-space': 'nowrap',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
});

// Create mock file for auto-complete
fs.writeFileSync(
  path.join(__dirname, '/src/assets/style/mock.css'),
  shortcuts.map(([name]) => `.${name} {}`).join('\n'),
);

export default config;
