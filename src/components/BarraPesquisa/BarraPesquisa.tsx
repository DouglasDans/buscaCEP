import { Api } from '@/api/api'
import { Box, Input } from '@mui/joy'
import { log } from 'console'
import React from 'react'

type Props = {}

export default function BarraPesquisa({}: Props) {

   const api = new Api();

   api.getContent("cep", '08412180').then(res => {
      console.log(res)
   })

   return (
      <Box width={'800px'} height={'45px'}>
         <Input variant="soft" placeholder='Digite o CEP...' size="lg" />
      </Box>
   )
}