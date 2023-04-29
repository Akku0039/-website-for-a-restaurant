// getMenu function to fetch and show the food items
function getMenu() {
    fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json')
      .then(response => response.json())
      .then(data => {
        // Show the food items to the user
        console.log(data);
      })
      .catch(error => console.error(error));
  }
  
  // TakeOrder function to resolve the order after 2500ms
  function takeOrder() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const burgers = ['Cheeseburger', 'Veggie Burger', 'Chicken Burger'];
        const randomBurgers = [];
        // Choose 3 burgers randomly
        for (let i = 0; i < 3; i++) {
          const randomIndex = Math.floor(Math.random() * burgers.length);
          randomBurgers.push(burgers[randomIndex]);
        }
        // Resolve the promise with the chosen burgers
        resolve(randomBurgers);
      }, 2500);
    });
  }
  
  // orderPrep function to resolve the order preparation after 1500ms
  function orderPrep() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Resolve the promise with order status true and paid false
        resolve({ order_status: true, paid: false });
      }, 1500);
    });
  }
  
  // payOrder function to resolve the payment after 1000ms
  function payOrder() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Resolve the promise with order status true and paid true
        resolve({ order_status: true, paid: true });
      }, 1000);
    });
  }
  
  // thankyouFnc function to give an alert once paid:true is received
  function thankyouFnc() {
    alert('Thank you for eating with us today!');
  }
  
  // Function to handle the promises back to back
  async function restaurantFlow() {
    try {
      await getMenu();
      const order = await takeOrder();
      console.log('Order:', order);
      const orderPrepared = await orderPrep();
      console.log('Order Prepared:', orderPrepared);
      const orderPaid = await payOrder();
      console.log('Order Paid:', orderPaid);
      thankyouFnc();
    } catch (error) {
      console.error(error);
    }
  }
  
  // Call the function to start the restaurant flow
  restaurantFlow();
  