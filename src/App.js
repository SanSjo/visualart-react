import React from 'react';
import data from './components/advdata.json'
import img from './assets/blabar.png'
import splash from './assets/splash.svg'
import './style/style.css';



const App = () => {

  const title = true

  const oldData = [data]
  // const MenuIcon = (props) =>(
  //   <svg width="100%" fill='red' viewBox="0 0 588 497" version="1.1" xmlns="http://www.w3.org/2000/svg" />
  //   )
    
  oldData.forEach(record => {
  if(record.layout === "veckans_pris") {
    let newLayout;
    newLayout = record.layout = "veckans_kortpris"
    if(newLayout) {
      record.layout = 'Veckans kortpris!'
    } 
  }
  console.log(data)
});

  console.log(oldData)


  return (
    <section>
      <header className="header">
        <div className="titleContainer">
          <h1 id="maner" className={title ? 'titlePink' : 'title'}>
            {data.layout}
          </h1>
        </div>
      </header>
      <main>
        <div className="berryContainer">
          <img className="blåbärImg" src={img} alt="blåbär" />
        </div>
        <div className="animated fadeInLeft">
        <div className="splashContainer">
          <img className="splashImg g"src={splash} alt="splash"></img>
            <div className="priceContainer">
              <p className="price" >{data.promotion_unit} </p>
                <div className="subPriceContainer ">
                  <p className="subPrice">{data.promotion_sub_unit}</p>
                  <p className="measure">/{data.article_unit_of_measurement}</p>
                </div>
            </div>
          </div>
        </div>
        <div className="adTitleContainer">
            <p className="adTitle">{data.ad_title}</p>
            <p className="brandName">{data.article_brand_name} {data.article_origin_country} {data.article_package_info} </p>
        </div>
      </main>
      </section>
  );
}

export default App;
