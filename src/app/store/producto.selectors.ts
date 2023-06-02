import { createFeatureSelector, createSelector } from '@ngrx/store'
import { ProductoState } from './producto.reducers'
import { Producto } from './producto.model'

export const selectProductoState =
  createFeatureSelector<ProductoState>('producto')

export const selectProductos = createSelector(
  selectProductoState,
  (state: ProductoState) => state.productos
)

export const selectProductoById = (productoId: number) =>
  createSelector(selectProductos, (productos: Producto[]) =>
    productos.find((producto) => producto.id === productoId)
  )

export const selectDeletedProducto = createSelector(
  selectProductoState,
  (state: ProductoState) => state.deletedProducto
)

export const selectUpdatedProducto = createSelector(
  selectProductoState,
  (state: ProductoState) => state.updatedProducto
)
