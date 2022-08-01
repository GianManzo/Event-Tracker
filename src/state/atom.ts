import { eventosAsync } from './seletores/index';
import { IEvento } from './../interfaces/IEvento';
import { atom } from "recoil";
import { IFiltroEventos } from '../interfaces/IFiltroEventos';


export const listaDeEventosState = atom<IEvento[]>({
  key: 'listaDeEventosState',
  default: eventosAsync
})

export const filtroDeEventos = atom<IFiltroEventos>({
  key: 'filtroDeEventos',
  default: {}
})

