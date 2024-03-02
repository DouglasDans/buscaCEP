import BarraPesquisa from '@/components/BarraPesquisa/BarraPesquisa'
import { Box, Typography } from '@mui/joy'
import Placeholder from '@/components/Placeholder/Placeholder';
import styles from './home.module.css'

export default async function Home() {
  return (
   <Box className={styles.mainContainer}>
      <Box display={'flex'} justifyContent={'center'} alignItems={"end"} >
         <Typography sx={{fontSize:'1.5rem', color: 'text.secondary'}}>busca</Typography>
         <Typography level="h2" sx={{color: 'text.primary'}}>CEP</Typography>
      </Box>
      <Box gap={'0.5rem'} display={'flex'} alignItems={"stretch"}>
         <Box display={'flex'} gap={'0.5rem'} flexDirection={'column'}>
            <BarraPesquisa />
            <Box className={styles.cepContainer} p={2} bgcolor={'background.level1'}>
               <Placeholder/>
            </Box>
         </Box>
      </Box>
   </Box>
  )
}

