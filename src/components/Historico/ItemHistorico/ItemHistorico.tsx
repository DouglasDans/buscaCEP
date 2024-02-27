import { HomeRounded } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/joy';
import Link from 'next/link';
import * as React from 'react';
import styles from './itemHistorico.module.css'

export interface IItemHistoricoProps {
}

export function ItemHistorico (props: IItemHistoricoProps) {
   return (
      <Link href={"/"} className={styles.linkItemHistorico}>
         <Box bgcolor={'background.level2'} className={styles.itemHistorico} p={1}>
               <Typography  level='body-sm'>{"01001-000"}</Typography>
               <Typography className={styles.textoRua} sx={{textWrap: 'wrap'}} width={'100%'} level='title-md'>{"Praça da Seeeeeeeseeeeeé"}</Typography>
         </Box>
      </Link>
   );
}