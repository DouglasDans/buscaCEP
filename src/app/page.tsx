import BarraPesquisa from '@/components/BarraPesquisa/BarraPesquisa'
import CepDadosGrid from '@/components/CepDadosGrid/CepDadosGrid'
import { Box, Button } from '@mui/joy'

export default function Home() {
  return (
    <Box sx={styles.mainContainer}>
      <Box display={'flex'} gap={'0.5rem'} flexDirection={'column'}>

        <BarraPesquisa/>

        <Box sx={styles.cepContainer} p={2} bgcolor={'background.level2'}>
          <CepDadosGrid/>
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
    width:'100%',
    height: '300px',
    borderRadius: 'var(--joy-radius-sm)'
  }
}