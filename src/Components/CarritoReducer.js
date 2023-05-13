import { TYPES } from "./actions";

export const carritoInitialState = {
    products: [],
    cart: []
};

export function carritoReducer(state, action) {
    switch (action.type) {
        case TYPES.READ_STATE: {
            return {
                ...state,
                products: action.payload.products,
                cart: action.payload.cart
            }
        }
        case TYPES.ADD_TO_CART: {
            let newItem = state.products.find(product => product.id === action.payload)

            let itemCarrito = state.cart.find(item => item.id === newItem.id)
            return itemCarrito ? {
                ...state,
                cart: state.cart.map((item) => item.id === itemCarrito.id
                    ? { ...item, cantidad: item.cantidad + 1 }
                    : item),
            } : {
                ...state,
                cart: [...state.cart, { ...newItem, cantidad: 1 }],
            };
        }

        case TYPES.REMOVE_ITEM: {
            let itemAEliminar = state.cart.find((item) => item.id === action.payload);

            return itemAEliminar.cantidad > 1
                ? {
                    ...state,
                    cart: state.cart.map((item) => item.id === action.payload
                        ? {
                            ...item, cantidad: item.cantidad - 1
                        } : item
                    ),
                } : {
                    ...state,
                    cart: state.cart.filter((item) => item.id !== action.payload)
                };
        }


        case TYPES.REMOVE_ALL_ITEMS: {
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload)
            }
        }

        case TYPES.CLEAR_CART: {
            return carritoInitialState
        }

        default:
            return state;
    }
}

