'use client'

import BarraPesquisa from '@/components/BarraPesquisa/BarraPesquisa'
import CepDadosGrid from '@/components/CepDadosGrid/CepDadosGrid'
import { Box } from '@mui/joy'
import {useEffect, useState} from "react";
import verifyCepAndFetch from "@/components/BarraPesquisa/AcessoAPI";

export default function Home() {

  const [cepNumber, setCepNumber] = useState('01001000')
  const [cepData, setCepData] = useState<any>()
  const [loading, setLoading] = useState(true)
  async function getDataFromCEP(cep : string) {
    await verifyCepAndFetch(cep).then((response : any) => {
      setCepData(response)
      setLoading(false)
    })
  }

  useEffect(() => {
    Promise.resolve(getDataFromCEP(cepNumber))
    setLoading(true)
  }, [cepNumber]);

  return (
    <Box sx={styles.mainContainer}>
      <Box display={'flex'} gap={'0.5rem'} flexDirection={'column'}>
        <BarraPesquisa setCepNumber={setCepNumber}/>
        <Box sx={styles.cepContainer} p={2} bgcolor={'background.level1'}>
          <CepDadosGrid response={cepData} loading={loading}/>
        </Box>
      </Box>
    </Box>
  )
}

const styles = {
  mainContainer:{
    // bgColor: 'background.body',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cepContainer: {
    width:'800px',
    height: '300px',
    borderRadius: 'var(--joy-radius-sm)'
  }
}