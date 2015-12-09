// Switch используется для условий с множеством возможных значений,
// которые могут быть не только булевыми, но и любыми другими

// У нас есть 8 полков и наш нужно вооружать рыцарей соответствующим
// оружием в зависимости от номера его полка

function Knignt (name, regiment){
	this.name = name;
	this.regiment = regiment;
	if(regiment == 1) {
		this.weapon = "Двуручный меч";
	} else if(regiment == 2) {
		this.weapon = "Широкий меч";
	} else if(regiment == 3) {
		this.weapon = "Клэймор";
	} else if(regiment == 4) {
		this.weapon = "Алебарда";
	} else if(regiment == 5) {
		this.weapon = "Боевой топор";
	} else if(regiment == 6) {
		this.weapon = "Боевой молот";
	} else if(regiment == 7) {
		this.weapon = "Утренняя звезда";
	} else if(regiment == 8) {
		this.weapon = "Палаш";
	}


var soldier = new Knight("Ванька", 2);
console.log(soldier.weapon); // =>


function Knignt (name, regiment){
	this.name = name;
	this.regiment = regiment;
	switch(regiment) {
		case 1:
		 this.weapon = "Двуручный меч";
		case 2:
			this.weapon = "Широкий меч";
		case 3:
			this.weapon = "Клэймор";
		case 4:
			this.weapon = "Алебарда";
		case 5:
			this.weapon = "Боевой топор";
		case 6:
			this.weapon = "Боевой молот";
		case 7:
			this.weapon = "Утренняя звезда";
		case 8:
			this.weapon = "Палаш";
	}
}

var soldier2 = new Knight("Ланселот", 3);
console.log(soldier2);




















function Knignt (name, regiment){
	this.name = name;
	this.regiment = regiment;
	switch(regiment) {
		case 1:
		 this.weapon = "Двуручный меч";
		 break;
		case 2:
			this.weapon = "Широкий меч";
			break;
		case 3:
			this.weapon = "Клэймор";
			break;
		case 4:
			this.weapon = "Алебарда";
			break;
		case 5:
			this.weapon = "Боевой топор";
			break;
		case 6:
			this.weapon = "Боевой молот";
			break;
		case 7:
			this.weapon = "Утренняя звезда";
			break;
		case 8:
			this.weapon = "Палаш";
			break;
	}
}



function Knignt (name, regiment){
	this.name = name;
	this.regiment = regiment;
	switch(regiment) {
		case 1:
		 this.weapon = "Двуручный меч";
		 break;
		case 2:
			this.weapon = "Широкий меч";
			break;
		case 3:
			this.weapon = "Клэймор";
			break;
		case 4:
			this.weapon = "Алебарда";
			break;
		case 5:
			this.weapon = "Боевой топор";
			break;
		case 6:
		case 7:
			this.weapon = "Утренняя звезда";
			break;
		case 8:
			this.weapon = "Палаш";
			break;
	}
}






function Knignt (name, regiment){
	this.name = name;
	this.regiment = regiment;
	switch(regiment) {
		case 1:
		 this.weapon = "Двуручный меч";
		 break;
		case 2:
			this.weapon = "Широкий меч";
			break;
		case 4:
			this.weapon = "Алебарда";
			break;
		case 5:
			this.weapon = "Боевой топор";
			break;
		case 3:
		case 6:
		case 7:
			this.weapon = "Утренняя звезда";
			break;
		case 8:
			this.weapon = "Палаш";
			break;
	}
}









function Knignt (name, regiment){
	this.name = name;
	this.regiment = regiment;
	switch(regiment) {
		case 1:
		 this.weapon = "Двуручный меч";
		 break;
		case 2:
			this.weapon = "Широкий меч";
			break;
		case 4:
			this.weapon = "Алебарда";
			break;
		case 5:
			this.weapon = "Боевой топор";
			break;
		case 3:
		case 6:
		case 7:
			this.weapon = "Утренняя звезда";
			break;
		case 8:
			this.weapon = "Палаш";
			break;
		case: "King":
			this.weapon = "Экскалибур"
			break;
	}
}







function Knignt (name, regiment){
	this.name = name;
	this.regiment = regiment;
	switch(regiment) {
		case 1:
		 this.weapon = "Двуручный меч";
		 break;
		case 2:
			this.weapon = "Широкий меч";
			break;
		case 4:
			this.weapon = "Алебарда";
			break;
		case 5:
			this.weapon = "Боевой топор";
			break;
		case 3:
		case 6:
		case 7:
			this.weapon = "Утренняя звезда";
			break;
		case 8:
			this.weapon = "Палаш";
			break;
		case: "King":
			this.weapon = "Экскалибур"
			break;
		default: 
			alert(name + " самозванец, Мастер Оружейник!" +
				"\nНе выдавать оружия!")
	}
}





function ceremonialDagger(knight, rank) {
	this.length = 8;
	this.owner = knight;
	switch(rank) {
		case "King": this.diamomds = 1;
		case "Генерал": this.amethyst = 2;
		case "Фельдмаршал": this.sapphires = 4;
		case "Капитан": this.emeralds = 1;
		case 'Рыцарь': this.rubies = 6;
	}
}


// В грамотно организованный "проваливающийся" switch блок
// сначала добавляются наиболее редкие значения
// а в конец наиболее частые








function CaretakerMedallion(caretaker) {
  
}

// Пример использования нашей функции CaretakerMedallion.
// Обратите внимание на ожидаемые свойства объекта каждого примера.

var medallion1 = new CaretakerMedallion('PixelPriest');
/*
  CaretakerMedallion {
    bronzeBanner: 'Omne initium est a pixel', 
    circumscribedSquare: 'Venit Comic Sans', 
    innerRing: 'Ars autem est in aeternum'
  }
*/

var medallion2 = new CaretakerMedallion('StyleSensei'); 
/*
  CaretakerMedallion {
    innerRing: 'Ars autem est in aeternum'
  }
*/



// У замковых смотрителей есть различные звания. В зависимости от этих званий 
// они получаются различные надписи на свои медальоны; более высокие звания
// включают все надписи для нижних званий, плюс свою уникальную надпись 

// Используйте свойство "проваливания" switch блока,
// чтобы завершить создание функции-конструктора CaretakerMedallion 
// Следуйте списку званий хранителей и надписей на их медальонах нижу.
// Каждая надпись должна быть свойством объекта, который создастся с помощью
// функции-конструктора CaretakerMedallion.

// 'PixelPriest' получает надписи:

// 	bronzeBanner set to 'Omne initium est a pixel'
// 	circumscribedSquare set to 'Venit Comic Sans'
// 	innerRing set to 'Ars autem est in aeternum'

// 'FontFriar' получает:

// 	circumscribedSquare set to 'Venit Comic Sans'
// 	innerRing set to 'Ars autem est in aeternum'

// 'StyleSensei' получает:

// 	innerRing set to 'Ars autem est in aeternum'



