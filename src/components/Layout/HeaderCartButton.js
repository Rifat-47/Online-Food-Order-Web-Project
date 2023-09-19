import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import { useContext, useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"

const HeaderCartButton = props => {
    // const history = useHistory();
    const navigate = useNavigate()
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    // adding CSS class depending on highLightedButton
    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    const loginModalHandler = () => {
        navigate('/login');
    };

    const registerModalHandler = () => {
        navigate('/register');
    };

    // 
    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);
        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);
        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (
        <div className={classes['btn-container']}>
            <button className={btnClasses} onClick={props.onClick}>
                <span className={classes.icon}>
                    <CartIcon />
                </span>
                <span>Your Cart</span>
                <span className={classes.badge}>{numberOfCartItems}</span>
            </button>
            <button className={classes.button} onClick={loginModalHandler}>Login</button>
            <button className={classes.button} onClick={registerModalHandler}>Register</button>
        </div>
    )
};

export default HeaderCartButton;