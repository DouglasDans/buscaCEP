import { HomeRounded } from '@mui/icons-material';
import { Box, Typography } from '@mui/joy';
import Link from 'next/link';
import * as React from 'react';

export interface IItemHistoricoProps {
}

export function ItemHistorico (props: IItemHistoricoProps) {
   return (
      <Box display={'flex'} flexDirection={'column'} alignItems={'flex-start'} p={1}>
         <Link href={"/"}>
            <Typography level='body-sm'>{"01001-000"}</Typography>
            <Typography sx={{textWrap: 'wrap'}} width={'100%'} level='title-md'>{"Praça da Sé"}</Typography>
         </Link>
      </Box>
   );
}
