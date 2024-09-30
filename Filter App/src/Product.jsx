
import React from 'react';

const Product = ({ category, item, categoryButtonClick, filterdata }) => {

    return (
        <>

            <div align="center">

                {
                    category.map((cat) => {
                        const { id, name } = cat;
                        return (
                            <button onClick={() => categoryButtonClick(cat.name)}>{name}</button>
                        )
                    })
                }

            </div>
            <div className="item mt-5">
                <div className='row justify-content-cetner'>

                    {
                        filterdata.length != 0 ? (
                            <>
                                {
                                    filterdata.map((pr) => {

                                        return (
                                            <>
                                                <div className="col-md-3 card p-2 ">
                                                    <img src={pr.image} style={{ objectFit: "contain", height: "200px" }} />
                                                    <div className="card-body">
                                                        <h5 className="card-title">{pr.name}</h5>
                                                        <p className="card-text">{pr.price}</p>
                                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                                    </div>
                                                </div>

                                            </>
                                        )


                                    })
                                }
                            </>
                        )
                            : (
                                <>
                                    {
                                        item.map((pr) => {
                                            return (
                                                <>
                                                    <div className="col-md-3 card p-2" >
                                                        <img src={pr.image} style={{ objectFit: "contain", height: "200px" }} />
                                                        <div className="card-body">
                                                            <h5 className="card-title">{pr.name}</h5>
                                                            <p className="card-text">{pr.price}</p>
                                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                                        </div>
                                                    </div>

                                                </>
                                            )
                                        })
                                    }
                                </>
                            )
                    }

                </div>
            </div>

        </>
    )

}


export default Product;

