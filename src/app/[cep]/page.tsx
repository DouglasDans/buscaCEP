import BarraPesquisa from "@/components/BarraPesquisa/BarraPesquisa";
import { Box } from "@mui/joy";

import styles from "../styles";
import CepDadosGrid from "@/components/CepDadosGrid/CepDadosGrid";
import ApiHandler from "@/api/ApiHandler";

export default async function Page({ params }: { params: { cep: string } }) {
  
  const api = new ApiHandler();
  const responseAPIData = await api.request("get", params.cep);

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