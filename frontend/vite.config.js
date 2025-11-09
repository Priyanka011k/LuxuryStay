// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // server: {
  // proxy: {
  //   '/api': {
  //     target: 'https://reqres.in',
  //     changeOrigin: true,
  //     // ❌ DON'T rewrite the path!
  //     // rewrite: (path) => path.replace(/^\/api/, '')
  //   }
  // }
//}
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:5000', // or whatever port your backend runs on
      changeOrigin: true,
    }
  }
}


})
