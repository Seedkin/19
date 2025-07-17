import styles from 'rollup-plugin-styles';
import { babel } from '@rollup/plugin-babel';
import image from '@rollup/plugin-image';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

export default {
  input: './index.js',
  output: {
    file: './dist/bundle.js',
    format: 'cjs',
  },
  plugins: [styles(), image(), babel({ babelHelpers: 'bundled' }), serve(), livereload()],
};
