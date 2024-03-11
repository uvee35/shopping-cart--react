import './Products.css'
import { AddToCartIcon } from './Icons.jsx'

export default function Products({ products }) {
    return (
        <main className="products">
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <img src={product.thumbnail} 
                        alt={product.Title} />
                        <div>
                            <strong>{product.title}</strong> -$ {product.price}
                        </div>
                        <div>
                            <button>    
                                <AddToCartIcon />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    );
}
                    <li key={product.id}>
                        <img src={product.thumbnail} 
                        alt={product.Title} />
                        <div>
                            <strong>{product.title}</strong> -$ {product.price}
                        </div>
                        <div>
                            <button>    
                                <AddToCartIcon />
                                </button>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    );
}

