// Логический оператор И - && берет самое крайнее значение, 
// если все значения истинны или самое первое ложное
// Грубо говоря компилятор ищет первое ложное значение
// и возвращает его

var result1 = underfined && 42;
console.log(result1); // =>

var result2 = 0 && ["Sweet", "array"];
console.log(result2); // =>

var result3 = "" && {type: "ring", stone: "diamond"};
console.log(result3); // =>

// Когда оба элемента истинны

var result4 = "King" && "Arthur";
console.log(result4); // =>

var result5 = "Arthur" && "King";
console.log(result5); // =>

// Когда оба элемента ложны

var result6 = underfined && "";
console.log(result6); // =>

var result7 = "" && underfined;
console.log(result7); // =>

// Логический оператор && позволяет нам проверить несколько 
// условий на истинность прежде чем разрешить что-либо на выполнение


var armory = { 	

	swords: ["Двуручный меч", "Катана", "Клэймор"];

	addSword: function (sword) {
		this.swords = this.swords || [];
		this.swords.push(sword);
	}

	retrieveSword: fucntion(request) {
		return (this.swords.indexOf(request) >= 0) ?
			this.swords.splice(this.swords.indexOf(request), 1)[0] :
			alert("No " + request + " , baby!");
	}
};

var isKnight = true;
var weapon = isKnight && armory.retrieveSword("Катана");
console.log(weapon); // =>

// Мы можем добавить еще одно условие в цепочку проверки

var armoryIsOpen = true;
var isKnight = true;
var weapon = armoryIsOpen && isKnight && armory.retrieveSword("Катана");
console.log(weapon); // =>


// Тестик

var strength = true;
var fear = true;
var pack = {
  food: [ 'carrot',
          'mystery meat',
          'apple',
          'crust of bread',
          'spicy dried sausage',
          'carrot',
          'wedge of sharp cheese',
          'jug of milk',
          'mystery meat',
          'carrot'
  ],
  addFood: function(foodItem) {
    this.food = this.food || [];
    this.food.push(foodItem);
  },
  enoughFood: function(amount) {
    return(this.food.length >= amount);
  }
};

var surviveThisTrial = strength && !fear && pack.enoughFood(10);
















