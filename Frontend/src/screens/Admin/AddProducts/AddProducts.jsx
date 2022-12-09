import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import "./AddProducts.css";
const AddProducts = ({ setopendashboard }) => {
  const [quantity, setquantity] = useState(0);

  const increaseQty = () => {
    if (quantity > 100) return;
    setquantity(quantity + 1);
  };

  const decreaseQty = () => {
    if (quantity <= 0) return;
    setquantity(quantity - 1);
  };

  useEffect(() => {
    setopendashboard(true);
  }, []);
  return (
    <>
      <div className="dashboarddiv">
        <div className="mainaddprodiv">
          <div className="maincontentdiv">
            <div className="maincontentdivinnear">
              <div className="leftrightmaindiv">
                <div className="leftdiv">1</div>
                <div className="rightdiv">
                  <div>
                    <div className="inputdiv">
                      <p>Product Name</p>
                      <input type="text" placeholder="enter product name" />
                    </div>
                    <div className="inputdiv">
                      <p>Price</p>
                      <input type="text" placeholder="enter product price" />
                    </div>
                    <div className="inputdiv">
                      <p>Size Chart</p>
                      <input
                        type="text"
                        placeholder="enter product size chart"
                      />
                    </div>
                    <div className="inputdiv">
                      <p>Size</p>
                      <input type="text" placeholder="enter product size" />
                    </div>
                    <div className="inputdiv">
                      <p>Colour</p>
                      <input type="text" placeholder="enter product color" />
                      <input
                        accept="image/*"
                        id="icon-button-file"
                        type="file"
                        capture="environment"
                      />
                    </div>
                    <div className="Quantitydiv">
                      <p>Quantity</p>
                      <div className="Quantitydivbtn">
                        <button onClick={decreaseQty}>-</button>
                        <input
                          type="text"
                          name="quantity"
                          value={quantity}
                          onChange={(e) => setquantity(e.target.value)}
                        />
                        <button onClick={increaseQty}>+</button>
                      </div>
                    </div>
                    <div className="inputdivDes">
                      <p>Descriptions</p>
                      <input type="text" placeholder="enter product color" />
                    </div>
                    <div className="inputdivTags">
                      <p>Tags</p>
                      <div className="taginputdiv">
                        <input type="text" placeholder="enter product color" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="leftrightmaindiv">
                <div className="leftbottomdiv">
                  <p>Upload product bar code</p>
                  <div className="choosebtnmaindin">
                    <div className="choosefilediv">
                      <input
                        className="over-lay"
                        type="file"
                        placeholder="Choose file"
                      />
                      <button className="choosebtn">Choose file</button>
                    </div>
                    <button className="nochoose">No Choose file</button>
                  </div>
                </div>
                <div className="rightbottomdiv">
                  <button className="savebtn">Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProducts;
