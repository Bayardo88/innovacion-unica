// @ts-check
import { defineConfig } from 'astro/config';

// Cambiar `site` por el dominio final (Netlify o institucional) antes de publicar.
export default defineConfig({
  site: 'https://unica-innovacion.netlify.app',
  trailingSlash: 'ignore',
  // Las clases que se pasan a componentes hijos heredan el estilo con alcance del padre.
  scopedStyleStrategy: 'class',
  devToolbar: { enabled: false },
});
