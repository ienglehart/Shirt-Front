import React, { Component } from 'react'
import {ProductConsumer} from '../Context'
import {Link} from 'react-router-dom'
import {BigButtonContainer} from '../components/Buttons';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {
          (value)=>{
            const {id, img, info, price, title, inCart} = 
            value.detailProduct;

            return (
              <div className="row m-4 details-pg">
                  <div className="col-10 mx-auto text-center text-slanter text-blue my-5 text-capitalize">
                    <h1>
                      {title}
                    </h1>
                  </div>
                  <div className="row">
                    <div className="col-10 m-auto col-md-6 my-3 text-capitalize">
                        <img src={img} className="img-fluid rounded" alt="product"/>
                    </div>
                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                      <h2>{title}</h2>
                      <h4 className="text-blue">
                        <strong>
                          price: <span>$</span> {price}
                        </strong>
                      </h4>
                      <p className="text-capitalize font-weight-bold mt-3 mb-0">
                          Product Info:
                      </p>
                      <p className="text-muted lead">
                        {info}
                      </p>
                      <div>
                        <Link to="/Shirt-Front/">
                          <BigButtonContainer>
                            back to products
                          </BigButtonContainer>
                        </Link>
                          <BigButtonContainer 
                            disabled={inCart?true:false}
                            onClick={()=>{
                              value.addToCart(id);
                              value.openModal(id);
                            }}
                          >
                            {inCart ? "inCart":"add to cart"}
                          </BigButtonContainer>
                      </div>
                    </div>
                  </div>
              </div>
            );

          }
        }
      </ProductConsumer>
    )
  }
}