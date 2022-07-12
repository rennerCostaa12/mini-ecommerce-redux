import './Navigation.css';
import Cart from './Cart';

export default function Navigation() {
    return (
        <div className="content-navigation">
            <ul>
                <a href="#">
                    <li>Home</li>
                </a>

                <a href="#">
                    <li>Produtos</li>
                </a>

                <a href="#">
                    <li>Contato</li>
                </a>
            </ul>

            <Cart />
        </div>
    )
}