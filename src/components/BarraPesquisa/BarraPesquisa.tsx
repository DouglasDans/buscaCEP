'use client'

import {Box, Button, Input, useColorScheme} from '@mui/joy'
import React, { useRef, useState } from 'react'
import {DarkMode, DarkModeRounded, Light, LightMode, LightModeRounded, SearchRounded} from "@mui/icons-material";
import { useRouter } from 'next/navigation'

type Props = {
   cepAtual? : string
}

export default function BarraPesquisa({cepAtual} : Props) {
   const router = useRouter()
   const [cep, setCep] = useState('')
   const [loading, setLoading] = useState(false)

   function handleSubmit(e : any) {
      e.preventDefault()
      
      if (e.target.cep.value === cepAtual){
         return 
      }

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
                color="neutral"
                placeholder='Digite o CEP...'
                size="lg"
            />
         </form>
      </Box>
   )
}


function InputDecoratorButtons({loading} : {loading: any}) {
   const { mode, setMode } = useColorScheme();
   return (
       <Box sx={styles.btnContainer}>
         {
            loading && 
            <Button loading variant="plain">
            </Button>
         }
         <Button 
            itemType={'button'} 
            sx={styles.button} 
            variant={"plain"} 
            type='button' 
            onClick={(e) => {
               e.preventDefault()
               setMode(mode === 'dark' ? 'light' : 'dark')
            }}
            >
               {mode === 'dark' ? <LightModeRounded/> : <DarkModeRounded/>}
         </Button>
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
      gap: '1rem'
   },
   button : {
      borderRadius: '30rem',
      width: '35px',
      height: '35px',
   },
}