const HeroSection = () => {
  return (
  <main className="Hero container">
    <div className="hero-content">
        <h1>YOUR FEET DESERVES THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.</p> 
          <div className="hero-button">
         <button>Shop Now</button>
         <button className="second-btn">Category</button>
         </div>
    </div>
    <div className="hero-image">
        <img src="/images/shoe_image.png" alt=" shoe_image" className="shoe-img"/>
    </div>
    </main>
  );
}

export default HeroSection;