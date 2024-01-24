import { HomeRounded } from '@mui/icons-material'
import { Box, Typography } from '@mui/joy'
import React from 'react'
import {object} from "prop-types";

type Props = {
    type : string,
    cepItem : any,
    icon? : string
}

export default function ItemCep({type, cepItem} : Props) {
   return (
      <Box display={'flex'} alignItems={'flex-start'} p={1} gap={'0.5rem'}>
         <HomeRounded/>
         <Box>
            <Typography level='body-sm'>{type}</Typography>
            <Typography sx={{textWrap: 'wrap'}} width={'100%'} level='title-md'>{cepItem}</Typography>
         </Box>
      </Box>
   )
}