import { extendTheme } from '@mui/joy';
import { Nunito } from "next/font/google";

// Arquivo configuração de personalização do tema do MUI

const nunito = Nunito({
   weight: ['300', '400', '500', '700'],
   subsets: ['latin'],
   display: 'swap',
})

declare module '@mui/joy/styles' {
   interface Palette {
     palette: {
       ast: string;
     };
   }
 }

const theme = extendTheme({
   colorSchemes: {
      dark: {
         palette:{
            background: {
               body: "#121212", // cor padrão de fundo - color1
               level1: "#121212", 
               level2: "#171717", // cor dos cards - color2
               level3:  "#222222" // cor dos cards - color3
            },
            text: {
               primary: "#DEDEDE",
               secondary: '#ABABAB',
               tertiary: '#656565',
               icon: '#7A7A7A'
            },
            
         },
         
         
         
      }
      
   },
   fontFamily: {
      body: nunito.style.fontFamily,
      display: nunito.style.fontFamily
   }
   // palette: {
   //    primary: {
   //       main: '#121212', // preto padrão
   //       light: '#171717'
   //    },
   //    secondary: {
   //       main: '#57009B', // roxinho taskflow
   //    },
   //    background: {
   //       default: "#121212", // cor padrão de fundo - color1
   //       paper: "#171717" // cor de fundo secundária (background de cards) - color2
   //    },
   //    text: {
   //       primary: "#DEDEDE", // cor padrão te textos - color12
   //       secondary: "#7A7A7A", // cor secundaria - color9
   //       disabled: "rgba(122,122,122,0.5)" // secundária acima mas com 0.5 opacity
   //    }
   // },
   
})

export default theme