import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

const repoName = 'Gifs-App';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`,
});
