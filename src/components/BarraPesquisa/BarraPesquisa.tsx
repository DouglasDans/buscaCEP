'use client'

import {Box, Button, Input} from '@mui/joy'
import React, { useRef, useState } from 'react'
import {SearchRounded} from "@mui/icons-material";
import { useRouter } from 'next/navigation'

export default function BarraPesquisa() {
   const router = useRouter()
   const [cep, setCep] = useState('')
   const [loading, setLoading] = useState(false)

   function handleSubmit(e : any) {
      e.preventDefault()
      setLoading(true)
      router.push(`/${e.target.cep.value}`)
   }

   return (
      <Box width={'800px'} height={'45px'}>
         <form onSubmit={handleSubmit} style={styles.barraPesquisaContainer}>
            <Input
                endDecorator={<InputDecoratorButtons loading={loading}/>}
                fullWidth
                onChange={(e) => {setCep(e.target.value)}}
                value={cep}
                type='text'
                name='cep'
                variant="soft"
                placeholder='Digite o CEP...'
                size="lg"
                sx={styles.inputNumber}
            />
         </form>
      </Box>
   )
}
function InputDecoratorButtons({loading} : {loading: any}) {
   console.log(loading)
   return (
       <Box sx={styles.btnContainer}>
         {
            loading && 
            <Button loading variant="plain">
               Plain
            </Button>
         }
         <Button itemType={'submit'} sx={styles.button} variant={"plain"} type='submit'>
            <SearchRounded/>
         </Button>
       </Box>
   )
}

const styles = {
   barraPesquisaContainer : {
      width: '100%',
      display: 'flex',
   },
   btnContainer : {
      display: 'flex',
      alignItems: 'center',
   },
   button : {
      borderRadius: '30rem',
      width: '35px',
      height: '35px',
   },
   inputNumber: {
      '::-webkit-inner-spin-button' : {
         '-webkit-appearance': 'none',
         '-moz-appearance': 'none',
         'appearance': 'none'
      }
   }
}