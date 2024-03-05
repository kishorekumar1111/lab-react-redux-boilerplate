import {createStore} from 'redux';
import { reducerFunction } from './Reducer';
import { createStore } from 'redux';

export const Store=createStore(reducerFunction)