import React, { useEffect, useState } from 'react'
import "./pagination.css"
const Pagination = () => {
    const [products, setProducts] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const postPerPage = 4;

    const lastPageIndex = postPerPage * currentPage;
    const firstPageIndex = lastPageIndex - postPerPage;

    const currentProduct = products.slice(firstPageIndex, lastPageIndex);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            let data = await fetch(`https://fakestoreapi.com/products`);
            let res = await data.json();
            setProducts(res);
        } catch (error) {
            console.log("Error : ", error);
        }
    }

    const pageHandler = (num) => {
        setCurrentPage(num)
    }
    return (
        <div className='container'>
            <div className='row mt-4 mb-4'>
                <h2 className='text-primary text-center'>Pagination Example</h2>
                {
                    currentProduct.map((product) => (
                        <div className='col-sm-6 col-lg-4 col-xl-3 mt-4 card-col' key={product.id}>
                            <div className="card" key={product.id}>
                                <img src={product.image} className="card-img-top" alt={product.id} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <button className="btn btn-success">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            {
                [1, 2, 3, 4, 5].map((num) => (
                    <button className='btn btn-primary ms-2' onClick={() => pageHandler(num)} key={num}>{num}</button>
                ))
            }
        </div>
    )
}

export default Pagination
