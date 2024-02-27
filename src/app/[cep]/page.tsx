import BarraPesquisa from "@/components/BarraPesquisa/BarraPesquisa";
import { Box, Snackbar, Typography } from "@mui/joy";

import styles from "../styles";
import CepDadosGrid from "@/components/CepDadosGrid/CepDadosGrid";
import ApiHandler from "@/api/ApiHandler";
import { Historico } from "@/components/Historico/Historico";
import { APIResponse, ErrorAPIResponse } from "@/interfaces/APIResponse";
import { Error } from "@mui/icons-material";

export default async function Page({ params }: { params: { cep: string } }) {
  const cepAtual : string = params.cep || ""
  const api = new ApiHandler();
  let defaultScreen : boolean = false
  let responseAPIData : APIResponse | ErrorAPIResponse

  responseAPIData = await api.request("get", cepAtual);

  if("message" in responseAPIData){
    // responseAPIData = await api.request("test", cepAtual);
    defaultScreen = true
  }

  return (
      <Box sx={styles.mainContainer}>
        <Box display={'flex'} justifyContent={'center'} alignItems={"end"}>
          <Typography sx={{fontSize:'1.5rem'}}>busca</Typography>
          <Typography level="h2">CEP</Typography>
        </Box>
        <Box gap={'0.5rem'} display={'flex'} alignItems={"stretch"}>
          <Box display={'flex'} gap={'0.5rem'} flexDirection={'column'}>
            <BarraPesquisa cepAtual={cepAtual}/>
            <Box sx={styles.cepContainer} p={2} bgcolor={'background.level1'}>
              <CepDadosGrid response={responseAPIData}/>
            </Box>
          </Box>
          <Historico/>
        </Box>
        
        {defaultScreen ? 
          <Snackbar 
            anchorOrigin={{ vertical : 'bottom', horizontal : 'left' }}
            open={true}
            color="danger" 
            variant="soft"
            autoHideDuration={500}
            startDecorator={<Error/>}>
              <Box display={'flex'} flexDirection={"column"}>
                <Typography level="body-md" color="danger">Ocorreu um erro com a sua requisição. Tente novamente </Typography>
                <Typography level="body-sm">{responseAPIData.message}</Typography>
              </Box>
          </Snackbar>
        : ""}
      </Box>
    )
}