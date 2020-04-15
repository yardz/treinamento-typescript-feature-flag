import { IRoute } from 'src/main/server/setup/express-utils';
import { Request, Response } from 'express';
import {consultarUnicaAtividadeService} from '../../services/consultar-unica-atividade/consultar-unica-atividade.service';

export const consultarUnicaAtividadeRoute : IRoute = {
    path:'/atividades/:id',
    method: 'get',
    handler:[
        (request: Request, response:Response) =>{
            const id = Number(request.params.id);
            consultarUnicaAtividadeService({id})
            .then(atividade => {
                if(atividade){
                    response.status(200).send(atividade);
                }else{
                    response.status(404).send("requisicao invalida");
                }
            }).catch(error => response.status(500).send("Internal Server Error"));
        }
    ]

}