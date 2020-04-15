import { IConsultarAtividadesServiceOutput } from '../../services/consultar-atividades/consultar-atividades.service.types';
import { IConsultarAtividadesRouteOutput } from './consultar-atividade.route.types';
import { IRoute } from 'src/main/server/setup/express-utils';
import { Request, Response } from 'express';
import { consultarAtividadesService } from '../../services/consultar-atividades/consultar-atividades.service';

const mapToOutput = (serviceOutput: IConsultarAtividadesServiceOutput[]): IConsultarAtividadesRouteOutput =>
  ({ atividades: serviceOutput });

export const consultarAtividadesRoute: IRoute = {
  path: '/atividades',
  method: 'get',
  handler: [
    (request: Request, response: Response) => {
      consultarAtividadesService()
        .then(atividades => 
          atividades 
            ? response.status(200).send(mapToOutput(atividades)) 
            : response.status(404).send({ mensagem: 'Atividades não encontradas' })
        )
        .catch(error => response.status(500).send({ mensagem: error }));
    }
  ]
}