import React, { useState, useEffect } from "react";

function App() {
  const [credits, setCredits] = useState("");
  const [tokens, setTokens] = useState("");

  //teste front end
  useEffect(() => {
    getCredit();
    getTokens();
  }, []);

  function getCredit() {
    fetch("http://localhost:3001")
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        //setCredits(JSON.parse(data));
        setCredits(data);
      });
  }

  function createCredit() {
    //input case test
    let creditAddress = prompt("Enter credit address");
    let owner = prompt("Enter owner address");
    let price = parseInt(prompt("Enter price"));
    let quantity = parseInt(prompt("Enter quantity"));
    let deadline = parseInt(prompt("Enter deadline"));
    let v = parseInt(prompt("Enter v"));
    let r = prompt("Enter r");
    let s = prompt("Enter s");

    //arrumar dps
    if (
      creditAddress === "" ||
      owner === "" ||
      price === 0 ||
      quantity === 0 ||
      deadline === 0 ||
      v === 0 ||
      r === "" ||
      s === ""
    ) {
      alert("Sry, try again");
      return;
    }

    fetch("http://localhost:3001/new-sell-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        creditAddress,
        owner,
        price,
        quantity,
        deadline,
        v,
        r,
        s,
      }),
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        //alert(data);
        getCredit();
      });
  }

  //delete test (fiz pela resenha)
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

  //busca todos os creditsaddress com mesmo valor
  async function getSellOrder() {
    try {
      const sellAddress = prompt("Enter Credit Address");
      const response = await fetch(`http://localhost:3001/get-sell-order/${sellAddress}`, {});
      const data = await response.json();
      console.log(data);
      alert(JSON.stringify(data));
    } catch (error) {
      console.error(error);
    }
  }
  
  //ler dados do db da tabela tokens
  async function getTokens() {
    try {
      const response = await fetch("http://localhost:3001/get-tokens");
      const data = await response.json();
      //setTokens(data);
      setTokens(JSON.stringify(data));
    } catch (error) {
      console.error(error);
    }
  }
  
  //post simples envolvendo token (sem db)
  async function mintTokens() {
    try {
      //devo fazer o validador quando integrado ao front
      const tokenAddress = prompt("Enter token address");
      const address = prompt("Enter address");
      const quantity = prompt("Enter quantity");

      const response = await fetch("http://localhost:3001/mint-tokens", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          address,
          tokenAddress,
          quantity,
        }),
      });
      const data = await response.text();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  
  //meramente ilustrativo
  return (
    <div>
      {credits ? credits : "There is no credit data available"}
      <br />
      <button onClick={createCredit}>Add credit</button>
      <br />
      <button onClick={deleteCredit}>Delete credit</button>
      <br />
      <button onClick={getSellOrder}>get sell order</button>
      <br />
      {tokens ? tokens : "No tokens ;("}
      {/* <button onClick={getTokens}>see tokens</button> */}
      <button onClick={mintTokens}>send token</button>
    </div>
  );
}

export default App;
