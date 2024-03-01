import { MarkunreadMailboxRounded } from '@mui/icons-material'
import { Box, Typography } from '@mui/joy'
import React from 'react'

type Props = {}

export default function Placeholder({}: Props) {
   return (
   <Box  display={'flex'} flexDirection={'column'} alignItems={'center'}
   justifyContent={'center'} p={5}>
      <Typography level='h1' sx={{color: 'text.icon'}}>
         <MarkunreadMailboxRounded />
      </Typography>
      <Typography level='title-lg' sx={{color: 'text.tertiary'}}>Digite um CEP para começar</Typography>
   </Box>
   )
}