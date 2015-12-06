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


// В грамотно организованный "водопадный" switch блок
// сначала добавляются наиболее редкие значения
// а в конец наиболее частые








function CaretakerMedallion(caretaker) {
  
}

// Example uses of our CaretakerMedallion function
// Note the properties for each example

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



// Temple caretakers have different ranks. Based on these ranks, they receive different inscriptions on their medallions; each higher rank receives all of the inscriptions of the lower ranks, plus its own unique inscription.

// Use a switch block and hierarchical fall-through to finish creating the CaretakerMedallion constructor function. Follow the list of caretaker ranks and their medallion inscriptions below. Each inscription will be a property on the object that is generated by the CaretakerMedallion constructor function.

// 'PixelPriest' caretakers recieve:

// 	bronzeBanner set to 'Omne initium est a pixel'
// 	circumscribedSquare set to 'Venit Comic Sans'
// 	innerRing set to 'Ars autem est in aeternum'

// 'FontFriar' caretakers recieve:

// 	circumscribedSquare set to 'Venit Comic Sans'
// 	innerRing set to 'Ars autem est in aeternum'

// 'StyleSensei' caretakers receive:

// 	innerRing set to 'Ars autem est in aeternum'



