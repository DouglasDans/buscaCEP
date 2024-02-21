'use client'

import * as React from 'react';
import { CssBaseline, CssVarsProvider } from '@mui/joy';

type Props = {children : any}

/* Registro do tema personalizado (assim só preciso chamar o componente daqui)

  TUDO aquilo que está dentro do componente do ThemeProvider, vai funcionar de
  acordo com o tema que foi informado e seus devidos estilos personalizados

  Esse esquema de personalização só funciona através de componentes Client, via Server dá erro

*/ 

export default function ThemeRegistry({ children }: Props) {

  

  return (
    <CssVarsProvider defaultMode="dark" disableNestedContext>
      <CssBaseline />
      {children}
    </CssVarsProvider>
  );
}
