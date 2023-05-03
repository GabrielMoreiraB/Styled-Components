import React from "react";
import {Box, Botao} from "../../Components/UI";
import { extratoLista } from "../../info";
import Items from "../Items";


const Extrato = () => {
    return(
        <Box>
        
            {
                extratoLista.updates.map(({id, type, from, value, date})=> {
                    return (
                        <Items key={id}  from={from} type={type} value={value} date={date} />
                    )
                })
            }
            <Botao>Ver Mais</Botao>

        </Box>
    )
}

export default Extrato