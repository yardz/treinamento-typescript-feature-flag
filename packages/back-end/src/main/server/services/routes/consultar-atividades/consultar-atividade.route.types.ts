export interface IConsultarAtividadesRouteOutput {
  atividades: Atividades[]
}

export type Atividades = {
  id: number;
  title: string;
  done: boolean;
}