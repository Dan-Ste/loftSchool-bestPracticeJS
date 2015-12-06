// Логические операторы могут сделать условные 
// выражения еще короче, чем тернарные операторы


// Если свойсво swords в объекте armory существует (его значение не ложно),
// то ему присваевается то же значение, в противном случае ему присваевается
// пустой массив.

var armory = { 	addSword: function (sword) {
									this.swords = this.swords ? this.swords : [];
									this.swords.push(sword);
							 	}
						 };

// Но мы можем сделать подобный фокус еще короче использую логический оператор ИЛИ - ||

// Логический оператор || попытается вернуть первое значение, которое не ложно.
// Как только логический оператор || находит не ложное значение - оно возвращается и следующие
// значения не читаются вовсе. Это называется "коротким замыканием" (short-circuit)

var armory = { 	addSword: function (sword) {
									this.swords = this.swords || [];
									this.swords.push(sword);
							 	}
						 };

armory.addSword("Двуручный меч"); 
console.log( armory.swords ); // => 

armory.addSword("Катана"); 
console.log( armory.swords ); // => 

armory.addSword("Клэймор");
console.log( armory.swords ); // => 

// Еще немного примеров оператора ||

var result1 = 42 || underfined;
console.log(result1); // => 

var result2 = ["Sweet", "array"] || 0;
console.log(result2); // => 

var result3 = {type: "ring", stone: "diamond"} || "";
console.log(result3); // => 

// Когда оба элемента истинны

var result4 = "King" || "Arthur";
console.log(result4); // => 

var result5 = "Arthur" || "King";
console.log(result5); // => 

// Когда оба элемента ложны

var result6 = underfined || "";
console.log(result6); // =>

var result7 = "" || underfined;
console.log(result7); // => 
















