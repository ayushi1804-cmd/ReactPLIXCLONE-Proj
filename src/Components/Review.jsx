import React from 'react';


const Review = () => {
  return (
    <div className="container py-5" style={{ backgroundColor: "#0baa56",marginTop:"40px"}} >
      <h2 className="text-white text-center mb-4" style={{ fontSize: '2.5rem' }}>
        Real People, Real Results
      </h2>
      <div className="row justify-content-center">

        {/* Card 1 */}
        <div className="col-md-4 mb-3" >
          <div className="p-4 text-center rounded" style={{ backgroundColor: '#ffd600' }}>
            <img
              src="https://images.plixlife.com/hosted/Review_2-f2db19589d5a.png?aio=w-768"
              alt="Review 1"
              className="rounded-circle mb-3"
              style={{ width: '150px', height: '150px', objectFit: 'cover',}}
            />
            <div className="text-danger fw-bold fs-5">“ Go to fitness drink ”</div>
            <p className="fw-semibold mt-2">Plix Apple Cider Vinegar Effervescent    
                Plix Apple Cider Vinegar Effervescent has been a total game-changer for me! 
                I needed something to support my metabolism and keep my energy levels up, and 
                this fizzy drink does exactly that—and more. Managing my diet used to be tricky, 
                but with how refreshing and filling it is, staying on track has never been easier. </p>
                <br>
                  </br>

                  <p>Hardik Pandya</p>

           
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4 mb-3">
          <div className="p-4 text-center rounded" style={{ backgroundColor: '#ccffd4' }}>
            <img
              src="https://images.plixlife.com/hosted/sk_website_image-e934d5789ec0.png?aio=w-768"
              alt="Review 2"
              className="rounded-circle mb-3"
              style={{ width: '150px', height: '150px', objectFit: 'cover' }}
            />
            <div className="text-success fw-bold fs-5">“ New baby hair growth ”</div>
            <p className="fw-semibold mt-2">Plix Hair Gummies With Biotin
                Plix Rosemary Hair Serum really impressed me. 
                After consistent use, I noticed less hair fall and 
                even started spotting baby hairs! It's so lightweight 
                and non-sticky, I actually look forward to using it every day.
                The facewash is gentle on the skin, and the lightweight,
                  non-sticky moisturizer keeps my skin feeling fresh all day   </p>
                <br>
                  </br>

                  <p>Shraddha Kapoor</p>
                
         
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4 mb-3">
          <div className="p-4 text-center rounded" style={{ backgroundColor: '#b3e5fc' }}>
            <img
              src="https://images.plixlife.com/hosted/sk_Influ._image-440f2a44a3d5.png?aio=w-768"
              alt="Review 3"
              className="rounded-circle mb-3"
              style={{ width: '150px', height: '150px', objectFit: 'cover' }}
            />
            <div className="text-primary fw-bold fs-5">“ Gave Visible Results ”</div>
            < p className="fw-semibold mt-2">Plix Glutathione Skin Glow 
                I struggled with pigmentation around my mouth and forehead, 
                but the Plix Pineapple Depigmentation Regime truly transformed
                 my skin. The serum absorbs quickly and delivered visible results. 
                 The facewash is gentle on the skin, and the lightweight,
                  non-sticky moisturizer keeps my skin feeling fresh all day.</p>
                  <br>
                  </br>

                  <p>Tejasswi Prakash</p>
            
          </div>
        </div>

      </div>
      </div>
   
  );
};

export default Review;
