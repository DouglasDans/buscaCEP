import BarraPesquisa from '@/components/BarraPesquisa/BarraPesquisa'
import CepDadosGrid from '@/components/CepDadosGrid/CepDadosGrid'
import { Box } from '@mui/joy'

import styles from './styles';
import ApiHandler from '@/api/ApiHandler';


export default async function Home() {

  const api = new ApiHandler();
  const responseAPIData = await api.request("get", "cep", "01001000");

  return (
    <Box sx={styles.mainContainer}>
      <Box display={'flex'} gap={'0.5rem'} flexDirection={'column'}>
        <BarraPesquisa/>
        <Box sx={styles.cepContainer} p={2} bgcolor={'background.level1'}>
          <CepDadosGrid response={responseAPIData}/>
        </Box>
      </Box>
    </Box>
  )
}

