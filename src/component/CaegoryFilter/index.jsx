import React, { useEffect, useState } from 'react'
import './styles.css'

const CategoryFilter = () => {
    const [data, setData] = useState([])
    const BASE_URL = 'https://fakestoreapi.com/products'
    const [selectedCategory, setSelectedCategory] = useState("all");
    const filterData = 
    selectedCategory === "all" ? data : data.filter((item) => item.category === selectedCategory);



    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(BASE_URL)
                const result = await res.json()
                setData(result)
                console.log(result)
            } catch (error) {
                console.log(error, 'Error')
            }
        }

        fetchData()
    }, [])

    return (
        <div className="cf-container">
            <header className="cf-header">
                <h2 className="cf-title">Category Filter</h2>
                <p className="cf-subtitle">Browse products by category. (Design-only: original logic preserved)</p>
                <div className="cf-controls">
                    <label className="cf-select-label" htmlFor="cf-category-select">Category</label>
                    <select id="cf-category-select" className="cf-select" aria-label="Static category select" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                        <option value="all">All</option>
                        <option value="electronics">electronics</option>
                        <option value="jewelery">jewelery</option>
                        <option value="mens-clothing">men's clothing</option>
                        <option value="womens-clothing">women's clothing</option>
                    </select>
                </div>
            </header>

            <section className="cf-grid">
                {filterData.map((item) => (
                    <article key={item.id} className="cf-card">
                        <div className="cf-image-wrap">
                            <img src={item.image} alt={item.title} />
                        </div>
                        <div>
                            <h4 className="cf-category">{item.category}</h4>
                            <h3 className="cf-title">{item.title}</h3>
                        </div>
                        <div className="cf-footer">
                            <span className="cf-price">${item.price?.toFixed(2)}</span>
                            <button className="cf-view">View</button>
                        </div>
                    </article>
                ))}
            </section>
        </div>
    )
}

export default CategoryFilter
