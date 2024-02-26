import { extendTheme } from '@mui/joy';
import { Ubuntu } from "next/font/google";

// Arquivo configuração de personalização do tema do MUI

const ubuntu = Ubuntu({
   weight: ['300', '400', '500', '700'],
   subsets: ['latin-ext'],
})

const theme = extendTheme({
   fontFamily: {
      body: ubuntu.style.fontFamily,
      display: ubuntu.style.fontFamily
   }
})

export default theme