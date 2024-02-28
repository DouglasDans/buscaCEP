import BarraPesquisa from "@/components/BarraPesquisa/BarraPesquisa";
import { Box, Snackbar, Typography } from "@mui/joy";

import styles from "../styles";
import CepDadosGrid from "@/components/CepDadosGrid/CepDadosGrid";
import ApiHandler from "@/api/ApiHandler";
import { APIResponse, ErrorAPIResponse } from "@/interfaces/APIResponse";
import { Error } from "@mui/icons-material";
import Placeholder from "@/components/Placeholder/Placeholder";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata({ params }: { params: { cep: string } }, 
   parent: ResolvingMetadata): Promise<Metadata> {

   const cepAtual : string = params.cep || "CEP"
   
   return {
      title: cepAtual + " - BuscaCEP",
   }
 }

export default async function Page({ params }: { params: { cep: string } }) {
   const cepAtual : string = params.cep || ""
   const api = new ApiHandler();
   const responseAPIData : APIResponse | ErrorAPIResponse = await api.request("get", cepAtual);


   return (
      <Box sx={styles.mainContainer}>
         <Box display={'flex'} justifyContent={'center'} alignItems={"end"}>
            <Typography sx={{fontSize:'1.5rem'}}>busca</Typography>
            <Typography level="h2">CEP</Typography>
         </Box>
         <Box gap={'0.5rem'} display={'flex'} alignItems={"stretch"}>
            <Box display={'flex'} gap={'0.5rem'} flexDirection={'column'}>
               <BarraPesquisa cepAtual={cepAtual} />
               <Box sx={styles.cepContainer} p={2} bgcolor={'background.level1'}>
                  {
                     isErrorAPIResponse(responseAPIData) ?
                        <Placeholder/>
                     :
                        <CepDadosGrid response={responseAPIData} />
                  }
               </Box>
            </Box>
         </Box>
         {isErrorAPIResponse(responseAPIData) ? renderErrorSnackbar(responseAPIData) : ""}
      </Box>
   )
}

function isErrorAPIResponse(response: APIResponse | ErrorAPIResponse): response is ErrorAPIResponse {
   return (response as ErrorAPIResponse).code !== undefined;
 }

function renderErrorSnackbar(responseAPIData : ErrorAPIResponse){
   return(
      <Snackbar anchorOrigin={{ vertical : 'bottom', horizontal : 'left' }} open={true} color="danger" variant="soft"
            autoHideDuration={500} startDecorator={<Error />}>
         <Box display={'flex'} flexDirection={"column"}>
            <Typography level="body-md" color="danger">Ocorreu um erro com a sua requisição. Tente novamente
            </Typography>
            <Typography level="body-sm">{responseAPIData.message}</Typography>
         </Box>
      </Snackbar>
   )
}