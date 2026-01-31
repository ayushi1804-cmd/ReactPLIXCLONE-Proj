 import React from "react";

const Carousel = () => {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide mb-4" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://images.plixlife.com/hosted/Shop_by_concern__copy_2-fb372ce0ea70.jpg?aio=w-1024" className="d-block w-100" alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src="https://images.plixlife.com/hosted/Skin__Hair_All_1-42cbfa257e90.jpg?aio=w-1024" className="d-block w-100" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src="https://images.plixlife.com/hosted/Hair_Fall__thinning_desktop-3a5bd02cca8d.jpg?aio=w-1024" className="d-block w-100" alt="Slide 3" />
        </div>
        <div className="carousel-item">
          <img src="https://images.plixlife.com/hosted/Product_Desktop_copy_10_1-b052206dbe59.jpg?aio=w-1024" className="d-block w-100" alt="Slide 3" />
        </div>
        <div className="carousel-item">
          <img src="https://images.plixlife.com/hosted/Sunscreen-0cf04708cb8f.png?aio=w-1024" className="d-block w-100" alt="Slide 3" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
