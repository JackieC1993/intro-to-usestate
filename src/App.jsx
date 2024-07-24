import {useState} from "react"
import  "./App.css"



const App = () => {
  //when initializing a state variable it should always be at the top of your component. You do not want it to be inside of some codeblock.

  const [cardCount, setCardCount] = useState(0)
  let itemsInCart = 0
  // here we are initialzing state with a value of 0.
  // state returns an array that we are destructing
  // the first variable is the initial value of state.
  // the second variable is the function we will use to update state

  const handleClick = () =>{// event handler
    // itemsInCart++ // with a regular variable , react does not know to re-render the component
    // console.log (itemsInCart)
    // cardCount++
    setCardCount(cardCount + 1); // we cannot update state using the state variable we MUST use the set function
  }

  const handleRemoveFromCart = () => {
    if (cardCount > 0){
      setCardCount(cardCount - 1);
    }
  }
  return( 
    <div className="app">
    <div>{cardCount} items in the cart</div>
    <button onClick={handleClick}>Add to Cart</button>
    <button onClick={handleRemoveFromCart}>Remove From Cart</button>
  </div>
  );
};

export default App;
