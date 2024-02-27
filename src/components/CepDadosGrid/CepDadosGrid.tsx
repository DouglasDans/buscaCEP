import { Box } from '@mui/joy'
import React from 'react'
import ItemCep from './ItemCep/ItemCep'
import { APIResponse } from "@/interfaces/APIResponse";

type Props = {
    response : APIResponse
}

export default function CepDadosGrid({response}: Props) {
    if (Object.values(response).length === 0){
        return (
            <Box>Não encontrado</Box>
        )
    } else {
        return (
            <Box bgcolor={'background.level1'} sx={styles.gridCepDados} p={2}>
                <ItemCep type={'Logradouro'} cepItem={response.logradouro}/>
                <ItemCep type={'Bairro'} cepItem={response.bairro}/>
                <ItemCep type={'Cidade'} cepItem={response.localidade}/>
                <ItemCep type={'Estado'} cepItem={response.uf}/>
                <ItemCep type={'DDD'} cepItem={response.ddd}/>
                <ItemCep type={'IBGE'} cepItem={response.ibge}/>
                <ItemCep type={'CEP'} cepItem={response.cep}/>
            </Box>
        )
    }
}

const styles = {
   gridCepDados: {
      width: '100%',
      height: 'auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      borderRadius: 'var(--joy-radius-sm)'
   }
}