import {consultarAtividadesService} from './consultar-atividades.service';
import {consultarAtividadesGateway} from '../../gateway/consultar-atividades/consultar-atividades.gateway';

jest.mock('../../gateway/consultar-atividades/consultar-atividades.gateway');

describe('Testes unitários do Service consultar atividades', () => {
    beforeEach(() => {
		jest.resetAllMocks();
    });

    it('deve retornar objeto esperado com a propriedade done sendo boolean', async () => {
      const retornoGateway = [
        {
          title: 'Atividade 1',
          done: 0
          },
          {
            title: 'Atividade 2',
            done: 0
          },
          {
            title: 'Atividade 3',
            done: 1
          }
      ];

      (consultarAtividadesGateway as jest.Mock).mockResolvedValue(retornoGateway)

      const responseService = await consultarAtividadesService();

      const expectResult = [
        {
          title: 'Atividade 1',
          done: false
          },
          {
            title: 'Atividade 2',
            done: false
          },
          {
            title: 'Atividade 3',
            done: true
          }
      ];

      expect(responseService).toEqual(expectResult);
    })
    
})

