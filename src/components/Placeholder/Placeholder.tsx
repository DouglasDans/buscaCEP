import { MarkunreadMailboxRounded } from '@mui/icons-material'
import { Box, Typography } from '@mui/joy'
import React from 'react'

type Props = {}

export default function Placeholder({}: Props) {
   return (
   <Box height={'300px'} display={'flex'} flexDirection={'column'} alignItems={'center'}
   justifyContent={'center'} p={5}>
      <Typography level='h1'>
         <MarkunreadMailboxRounded />
      </Typography>
      <Typography level='title-lg'>Digite um CEP para começar</Typography>
   </Box>
   )
}