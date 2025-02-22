import React, { useEffect, useState } from "react";
import axios from "axios";

const Showdata = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://inventory-kanc.onrender.com/");
        setData(res.data.data); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log("Updated data:", data);
  }, [data]);

  return (
    <div>
      {data.length > 0 ? (
        data.map((el, index) => (
          <div key={index} className="item">
            <div>Name: {el.name}</div>
            <div>Description: {el.description}</div>
            <div>Price: {el.price}</div>
            <div>Quantity: {el.quantity}</div>
          </div>
        ))
      ) : (
        <p>Loading...</p> 
      )}
    </div>
  );
};

export default Showdata;
