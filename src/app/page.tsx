import BarraPesquisa from '@/components/BarraPesquisa/BarraPesquisa'
import CepDadosGrid from '@/components/CepDadosGrid/CepDadosGrid'
import { Box, Typography } from '@mui/joy'

import styles from './styles';
import ApiHandler from '@/api/ApiHandler';
import { Historico } from '@/components/Historico/Historico';


export default async function Home() {

  const api = new ApiHandler();
  const responseAPIData = await api.request("test", "01001000");

  return (
    <Box sx={styles.mainContainer}>
      <Box display={'flex'} justifyContent={'center'} alignItems={"end"}>
          <Typography sx={{fontSize:'1.5rem'}}>busca</Typography>
          <Typography level="h2">CEP</Typography>
        </Box>
        <Box gap={'0.5rem'} display={'flex'} alignItems={"stretch"}>
          <Box display={'flex'} gap={'0.5rem'} flexDirection={'column'}>
            <BarraPesquisa/>
            <Box sx={styles.cepContainer} p={2} bgcolor={'background.level1'}>
              {/* <CepDadosGrid response={responseAPIData}/> */}
              <h1>Bem vindo</h1>
            </Box>
          </Box>
          <Historico/>
        </Box>
    </Box>
  )
}

