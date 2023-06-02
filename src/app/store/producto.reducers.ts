import { createReducer, on } from '@ngrx/store'
import { Producto } from './producto.model'
import {
  loadProductosSuccess,
  findProductoByIdSuccess,
  createProductoSuccess,
  updateProductoSuccess,
  deleteProductoSuccess,
} from './producto.actions'

export interface ProductoState {
  productos: Producto[]
  loading: boolean
  error: string | null
}

export const initialState: ProductoState = {
  productos: [],
  loading: false,
  error: null,
}

export const productoReducer = createReducer(
  initialState,
  on(loadProductosSuccess, (state, { productos }) => ({ ...state, productos })),
  on(findProductoByIdSuccess, (state, { producto }) => ({
    ...state,
    productos: state.productos.map((u) =>
      u.id === producto.id ? producto : u
    ),
  })),
  on(createProductoSuccess, (state, { producto }) => ({
    ...state,
    productos: [...state.productos, producto],
  })),
  on(updateProductoSuccess, (state, { producto }) => ({
    ...state,
    productos: state.productos.map((u) =>
      u.id === producto.id ? producto : u
    ),
  })),
  on(deleteProductoSuccess, (state, { id }) => ({
    ...state,
    productos: state.productos.filter((u) => u.id !== id),
  }))
)
