function passingOrder(orderNumber) {

	console.log("Customer", orderNumber);


	cookAndDiliverFood(function () {
		console.log("Customer", orderNumber);
	
		})
	
	}




function cookAndDiliverFood(callback) {


	setTimeout(callback, 5000);


}


passingOrder(1);
passingOrder(2);
passingOrder(3);
passingOrder(4);
passingOrder(5);
passingOrder(6);