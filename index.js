// 1. Print an array of all the drinks on the menu.
const allDrinks = coffeeMenu.map(function(drink) {
    return drink.name;
  });
  console.log('All drinks:', allDrinks);
  
  // 2. Print an array of drinks that cost 5 and under.
  const cheapDrinks = coffeeMenu.filter(function(drink) {
    return drink.price <= 5;
  });
  console.log('Cheap drinks:', cheapDrinks);
  
  // 3. Print an array of drinks that are priced at an even number.
  const evenPricedDrinks = coffeeMenu.filter(function(drink) {
    return drink.price % 2 === 0;
  });
  console.log('Even-priced drinks:', evenPricedDrinks);
  
  // 4. Print the total if you were to order one of every drink.
  const totalOrderCost = coffeeMenu.reduce(function(acc, drink) {
    return acc + drink.price;
  }, 0);
  console.log('Total cost of one of every drink:', totalOrderCost);
  
  // 5. Print an array with all the drinks that are seasonal.
  const seasonalDrinks = coffeeMenu.filter(function(drink) {
    return drink.seasonal;
  });
  console.log('Seasonal drinks:', seasonalDrinks);
  
  // 6. Print all the seasonal drinks with the words "with imported beans" after the item name.
  const seasonalDrinksWithImportedBeans = seasonalDrinks.map(function(drink) {
    return drink.name + ' with imported beans';
  });
  console.log('Seasonal drinks with imported beans:', seasonalDrinksWithImportedBeans);  