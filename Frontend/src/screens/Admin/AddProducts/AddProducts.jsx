import React, { useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import "./AddProducts.css";
const AddProducts = ({ setopendashboard }) => {
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
                    </div>
                    <div className="Quantitydiv">
                      <p>Quantity</p>
                      <div className="Quantitydivbtn">
                        <button>-</button>
                        <input type="text" />
                        <button>+</button>
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
                  <div>
                    <button className="choosebtn">Choose file</button>
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
