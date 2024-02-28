import BarraPesquisa from '@/components/BarraPesquisa/BarraPesquisa'
import { Box, Typography } from '@mui/joy'

import styles from './styles';
import { Historico } from '@/components/Historico/Historico';
import { MarkunreadMailboxRounded } from '@mui/icons-material';
import Placeholder from '@/components/Placeholder/Placeholder';

export default async function Home() {
  return (
   <Box sx={styles.mainContainer}>
      <Box display={'flex'} justifyContent={'center'} alignItems={"end"}>
         <Typography sx={{fontSize:'1.5rem'}}>busca</Typography>
         <Typography level="h2">CEP</Typography>
      </Box>
      <Box gap={'0.5rem'} display={'flex'} alignItems={"stretch"}>
         <Box display={'flex'} gap={'0.5rem'} flexDirection={'column'}>
            <BarraPesquisa />
            <Box sx={styles.cepContainer} p={2} bgcolor={'background.level1'}>
               <Placeholder/>
            </Box>
         </Box>
      </Box>
   </Box>
  )
}

