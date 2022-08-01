import { obterId } from './../../util';
import { IEvento } from './../../interfaces/IEvento';
import { listaDeEventosState } from './../atom';
import { useSetRecoilState } from 'recoil';

const useAdicionarEvento = () => {

  const setListaDeEvento = useSetRecoilState<IEvento[]>(listaDeEventosState)
  return (evento: IEvento) => {
    const hoje = new Date()
    if(evento.inicio < hoje){
      throw new Error('Eventos não podem ser cadastrados com datas menor do que a data atual!')
    }
    evento.id = obterId()
    return setListaDeEvento(listaAntiga => [...listaAntiga, evento])
  }
}

export default useAdicionarEvento