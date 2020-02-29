import cpy from 'rollup-plugin-cpy';
import { createDefaultConfig } from '@open-wc/building-rollup';

// if you need to support IE11 use "modern-and-legacy-config" instead.
// import { createCompatibilityConfig } from '@open-wc/building-rollup';
// export default createCompatibilityConfig({ input: './index.html' });

const config = createDefaultConfig({ input: './index.html' });

// if you use an array of configs, you don't need the copy task to be executed for both builds.
// we can add the plugin only to the first rollup config:
export default [
  {
    ...config,
    plugins: [
      ...config.plugins,
      cpy({
        files: ['images/**', 'manifest.json', 'push-manifest.json', 'robots.txt'],
        dest: 'dist',
        options: {
          verbose: true,
          parents: true,
        },
      }),
    ],
  },
];
