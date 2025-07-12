import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  
  build: {
    rollupOptions: {
      external: [
        'firebase/app',
        'firebase/auth',
        'firebase/firestore',
        'firebase/storage',
        'firebase/functions',
        'firebase/database',
        'firebase/messaging',
        'firebase/analytics',
        'firebase/performance',
        'firebase/remote-config',
        'firebase/installations',
        
      ],
    },
  },
});
