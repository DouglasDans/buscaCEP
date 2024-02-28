import { Box, Typography } from '@mui/joy';
import * as React from 'react';
import { ItemHistorico } from './ItemHistorico/ItemHistorico';

export interface IAppProps {
}

export function Historico (props: IAppProps) {
  return (
     <Box bgcolor={'background.level1'} sx={styles.gridCepDados} p={2} gap={1}>
         <Typography level='title-md'>Histórico</Typography>
         <Box>
            <ItemHistorico/>
         </Box>
      </Box>
  );
}

const styles = {
   gridCepDados: {
      width: '200px',
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 'var(--joy-radius-sm)'
   }
}