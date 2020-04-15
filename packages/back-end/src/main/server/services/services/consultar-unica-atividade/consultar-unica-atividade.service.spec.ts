import { consultarUnicaAtividadeGateway } from '../../gateway/consultar-unica-atividade/consultar-unica-atividade.gateway';
import { consultarUnicaAtividadeService } from './consultar-unica-atividade.service';

jest.mock('../../gateway/consultar-unica-atividade/consultar-unica-atividade.gateway');

describe('Testes Unitarios do Consultar Unica Atividade Service', () => { 
    beforeEach(()=>
    jest.resetAllMocks()
    );

    it('Deve retornar os dados manipulados e a propriedade done como boolean', async() => {
        const retornoGateway = {
            title : 'atividade 1',
            done : 0
        };
        (consultarUnicaAtividadeGateway as jest.Mock).mockResolvedValue(retornoGateway);

        const respostaService = await consultarUnicaAtividadeService({id:1});

        const resultadoEsperado = {
            title: 'atividade 1',
            done : false
        }

        expect(respostaService).toEqual(resultadoEsperado);
    })
})