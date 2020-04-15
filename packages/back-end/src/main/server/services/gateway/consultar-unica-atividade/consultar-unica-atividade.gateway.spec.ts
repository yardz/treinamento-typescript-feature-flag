import { consultarUnicaAtividadeGateway } from './consultar-unica-atividade.gateway';
import { executeQuery } from '../../../setup/mysql';

jest.mock('../../../setup/mysql');

describe('Teste unitário consultarUnicaAtividadeGateway', () => {
	beforeEach(() => {
		jest.resetAllMocks();
	});

	it('deve retornar os dados da atividade correspondente a consulta', async () => {
		(executeQuery as jest.Mock).mockResolvedValue([
			{
				title: 'Atividade 1',
				done: 0,
			},
		]);
		const id = 1;
		const atividade = await consultarUnicaAtividadeGateway({ id });

		const expectedResult = {
			title: 'Atividade 1',
			done: 0,
		};

		expect(atividade).toEqual(expectedResult);
  });
  
});
