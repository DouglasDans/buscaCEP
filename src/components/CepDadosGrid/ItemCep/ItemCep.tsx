import { HomeRounded } from '@mui/icons-material'
import { Box, Typography } from '@mui/joy'
import React from 'react'

type Props = {}

export default function ItemCep({}: Props) {
   return (
      <Box display={'flex'} alignItems={'flex-start'} p={1} gap={'0.5rem'}>
         <HomeRounded/>
         <Box>
            <Typography level='body-sm'>Logradouro</Typography>
            <Typography level='title-md'>Rua Bento Soares Mota</Typography>
         </Box>
      </Box>
   )
}