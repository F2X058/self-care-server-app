import { buildConfig } from 'payload/config';

import path from 'path';

// import plugins
import Admin from './plugins/admin';
import Content from './plugins/content';
import Media from './plugins/media';

export default buildConfig({
  serverURL: "http://localhost:3000",
  localization: {
    locales: ['pl', 'en'],
    defaultLocale: 'en',
  },
  plugins: [
    Admin,
    Media,
    Content,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  },
});
