import { Box, Input } from '@mui/joy'
import React from 'react'

type Props = {}

export default function BarraPesquisa({}: Props) {
   return (
      <Box width={'800px'} height={'45px'}>
         <Input variant="soft" placeholder='Digite o CEP...' size="lg" />
      </Box>
   )
}