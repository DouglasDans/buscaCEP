'use client'

import { Box, Input } from '@mui/joy'
import React, { useEffect, useState } from 'react'

type Props = {}

export default function BarraPesquisa({}: Props) {

   const [cepData, setCepData] = useState([])

   function handleSubmit(e : any) {
      e.preventDefault()
      console.log(e.target.cep.value);
      getDataFromAPI(e.target.cep.value)
   }

   function getDataFromAPI(cep : string) {
      fetch(`http://localhost:3000/get?request=cep&params=${cep}`)
      .then((res : any) => res.json()).then(json => setCepData(json))
   }
   
   console.log(cepData)

   return (
      <Box width={'800px'} height={'45px'}>
         <form onSubmit={handleSubmit}>
            <Input  name='cep' variant="soft" placeholder='Digite o CEP...' size="lg" />
            <button type='submit'>a</button>
         </form>
      </Box>
   )
}