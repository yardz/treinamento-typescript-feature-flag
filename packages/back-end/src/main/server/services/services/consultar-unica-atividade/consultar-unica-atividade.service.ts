import {consultarUnicaAtividadeGateway} from '../../gateway/consultar-unica-atividade/consultar-unica-atividade.gateway'
import {IconsultarUnicaAtividadeGatewayOutput} from '../../gateway/consultar-unica-atividade/consultar-unica-atividade.gateway.types'
import {IconsultarAtividadeUnicaServiceInput, IconsultarAtividadeUnicaServiceOutput} from './consultar-unica-atividade.service.types'

const maptoModel = (gatewayOutput: IconsultarUnicaAtividadeGatewayOutput) : IconsultarAtividadeUnicaServiceOutput =>
 gatewayOutput && ({
     title: gatewayOutput.title,
     done: !!gatewayOutput.done
 })

export const consultarUnicaAtividadeService = ({id}:IconsultarAtividadeUnicaServiceInput): Promise<IconsultarAtividadeUnicaServiceOutput> =>
 consultarUnicaAtividadeGateway({id}).then(maptoModel);
