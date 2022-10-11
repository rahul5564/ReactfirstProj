import React from "react";
import WithBorders from "./withBorders";
import "./style.css"


function Counter (){
    return ( 
    
        <div class="container">
          <div class="row">
          
            <div class="col-lg-4">
              <div class="card mb-5 mb-lg-0">
                <div class="card-body"> 
                  <h5 class="card-title cd">Free</h5>
                  <h6 class="card-price text-center">$0<span class="period">/month</span></h6>
                
                  <ul class="fa-ul">
                    <li><span class="fa-li"><i class="fas fa-check"></i></span>Single User</li>
                    <li><span class="fa-li"><i class="fas fa-check"></i></span>5GB Storage</li>
                    <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
                    <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
                    <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Unlimited
                      Private Projects</li>
                    <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Dedicated
                      Phone Support</li>
                    <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Free Subdomain
                    </li>
                    <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status
                      Reports</li>
                  </ul>
                  
                  <div class="pbtn">
                    <a href="#" class="btn">Button</a>
                  </div>


                {/* </div> */}
            </div>
             </div>
         </div>
         </div>
         </div>
            
    )
}


export default WithBorders(Counter);

