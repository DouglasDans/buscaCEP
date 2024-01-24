'use client'

import { Box, Input } from '@mui/joy'
import React, { useEffect, useState } from 'react'
import verifyCepAndFetch from "@/components/BarraPesquisa/AcessoAPI";

type Props = {}

export default function BarraPesquisa({}: Props) {

   const [cepNumber, setCepNumber] = useState('')
   const [cepData, setCepData] = useState([])

   function handleSubmit(e : any) {
      e.preventDefault()
      setCepNumber(e.target.cep.value)
   }

   async function getDataFromCEP(cep : string) {
      await verifyCepAndFetch(cep).then((response : any) => {
         setCepData(response)
      })
   }

   useEffect(() => {
      Promise.resolve(getDataFromCEP(cepNumber))
   }, [cepNumber]);

   console.log(cepNumber, cepData)

   return (
      <Box width={'800px'} height={'45px'}>
         <form onSubmit={handleSubmit}>
            <Input  name='cep' variant="soft" placeholder='Digite o CEP...' size="lg" />
            {/* <button type='submit'>a</button> */}
         </form>
      </Box>
   )
}