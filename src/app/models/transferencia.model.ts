export interface Transferencia {
  id?: number |string;/* ? indica que o atributo é opcional */
  valor: number;
  destino: number | string;
  data?: string;
}
