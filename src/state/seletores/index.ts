import { IEvento } from './../../interfaces/IEvento';
import { filtroDeEventos, listaDeEventosState } from './../atom';
import { selector } from "recoil";

export const eventosFiltradosState = selector({
  key: 'eventosFiltradosState',
  get:({get}) => {
    const filtro = get(filtroDeEventos)
    const todosEventos = get(listaDeEventosState)
    const eventos = todosEventos.filter(evento => {
      if (!filtro.data) {
        return true
      }
      const mesmoDia = filtro.data.toISOString().slice(0, 10) === evento.inicio.toISOString().slice(0, 10)
      return mesmoDia
    })
    return eventos
  }
})

export const eventosAsync = selector({
  key: 'eventosAsync',
  get: async() => {
    const response = await fetch('http://localhost:8080/eventos')
    const data: IEvento[] = await response.json()
    return data.map(item => ({
      ...item,
      inicio: new Date(item.inicio),
      fim: new Date(item.fim)
    }))
  }
})