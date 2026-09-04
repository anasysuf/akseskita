import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default [
  // 1. Unminified bundle (Development / Debugging)
  {
    input: 'src/index.js',
    output: {
      file: 'dist/akseskita.js',
      format: 'iife',
      name: 'AksesKita',
      sourcemap: true
    },
    plugins: [
      resolve()
    ]
  },
  // 2. Minified bundle (< 35KB Production / CDN)
  {
    input: 'src/index.js',
    output: {
      file: 'dist/akseskita.min.js',
      format: 'iife',
      name: 'AksesKita',
      sourcemap: false
    },
    plugins: [
      resolve(),
      terser({
        ecma: 2020,
        toplevel: true,
        format: {
          comments: false
        },
        compress: {
          passes: 3,
          unsafe: true,
          unsafe_arrows: true,
          unsafe_methods: true,
          drop_debugger: true
        },
        mangle: {
          toplevel: true
        }
      })
    ]
  },
  // 3. ESM bundle for modern bundlers / npm import
  {
    input: 'src/index.js',
    output: {
      file: 'dist/akseskita.esm.js',
      format: 'es',
      sourcemap: true
    },
    plugins: [
      resolve()
    ]
  }
];
