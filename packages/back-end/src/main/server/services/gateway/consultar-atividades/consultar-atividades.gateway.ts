import { executeQuery } from '../../../setup/mysql';
import { IConsultarAtividadesGatewayOutput } from './consultar-atividades.gateway.types';

const query = `SELECT ID as id, TITLE as title, DONE as done FROM ATIVIDADES`;

export const consultarAtividadesGateway = (): Promise<IConsultarAtividadesGatewayOutput[]> =>
  executeQuery<IConsultarAtividadesGatewayOutput>(query, []);
