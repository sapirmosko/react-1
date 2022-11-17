import { click } from "@testing-library/user-event/dist/click";
import "./App.css";
import Product from "./components/Product";

function App() {
  const products = [
    {
      id: 1,
      item: "Coffee Maker",
      shop: "Mr. Coffee",
      price: "$25.00",
      color: "black",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71LB1AbsorL._AC_SX466_.jpg",
      imageSecond:
        "https://www.tradeinn.com/f/13774/137743103/philips-hd7435-20-drip-coffee-maker.jpg",
      description:
        "Just set it up, turn it on, and brew. There you have it! Rich-tasting coffee expertly brewed for you without the fuss. Grab-A-Cup Auto Pause is a lifesaver when you need a cup before the brew cycle is finished. It stops brewing so you can pour a rich-tasting cup and then finishes the brewing cycle after you place the carafe back in position. We put our best brewing forward with this easy-to-use, Simple Brew coffee maker. Experience the taste with the Mr. Coffee brand.",
    },
    {
      id: 2,
      item: "Rice Cooker",
      shop: "Aroma Housewares",
      price: "$40.00",
      image:
        "https://secure.img1-fg.wfcdn.com/im/70939842/compr-r85/3931/39319030/aroma-5-qt-cool-touch-professional-digital-rice-cooker-food-steamer-and-slow-cooker.jpg",
      imageSecond: "https://m.media-amazon.com/images/I/41HuUudhPbL._AC_.jpg",
      description:
        "The new Aroma 8-Cup (Cooked) Digital Rice and Grain Cooker (ARC-994SB) is designed to cook a large variety of dishes that the entire family will love. Its compact 8 cup capacity can prepare one pot meals, simple sides, and everything in between. This cooker has specialized functions for almost anything that you want to cook up for dinner. The provided steam tray and Steam function allows for healthy steaming of meats and vegetables even as rice cooks below! With the Slow Cook function your rice cooker transforms into a 2-quart slow cooker furthering its use as a meal-making powerhouse. Once your meals are finished cooking, the cooker will automatically switch to Keep Warm mode so there's no need for monitoring or stirring and your food will remain at ideal serving temperatures. Lastly, this unit comes equipped with a programmable 15-hour Delay Timer that is perfect for families on the go. The Delay Timer assures that you will have rice ready right when it's needed. When the cooking is completed, the inner cooking pot and all accessories remove for easy and simple cleanup.",
    },
    {
      id: 3,
      item: "Tea (80 Count)",
      shop: "Typhoo",
      price: "$10.00",
      image:
        "https://cdn11.bigcommerce.com/s-ww1fqjacln/images/stencil/1200x1200/products/3707/12416/awazawdmefs9zafieu9h__11596.1614716465.jpg?c=1",
      imageSecond:
        "https://cdn2.foodviva.com/static-content/food-images/tea-recipes/milk-tea-recipe/milk-tea-recipe.jpg",
      description:
        "Typhoo Has Always Been Britain's Favorite Tea. And there's a good reason for it! A lot goes into creating the perfect tea bag- and you can be sure that with Typhoo, it’s all pure goodness from start to finish. From hand picking only the best tea leaves from top crops and blending to perfection, to packing the tea in foil to lock in extra freshness, we are committed to bringing you the finest that British tea has to offer.",
    },
    {
      id: 4,
      item: "Umbrella",
      shop: "G4Free",
      price: "$15.00",
      image:
        "https://cdn.shopify.com/s/files/1/0310/5600/3204/products/9510_N16_alt3_1200x.jpg?v=1585236821",
      imageSecond:
        "https://m.media-amazon.com/images/I/71md9jHDSgL._AC_SL1500_.jpg",
      description:
        "Classic design meets supreme durability with the totes auto open wooden stick umbrella. Wooden crook handle provides a classic look with easy handling and a secure grip. Automatically opens with the touch of a button keeping one hand free when you're on the go. Totescoat application repels water for superior rain protection. Generous 48-inch canopy offers full coverage from the elements.",
    },
    {
      id: 5,
      item: "Chocolate",
      shop: "Ferrero Rocher",
      price: "$25.00",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81iqedVeXsL._SL1500_.jpg",
      imageSecond:
        "https://m.media-amazon.com/images/I/71uNpGYLbnL._SL1100_.jpg",
      description:
        "If you love Ferrero Rocher, you will love Ferrero collection. Experience three delicious confections. Original, iconic Ferrero Rocher. Lusciously layered Raffaello. And delicious dark chocolate Rondnoir. Perfect for sharing and holiday gifting, because there is something for everyone in this elegant assorted box. Savor the variety of unique delights with Ferrero collection.",
    },
    {
      id: 6,
      item: "Digital Camera",
      shop: "Sony",
      price: "$185.00",
      image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6308/6308716_rd.jpg",
      imageSecond: "https://m.media-amazon.com/images/I/71+V026ogBL.jpg",
      description: "A Camera.",
    },
  ];

  return (
    <div className="main">
      <div id="products" className="products">
        {products.map((element) => (
          <Product
            onClick={click}
            key={element.id.toString()}
            item={element}
          ></Product>
        ))}
      </div>
      <div id="description" className="onClickDescription">
        <div className="card2">
          <img id="img" alt="" className="img"></img>
          <div className="description">
            <h2 id="item"></h2>
            <h4 id="price"></h4>
            <h4 id="store"></h4>
            <br />
            <br />
            <h4 id="desc"></h4>
          </div>
        </div>
      </div>
    </div>
  );

  function click(element) {
    let main = document.getElementById("products");
    main.style.display = "none";
    let description = document.getElementById("description");
    description.style.display = "block";
    let img = document.getElementById("img");
    let item = document.getElementById("item");
    let price = document.getElementById("price");
    let store = document.getElementById("store");
    let desc = document.getElementById("desc");
    img.src = element.imageSecond;
    item.innerText = element.item;
    price.innerText = element.price;
    store.innerText = element.shop;
    desc.innerText = element.description;
    console.log(element);
  }
}

export default App;
