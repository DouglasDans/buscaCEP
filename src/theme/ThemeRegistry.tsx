'use client'

import * as React from 'react';
import { CssBaseline, CssVarsProvider } from '@mui/joy';
import theme from './theme';

type Props = {children : any}

export default function ThemeRegistry({ children }: Props) {
  return (
    <CssVarsProvider defaultMode="dark" theme={theme} disableNestedContext>
      <CssBaseline />
      {children}
    </CssVarsProvider>
  );
}
