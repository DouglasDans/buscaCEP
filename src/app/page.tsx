import BarraPesquisa from '@/components/BarraPesquisa/BarraPesquisa'
import { Box, Button } from '@mui/joy'

export default function Home() {
  return (
    <Box sx={styles.mainContainer}>
      <Box>
        <BarraPesquisa/>
      </Box>
    </Box>
  )
}

const styles = {
  mainContainer:{
    bgColor: 'background.body',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}