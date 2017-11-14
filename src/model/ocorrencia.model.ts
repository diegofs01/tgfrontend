import { TipoOcorrencia } from './tipoOcorrencia.model';

export interface Ocorrencia {
    placaVeiculo: string,
    data: Date,
    hora: string,
    descricao: string,
    tipoOcorrencia: TipoOcorrencia
};