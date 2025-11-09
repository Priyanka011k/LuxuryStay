import React from "react";


const rdata = [
  {
    id: "res1",
    title: "Food Circles",
    image: "http://res.cloudinary.com/simpleview/image/upload/v1438123960/clients/grandrapids/file_bcf11a47-7451-464f-8c4d-c9d3e85e9146.png",
    minCharge: "5.00 LE",
    rating: "2",
    type: ["Chicken", "Meat"]
  },
  {
    id: "res2",
    title: "KFC",
    image: "http://vignette1.wikia.nocookie.net/ridiculoushist/images/b/b8/KFC_logo.png",
    minCharge: "10.00 LE",
    rating: "8",
    type: ["Fast Food", "Chicken", "Sandwiches"]
  },
  {
    id: "res3",
    title: "BurgerKing",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvzFp0RzXpk6UePNc1GPGIYS-Zp9KQjSRjyQ&s",
    minCharge: "7.00 LE",
    rating: "8",
    type: ["Burgers", "Fast Food"]
  }
];

function RestaurantList() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Restaurants</h2>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {rdata.map((res) => (
          <div key={res.id} style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "1rem", width: "250px" }}>
            <img src={res.image} alt={res.title} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
            <h4>{res.title}</h4>
            <p>Min Charge: {res.minCharge}</p>
            <p>Rating: {res.rating}</p>
            <p>Type: {res.type.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RestaurantList;
