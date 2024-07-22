import { useState, useEffect } from "react";

const MoneyOut = () => {
    const [data, setData] = useState([]);

    const fetchData = () => {
         fetch("http://localhost:5173/money-out.json")        
          .then((response) => response.json())      
          .then((actualData) => {
            setData(actualData);
          })
          .catch((err) => {
            console.log(err.message);
          });
      };
      useEffect(() => {
        fetchData();
      }, []);
    return (
      <div className="show-table">
        
        {data.map((row) => (
            
          <div className="row-wrapper" key={row.id}>
            <div className="cell">{row.actiondate}</div>
            <div className="cell">{row.title}</div>
            <div className="cell">{row.summ}</div>
          </div>
        ))}
      </div>
    );
  };
  export default MoneyOut;