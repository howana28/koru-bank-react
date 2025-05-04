import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/koru-bank-react/', // nome do repositório
  plugins: [react()],
})
