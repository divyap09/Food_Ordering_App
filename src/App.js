import cafelogo from './cafeheader.jpg';
import React from 'react';
import {useState, useReducer} from "react";
import { Button, View, Text } from 'react-native';
import './App.css';
//G:\Javascript\React Projects\food-order-app
let soup="Soup";
let cake="Cup cakes & Pastries";
let iceCream= "Ice creams";
let shakes = "Milkshakes & Thickshakes";
const dishes= [soup,
              cake,
              iceCream,
              shakes
            ];

const dishObjects = dishes.map((dish,i) => ({
                id: i,
                title: dish
            }));

function MainLogo(props){
  return (<section className="App-header-title"><h1>{props.name}'s Cafe</h1></section>)
}
          
function Header(){
  return (<header className="App-header">
          <h1>Welcome to our Cafe...</h1>
          <img src={cafelogo} className="App-logo" alt="cafelogo" />
          </header>
        )
}

function MenuItems(props){
  return (<div className='App-listitems'>Our cafe serves wide ranges of
          <ul>{props.dishes.map((dish) =>(
            <li key={dish.id}>{dish.title}</li>
          ))}</ul>
  </div>)
}

function CustomerSatisfaction(props){
  const [emotion,setEmotion]= useState("");
  return (
    <div>
      Customer Satisaction: {emotion}<br/>
      <button onClick = {()=>setEmotion("Happy")}>Happy</button>&nbsp;
      <button onClick = {()=>setEmotion("Sad")}>Sad</button>&nbsp;
      <button onClick = {()=>setEmotion("Neutral")}>Neutral</button>
    </div>
  )
}

function OrderItems(){
  const [checked,setChecked]= useReducer(
    (checked)=> !checked,
    false
  );
  return(
    <div>
      Want to order?
      <input type="checkbox" value ={checked} onChange = {setChecked} />
      <label>{checked ? "Yes": "No"}</label>
    </div>
  )
}

function NavigateToGetOrder(){
  return(
    <Button title='Order something' onClick={() =>{window.location.href='Order.html'}} />
  )
}

function Footer(){
  return (<footer className='App-footer'>CopyRights to Joe</footer>)
}

function App() {
  return (
    <div className="App">
      <MainLogo name="Joe"/>
      <Header />
      <MenuItems dishes={dishObjects}/>
      <OrderItems />
      <CustomerSatisfaction />
      <NavigateToGetOrder />
      <Footer />
    </div>
  );
}
export default App;
