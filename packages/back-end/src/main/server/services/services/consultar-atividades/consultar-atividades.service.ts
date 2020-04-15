import { consultarAtividadesGateway } from '../../gateway/consultar-atividades/consultar-atividades.gateway';
import { IConsultarAtividadesGatewayOutput } from '../../gateway/consultar-atividades/consultar-atividades.gateway.types';
import { IConsultarAtividadesServiceOutput } from './consultar-atividades.service.types';

const maptoModel = (gatewayOutput: IConsultarAtividadesGatewayOutput[]): IConsultarAtividadesServiceOutput[] =>
  gatewayOutput.map(atividade => {
    const result = {
      id: atividade.id,
      title: atividade.title,
      done: !!atividade.done
    }
    return result
  });

export const consultarAtividadesService = async (): Promise<IConsultarAtividadesServiceOutput[]> =>
  consultarAtividadesGateway().then(maptoModel);
