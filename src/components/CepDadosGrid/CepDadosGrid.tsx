import { Box } from '@mui/joy'
import React from 'react'
import ItemCep from './ItemCep/ItemCep'
import ICepResponse from "@/interfaces/ICepResponse";

type Props = {
    response : ICepResponse
    loading : boolean
}

export default function CepDadosGrid({response, loading}: Props) {
    console.log(response)

    if (!loading){
        return render(response)
    } else {
        return ('loading')
    }
}

function render(response : ICepResponse) {
    if (Object.values(response).length === 0){
        console.log(Object.values(response).length === 0)
        return (
            <Box>aaaaaa</Box>
        )
    } else {
        return (
            <Box bgcolor={'#131618'} sx={styles.gridCepDados} p={2}>
                <ItemCep type={'Logradouro'} cepItem={response.logradouro}/>
                <ItemCep type={'Bairro'} cepItem={response.bairro}/>
                <ItemCep type={'Cidade'} cepItem={response.cidade.nome}/>
                <ItemCep type={'Estado'} cepItem={response.estado.sigla}/>
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