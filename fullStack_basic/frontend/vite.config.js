import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api': 'http://localhost:3001'
    }
    //append hoga aur sath me, aur proxy laga di jayegi, mtlb origin ban jayega
  },
  plugins: [react()],
})
