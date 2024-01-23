import { Box, Skeleton } from '@mui/joy'
import React from 'react'
import ItemCep from './ItemCep/ItemCep'

type Props = {}

export default function CepDadosGrid({}: Props) {
   return (
      <Box bgcolor={'background.level1'} sx={styles.gridCepDados} p={2}>
         <ItemCep/>
         <ItemCep/>
         <ItemCep/>
         <ItemCep/>
      </Box>
   )
}

const styles = {
   gridCepDados: {
      width: '100%',
      height: 'auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      borderRadius: 'var(--joy-radius-sm)'
   }
}