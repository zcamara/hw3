$(function(){ 

	renderPizza();

	$('.menu-ui .btn').click(function(){
		var menuBtn = $(this);
		var type = menuBtn.attr('data-type');
		clearMenu();
		if(type === "pizzas")
			renderPizza();
		else
			render(type);
		menuBtn.siblings().removeClass("active");
		menuBtn.addClass("active");
		//Set Menu title
		$('.menuType').text(type+":");
		$('.menu').fadeIn(500);

	});

});

function renderPizza(){	
	var idx;
	var pizza;
	var instance;
	var template = $('.pizza');
	var meatContainer = $('.meat-pizza');
	var veggieContainer = $('.veggie-pizza');
	var pizzaContainer = $('.pizza-menu');
	$('.maincontainer').removeAttr('id');
	for (idx = 0; idx < com.dawgpizza.menu.pizzas.length; ++idx) {
		pizza = com.dawgpizza.menu.pizzas[idx];
		instance = template.clone();
		instance.find('.name').html(pizza.name);
		instance.find('.description').html(pizza.description);
		instance.find('.prices').html("$"+pizza.prices[0]+" $"+pizza.prices[1]+" $"+pizza.prices[2]);

		instance.removeClass('template');
		if (pizza.vegetarian)
			var container = veggieContainer;
		else
			var container = meatContainer;
		container.append(instance);
	}
	pizzaContainer.fadeIn(500);
}

function render(type) {
	var idx;
	var instance;
	var template = $('.template');
	var container = $('.menu');
	var item;
	$('.maincontainer').attr('id', 'small');

	var address = com.dawgpizza.menu.drinks;
	if (type === "desserts")
		address = com.dawgpizza.menu.desserts;

	for (idx = 0; idx < address.length; ++idx) {
		item = address[idx];
		instance = template.clone();
		instance.find('.pizzaname').html(item.name);
		instance.find('.price').html("$" + item.price)
		instance.removeClass('template');
		container.append(instance);
	}
	container.fadeIn(500);
	
}

function clearMenu() {
	$('.pizza-menu').hide();
	$('.meat-pizza').empty();
	$('.veggie-pizza').empty();
	$('.menu').empty();
	$('.menu').hide();
	$('.menuType').hide();
	$('.menuType').fadeIn(500);


}