import { HomeRounded } from '@mui/icons-material'
import { Box, Typography } from '@mui/joy'
import React, {ReactElement} from 'react'

type Props = {
    type : string,
    cepItem : any,
    icon : ReactElement
}

export default function ItemCep({type, cepItem, icon} : Props) {
   if (cepItem){
       return (
           <Box display={'flex'} alignItems={'flex-start'} p={1} gap={'0.5rem'}>
               {icon}
               <Box>
                   <Typography level='body-sm'>{type}</Typography>
                   <Typography sx={{textWrap: 'wrap'}} width={'100%'} level='title-md'>{cepItem ? cepItem : 'Indefinido'}</Typography>
               </Box>
           </Box>
       )
   }
}