'use client'

import { Box, Input } from '@mui/joy'
import React, { useEffect, useState } from 'react'
import verifyCepAndFetch from "@/components/BarraPesquisa/AcessoAPI";

type Props = {
   setCepNumber(cep : string) : void
}

export default function BarraPesquisa({setCepNumber}: Props) {
   function handleSubmit(e : any) {
      e.preventDefault()
      setCepNumber(e.target.cep.value)
   }

   return (
      <Box width={'800px'} height={'45px'}>
         <form onSubmit={handleSubmit}>
            <Input  name='cep' variant="soft" placeholder='Digite o CEP...' size="lg" />
            {/* <button type='submit'>a</button> */}
         </form>
      </Box>
   )
}