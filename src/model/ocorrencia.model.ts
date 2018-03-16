import { TipoOcorrencia } from './tipoOcorrencia.model';

export interface Ocorrencia {
    numero: number,
    placaVeiculo: string,
    data: Date,
    hora: string,
    descricao: string,
    tipoOcorrencia: TipoOcorrencia
};