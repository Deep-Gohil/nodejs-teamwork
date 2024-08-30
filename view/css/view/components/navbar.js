const navbar = () =>{
    return ` <nav class="navbar">
      <div class="navdiv">
        <div class="logo">    
          <a href="#"
            ><img src="../view/css/images/logo/Store-logo.png" alt=""
          /></a>
        </div>
        <ul>
          <li class="m-6 _h"><a href="#">HOME</a></li>
          <li class="m-6 _h"><a href="#">SERVICES</a></li>
          <li class="m-6 _h"><a href="#">PRODUCTS</a></li>
          <li class="m-6 _h"><a href="#">WATCHES</a></li>
          <li class="m-6 _h"><a href="#">SALE</a></li>
          <li class="m-6 _h"><a href="#">BLOG</a></li>
          <li class="m-6 _h dropDown"><a href="#">PAGES</a>
            <ol class="dropDown-menu ">
                <li class="m-3">ABOUT</li>
                <li class="m-3">BLOG</li>
                <li class="m-3">SHOP</li>
                <li class="m-3">CART</li>
                <li class="m-3">CHECKOUT</li>
                <li class="m-3">SINGLE POST</li>
                <li class="m-3">SINGLE PRODUCT</li>
                <li class="m-3">CONTACT</li>
            </ol>
         </li>              
          <li class="icons m-left-10 _h">
            <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
          </li>
          <li class="icons">
            <a href="#"><i class="fa-solid fa-user"></i></a>
          </li>
          <li class="icons">
            <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
          </li>
        </ul>
      </div>
    </nav>`
}

export default navbar