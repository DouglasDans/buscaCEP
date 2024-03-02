import { Box } from '@mui/joy'
import React from 'react'
import ItemCep from './ItemCep/ItemCep'
import { APIResponse } from "@/interfaces/APIResponse";

import styles from './cepDadosGrid.module.css'
import {
    CellTower, CellTowerRounded, HomeRounded,
    HomeWorkRounded,
    House,
    HouseRounded,
    LocationCityRounded, MarkunreadMailboxRounded,
    PinDropRounded, TimelineRounded
} from "@mui/icons-material";

type Props = {
    response : APIResponse
}

export default function CepDadosGrid({response}: Props) {
    if (Object.values(response).length === 0){
        return (
            <Box>Não encontrado</Box>
        )
    } else {
        return (
            <Box bgcolor={'background.body'} className={styles.gridCepDados} p={2}>
                <ItemCep type={'Logradouro'} cepItem={response.logradouro} icon={<HomeRounded/>}/>
                <ItemCep type={'Bairro'} cepItem={response.bairro} icon={<LocationCityRounded/>}/>
                <ItemCep type={'Localidade'} cepItem={response.localidade} icon={<PinDropRounded/>}/>
                <ItemCep type={'Estado'} cepItem={response.uf} icon={<HomeWorkRounded/>}/>
                <ItemCep type={'DDD'} cepItem={response.ddd} icon={<CellTowerRounded/>}/>
                <ItemCep type={'IBGE'} cepItem={response.ibge} icon={<TimelineRounded/>}/>
                <ItemCep type={'CEP'} cepItem={response.cep} icon={<MarkunreadMailboxRounded/>}/>
            </Box>
        )
    }
}