import { createAction, props } from '@ngrx/store'
import { Producto } from './producto.model'

// Acciones para cargar todos los usuarios
export const loadProductos = createAction('[Producto] Load Productos')
export const loadProductosSuccess = createAction(
  '[Producto] Load Productos Success',
  props<{ productos: Producto[] }>()
)
export const loadProductosFailure = createAction(
  '[Producto] Load Productos Failure',
  props<{ error: string }>()
)

// Acciones para buscar un usuario por su ID
export const findProductoById = createAction(
  '[Producto] Find Producto By ID',
  props<{ id: string }>()
)
export const findProductoByIdSuccess = createAction(
  '[Producto] Find Producto By ID Success',
  props<{ producto: Producto }>()
)
export const findProductoByIdFailure = createAction(
  '[Producto] Find Producto By ID Failure',
  props<{ error: string }>()
)

// Acciones para crear un nuevo usuario
export const createProducto = createAction(
  '[Producto] Create Producto',
  props<{ producto: Producto }>()
)
export const createProductoSuccess = createAction(
  '[Producto] Create Producto Success',
  props<{ producto: Producto }>()
)
export const createProductoFailure = createAction(
  '[Producto] Create Producto Failure',
  props<{ error: string }>()
)

// Acciones para actualizar un usuario existente
export const updateProducto = createAction(
  '[Producto] Update Producto',
  props<{ producto: Producto }>()
)
export const updateProductoSuccess = createAction(
  '[Producto] Update Producto Success',
  props<{ producto: Producto }>()
)
export const updateProductoFailure = createAction(
  '[Producto] Update Producto Failure',
  props<{ error: string }>()
)

// Acciones para eliminar un usuario
export const deleteProducto = createAction(
  '[Producto] Delete Producto',
  props<{ id: string }>()
)
export const deleteProductoSuccess = createAction(
  '[Producto] Delete Producto Success',
  props<{ id: string }>()
)
export const deleteProductoFailure = createAction(
  '[Producto] Delete Producto Failure',
  props<{ error: string }>()
)
