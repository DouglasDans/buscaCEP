import { Box } from '@mui/joy'
import React from 'react'
import ItemCep from './ItemCep/ItemCep'

type Props = {
    response : {
        logradouro : string
        bairro : string
        cidade : {
            nome : string
        }
        estado : {
            sigla : string
        },
        cep : string
    }
    loading : boolean
}

export default function CepDadosGrid({response, loading}: Props) {
    console.log(response)

    if (!loading){
        return (
            <Box bgcolor={'background.level2'} sx={styles.gridCepDados} p={2}>
                <ItemCep type={'Logradouro'} cepItem={response.logradouro}/>
                <ItemCep type={'Bairro'} cepItem={response.bairro}/>
                <ItemCep type={'Cidade'} cepItem={response.cidade.nome}/>
                <ItemCep type={'Estado'} cepItem={response.estado.sigla}/>
                <ItemCep type={'CEP'} cepItem={response.cep}/>
            </Box>
        )
    } else {
        return ('loading')
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