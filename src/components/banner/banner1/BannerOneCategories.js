import React  from 'react'

export default function BannerOneCategories({connector, title, items}) {
    return (
        <>
            <div className="highlighted-categories">
                               <div className="highlight-lists d-flex justify-content-center mt-4">
                    {items.map((item, index) => {
                        return (
                            <div className="category-item" key={index}>
                                <a href={item.path} className="d-block">
                                     {item.title}
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
