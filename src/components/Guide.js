import React from 'react';

let guide =  [{
      "type": "city",
      "title": "Paris on $10 a Day",
      "price": 18.99
    }, {
      "type": "city",
      "title": "Venice: Canals and Stuff",
      "price": 14.50
    }, {
      "type": "city",
      "title": "Visiting Hoboken: Why?",
      "price": 1.25
    }, {
      "type": "country",
      "title": "Touring Brazil's Empty Olympic Stadiums",
      "price": 13.50
    }, {
      "type": "country",
      "title": "'Murica: Only Commies Travel Abroad",
      "price": 20.00
    }, {
      "type": "country",
      "title": "Australia: Every Animal Here Can Kill You",
      "price": 18.00
    }, {
      "type": "region",
      "title": "Backpacking Europe on Two Showers a Week",
      "price": 12.48
    }, {
      "type": "region",
      "title": "Rainforests of Cental America",
      "price": 15.00
    }, {
      "type": "region",
      "title": "The Evil Genius Guide to Taking over the Tri City Area",
      "price": 13.49
    }]


function Guides(props) {
    let guideItems = guide.map((info) =>
    <div key={info.price} className="card container mt-1 mb-1" style={{width: 18 + 'rem'}}>
        <div key={info.price} className="card-body">
            <h2 key={info.title} className="card-title">" {info.title} "</h2>
            <h3 key={info.type} className="card-text">Type: {info.type}</h3>
            <h3 key={info.price} className="card-text">Price: {info.price}</h3>
        </div>
    </div>
    );
    return (
    <div className="Image-div">
        <div className="container d-flex flex-column text-center justify-conent-center">
            <h2>Guides</h2>
            <div className="container d-flex flex-wrap justify-conent-center">{guideItems}</div>
        </div>
    </div>
    );     
  }

export default Guides;