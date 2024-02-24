'use client'

import * as React from 'react';
import { CssBaseline, CssVarsProvider } from '@mui/joy';

type Props = {children : any}

export default function ThemeRegistry({ children }: Props) {

  

  return (
    <CssVarsProvider defaultMode="dark" disableNestedContext>
      <CssBaseline />
      {children}
    </CssVarsProvider>
  );
}
