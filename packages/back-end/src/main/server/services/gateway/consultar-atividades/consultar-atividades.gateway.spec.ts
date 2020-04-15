import { consultarAtividadesGateway } from './consultar-atividades.gateway';
import { executeQuery } from '../../../setup/mysql';

jest.mock('../../../setup/mysql');

describe('Teste unitário consultarAtividadesGateway', () => {
	beforeEach(() => {
		jest.resetAllMocks();
	});

	it('deve retornar o objeto da consulta corretamente', async () => {
		(executeQuery as jest.Mock).mockResolvedValue([
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
    ]);

		const atividades = await consultarAtividadesGateway();

		const expectedResult = [
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
    ]

		expect(atividades).toStrictEqual(expectedResult);
	});
});
