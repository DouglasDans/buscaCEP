'use client'

import * as React from 'react';
import { CssBaseline, CssVarsProvider, getInitColorSchemeScript } from '@mui/joy';
import theme from './theme';

type Props = {children : any}

export default function ThemeRegistry({ children }: Props) {
  return (
    <CssVarsProvider defaultMode="system" theme={theme} disableNestedContext>
      {getInitColorSchemeScript()}
      <CssBaseline />
      {children}
    </CssVarsProvider>
  );
}
