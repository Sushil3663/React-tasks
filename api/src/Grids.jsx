import React from "react"
const Grids = () => {
    return (
        <div className="container text-center mt-5">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <img src="https://picsum.photos/201/300" className="card-img-top" alt="..." height="250px" />
                        <div className="card-body">
                            <h5 className="card-title">Explore</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div class="card">
                        <img src="https://picsum.photos/200/301" className="card-img-top" alt="..." height="250px"/>
                            <div className="card-body">
                                <h5 className="card-title">Image</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                    </div>
                </div>
                <div className="col">
                <div class="card">
                        <img src="https://picsum.photos/200/300" className="card-img-top" alt="..." height="250px"/>
                            <div className="card-body">
                                <h5 className="card-title">View</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Grids;