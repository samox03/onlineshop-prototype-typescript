import React from 'react';
import { useState } from 'react';

import './App.css';
import { AppProps, Product } from './interfaces';


const defaultFormData = {
  title: "",
  body: '',
}

type CheckoutStep = "Details" | "Shipping" | "Payment";

function App({ headerText, extraText = "default text" }: AppProps) {
  // const [product, setProduct] = useState<Product | null>(null)
  const [formData, setFormData] = useState(defaultFormData)
  const { title, body } = formData
  const [checkoutStep, setCheckoutStep] = useState<CheckoutStep>("Details")

  // const fetchProduct = () => setProduct({
  //     name: "palmtree",
  //     weight: 200,
  //     country: "bulgaria",
  //     inStock: false
  //   }
  // )


  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    setFormData(defaultFormData)
  }


  return (
    <div className="App">
      <div>
        This gonna be a fancy online shop
        <h1>{headerText}</h1>
        <p> {extraText}</p>
      </div>
      <div>
        <h1>Products</h1>
        <div>
          <div>
            Grid
            {/* map through API products */}
          </div>
        </div>
      </div>
      {/* <button onClick={fetchProduct}> Fetch product on click</button> */}
      <h1>Comment on Product</h1>
      <p>Create a post</p>
      <form onSubmit={onSubmit}>
        <label htmlFor="title">Title</label>
        <br />
        <input type="text" id="title" value={title} onChange={onChange} />
        <br />
        <br />
        <label htmlFor="body">Body</label>

        <br />
        <input type="text" id="body" value={body} onChange={onChange} />
        <br />
        <button type="submit">Upload Post</button>
      </form>

      <div>
        <h3>Rate the Product</h3>
        Stars
      </div>

      <div>
        <h2>Your order:</h2>
        {checkoutStep === "Details" &&
          (
            <>
              <h1>Details</h1>
              <button type="button" onClick={() => setCheckoutStep("Shipping")}>
                Next
              </button>
            </>
          )
        }

        {checkoutStep === "Shipping" && (
          <>
            <h1>Shipping</h1>
            <button type="button" onClick={() => setCheckoutStep("Payment")}>
              Next
            </button>
          </>
        )}

        {checkoutStep === "Payment" && (
          <>
            <h1>Payment</h1>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
