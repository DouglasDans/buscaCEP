'use client'

import {Box, Button, Container, Input} from '@mui/joy'
import React from 'react'
import {SearchRounded} from "@mui/icons-material";

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
         <form onSubmit={handleSubmit} style={styles.barraPesquisaContainer}>
            <Input
                endDecorator={<InputDecoratorButtons/>}
                fullWidth
                name='cep'
                variant="soft"
                placeholder='Digite o CEP...'
                size="lg"
            />
         </form>
      </Box>
   )
}
function InputDecoratorButtons() {
   return (
       <Box sx={styles.btnContainer}>
          <Button sx={styles.button} variant={"plain"} type='submit'>
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
   }
}