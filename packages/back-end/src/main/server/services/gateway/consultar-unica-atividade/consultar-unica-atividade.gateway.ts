import {IconsultarUnicaAtividadeGatewayInput, IconsultarUnicaAtividadeGatewayOutput} from './consultar-unica-atividade.gateway.types';
import { executeQuery } from '../../../setup/mysql';

const querry = 'SELECT TITLE as title, DONE as done from ATIVIDADES WHERE ID = ?';

const extrairRegistro = ([atividade]: IconsultarUnicaAtividadeGatewayOutput[]) => atividade;

export const consultarUnicaAtividadeGateway = ({id}:IconsultarUnicaAtividadeGatewayInput) : Promise<IconsultarUnicaAtividadeGatewayOutput>=> 
executeQuery<IconsultarUnicaAtividadeGatewayOutput>(querry,[id])
    .then(extrairRegistro);
