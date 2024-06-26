import React, { useContext } from 'react';
import CartContext from '../../components/Context/CartContext';
import './CartDropdown.scss';

const CartDropdown = () => {
    const { cartItems, removeItem, clear } = useContext(CartContext);

    return (
        <div className="cart-dropdown">
            {cartItems.length === 0 ? (
                <div className="empty-message">Seu carrinho está vazio</div>
            ) : (
                <>
                    <div className="cart-items">
                        {cartItems.map(item => (
                            <div key={item.id} className="cart-item">
                                <img src={item.pictureUrl} alt={item.title} /> {/* Exibe a imagem */}
                                <div className="item-details">
                                    <span className="name">{item.title}</span>
                                    <span className="price">
                                        {item.quantity} x ${item.price.toFixed(2)} 
                                    </span>
                                </div>
                                <button className="remove-button" onClick={() => removeItem(item.id)}>
                                    Remover
                                </button>
                            </div>
                        ))}
                    </div>
                    <button className="clear-button" onClick={clear}>Limpar Carrinho</button>
                </>
            )}
        </div>
    );
};

export default CartDropdown;