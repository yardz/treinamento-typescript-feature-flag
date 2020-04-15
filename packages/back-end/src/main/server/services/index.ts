import { consultarAtividadesRoute } from './routes/consultar-atividades/consultar-atividade.route';

import { consultarUnicaAtividadeRoute } from './routes/consultar-unica-atividade/consultar-unica-atividade.route';

import { IRoute } from '../setup';

export const serviceRoutes: IRoute[] = [consultarAtividadesRoute, consultarUnicaAtividadeRoute];