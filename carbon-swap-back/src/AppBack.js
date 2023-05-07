import React, { useState, useEffect } from "react";

function App() {
  const [credits, setCredits] = useState(false);

  useEffect(() => {
    getCredit();
  }, []);

  function getCredit() {
    fetch("http://localhost:3001")
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        setCredits(data);
      });
  }

  function createCredit() {
    let creditAddress = prompt("Enter credit address");
    let owner = prompt("Enter owner address");
    let price = parseInt(prompt("Enter price"));
    let quantity = parseInt(prompt("Enter quantity"));
    let deadline = parseInt(prompt("Enter deadline"));
    let v = parseInt(prompt("Enter v"));
    let r = prompt("Enter r");
    let s = prompt("Enter s");

    //arrumar dps
    if(creditAddress === "" ||owner === "" || price === 0 ||
      quantity === 0 || deadline === 0 || v === 0 ||
      r === "" || s === ""){
      alert("Sry, try again")
      return 
    }

    fetch("http://localhost:3001/new-sell-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ creditAddress, owner,price,quantity,deadline,v,r,s}),
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        alert(data);
        getCredit();
      });
  }

  function deleteCredit() {
    let id = parseInt(prompt("Enter credit id"));
    fetch(`http://localhost:3001/credits/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        alert(data);
        getCredit();
      });
  }

  function getSellOrder(){
    let sellAddress = prompt("Enter Credit Address")
    fetch(`http://localhost:3001/get-sell-order/${sellAddress}`, {
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        console.log(data)
        alert(data);
        getCredit();
      });
  }

  return (
    <div>
      {credits ? credits : "There is no credit data available"}
      <br />
      <button onClick={createCredit}>Add credit</button>
      <br />
      <button onClick={deleteCredit}>Delete credit</button>
      <br />
      <button onClick={getSellOrder}>get sell order</button>
    </div>
  );
}

export default App;
