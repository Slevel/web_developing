function initiate() {
    //инициализация игрового поля
    function gameField(x, y, width, height) {
        canvas.strokeStyle = "#e8e8cc";
        canvas.drawImage(background, 0, 0);
        canvas.beginPath();
        canvas.moveTo(0, 150);
        canvas.lineTo(1026, 150);
        canvas.lineWidth = 4;
        canvas.stroke();
        canvas.beginPath();
        canvas.moveTo(0, 300);
        canvas.lineTo(960, 300);
        canvas.lineWidth = 4;
        canvas.stroke();
        canvas.beginPath();
        canvas.moveTo(0, 450);
        canvas.lineTo(1026, 450);
        canvas.lineWidth = 4;
        canvas.stroke();
        canvas.beginPath();
        canvas.moveTo(110, 0);
        canvas.lineTo(110, 600);
        canvas.lineWidth = 4;
        canvas.stroke();
    }
    //сброс игры
    function resetGame() {
        gameField(0, 0, 1024, 600);
        canvas.drawImage(tarakan, 0, 20);
        canvas.drawImage(tarakan, 0, 170);
        canvas.drawImage(tarakan, 0, 320);
        canvas.drawImage(tarakan, 0, 470);
        dx1 = 0;
        dx2 = 0;
        dx3 = 0;
        dx4 = 0;
        bug1F = 0;
        bug2F = 0;
        bug3F = 0;
        bug4F = 0;
        listBoxResult.options.length = 0;
        listBoxResult.options[0] = new Option("Список победителей:", "");
    }

    //сброс ставок
    function resetRate() {
        listBoxRate.options.length = 0;
        topRate = 0;
        bug1Player = null;
        bug2Player = null;
        bug3Player = null;
        bug4Player = null;
        rate11 = 0;
        rate12 = 0;
        rate13 = 0;
        rate14 = 0;
        rate21 = 0;
        rate22 = 0;
        rate23 = 0;
        rate24 = 0;
        rate31 = 0;
        rate32 = 0;
        rate33 = 0;
        rate34 = 0;
    }

    //отображение медалей
    function drawMedal(position, bug) {
        if (position == 1) {
            if (bug == 1) {canvas.drawImage(medalFirst, 0, 20); state1 = 1;}
            if (bug == 2) {canvas.drawImage(medalFirst, 0, 170); state1 = 2;}
            if (bug == 3) {canvas.drawImage(medalFirst, 0, 320); state1 = 3;}
            if (bug == 4) {canvas.drawImage(medalFirst, 0, 470); state1 = 4;}
        }
        if (position == 2) {
            if (bug == 1) { canvas.drawImage(medalSecond, 0, 20); state2 = 1; }
            if (bug == 2) { canvas.drawImage(medalSecond, 0, 170); state2 = 2; }
            if (bug == 3) { canvas.drawImage(medalSecond, 0, 320); state2 = 3; }
            if (bug == 4) { canvas.drawImage(medalSecond, 0, 470); state3 = 4; }
        }
        if (position == 3) {
            if (bug == 1) { canvas.drawImage(medalThird, 0, 20); state3 = 1; }
            if (bug == 2) { canvas.drawImage(medalThird, 0, 170); state3 = 2; }
            if (bug == 3) { canvas.drawImage(medalThird, 0, 320); state3 = 3; }
            if (bug == 4) { canvas.drawImage(medalThird, 0, 470); state3 = 4; }
        }
        if (position == 4) {
            if (bug == 1) { canvas.drawImage(medalFourth, 0, 20);}
            if (bug == 2) { canvas.drawImage(medalFourth, 0, 170);}
            if (bug == 3) { canvas.drawImage(medalFourth, 0, 320);}
            if (bug == 4) { canvas.drawImage(medalFourth, 0, 470);}
        }
    }


    // подведение результатов по ставкам
    function giveResult() {
        if (state1 != null) {
            //listBoxResult.options[listBoxResult.options.length] = new Option(state1+" "+bug1Player, "");
            if (state1 == bug1Player) {listBoxResult.options[listBoxResult.options.length] = new Option("Игрок 1: 1 место, приз: " + topRate / 2 + " ₽", ""); casinoRate -= topRate / 2;}
            if (state1 == bug2Player) {listBoxResult.options[listBoxResult.options.length] = new Option("Игрок 2: 1 место, приз: " + topRate / 2 + " ₽", ""); casinoRate -= topRate / 2;}
            if (state1 == bug3Player) {listBoxResult.options[listBoxResult.options.length] = new Option("Игрок 3: 1 место, приз: " + topRate / 2 + " ₽", ""); casinoRate -= topRate / 2;}
        }

        if (state2 != null) {
            //listBoxResult.options[listBoxResult.options.length] = new Option(state2 + " " + bug1Player, "");
            if (state2 == bug1Player) {listBoxResult.options[listBoxResult.options.length] = new Option("Игрок 1: 2 место, приз: " + topRate / 4 + " ₽", ""); casinoRate -= topRate / 4;}
            if (state2 == bug2Player) {listBoxResult.options[listBoxResult.options.length] = new Option("Игрок 2: 2 место, приз: " + topRate / 4 + " ₽", ""); casinoRate -= topRate / 4;}
            if (state2 == bug3Player) {listBoxResult.options[listBoxResult.options.length] = new Option("Игрок 3: 2 место, приз: " + topRate / 4 + " ₽", ""); casinoRate -= topRate / 4;}
        }

        if (state3 != null) {
            //listBoxResult.options[listBoxResult.options.length] = new Option(state3 + " " + bug1Player, "");
            if (state3 == bug1Player) {listBoxResult.options[listBoxResult.options.length] = new Option("Игрок 1: 3 место, приз: " + topRate / 4 + " ₽", ""); casinoRate -= topRate / 4;}
            if (state3 == bug2Player) {listBoxResult.options[listBoxResult.options.length] = new Option("Игрок 2: 3 место, приз: " + topRate / 4 + " ₽", ""); casinoRate -= topRate / 4;}
            if (state3 == bug3Player) {listBoxResult.options[listBoxResult.options.length] = new Option("Игрок 3: 3 место, приз: " + topRate / 4 + " ₽", ""); casinoRate -= topRate / 4;}
        }
        if (bug1Player==null && bug2Player==null && bug3Player==null) listBoxResult.options[listBoxResult.options.length] = new Option("Ставок не было", "");
    }



    var element = document.getElementById("canvas");
    var canvas = element.getContext('2d');
    var background = document.getElementById("background");
    var tarakan = document.getElementById("tarakan");

    // подтягиваем изображения медалей
    var medalFirst = document.getElementById("first");
    var medalSecond = document.getElementById("second");
    var medalThird = document.getElementById("third");
    var medalFourth = document.getElementById("fourth");

    // кнопочки
    var GO = document.getElementById("goButton");
    var inputButton = document.getElementById("inputButton");
    var deleteButton = document.getElementById("deleteButton");
	
    // радиобаттоны игроков
	var player1 = document.getElementById("player1");
	var player2 = document.getElementById("player2");
	var player3 = document.getElementById("player3");
	
    // радиобаттоны жуков
	var bug1 = document.getElementById("bug1");
	var bug2 = document.getElementById("bug2");
	var bug3 = document.getElementById("bug3");
	var bug4 = document.getElementById("bug4");
	
    // поле для внесения ставки
	var cost = document.getElementById("cost");
	
    // листбоксы
	var listBoxRate = document.getElementById("listRate");
	var listBoxResult = document.getElementById("listResult");

    // непонятно зачем это было нужно
	//var listN=0;

	//путь каждого жука
	var dx1 = 0;
	var dx2 = 0;
	var dx3 = 0;
	var dx4 = 0;
	//var rn = 0;
    
    //позиции на  финише для каждого жука
	var bug1F = 0;
	var bug2F = 0;
	var bug3F = 0;
	var bug4F = 0;

    //диапазон СВ для шага жука (оптимально 6-1)
	var max = 6;
	var min = 1;

    //определение направления движения жука: true - вперёд, false - назад
	var bug1V = true;
	var bug2V = true;
	var bug3V = true;
	var bug4V = true;

	var topRate = 0;    // банк ставок отдельного заезда
    var casinoRate = 0; // деньги в казино

    // Привязка тараканов к игрокам
	var bug1Player = null; // номер таракана для первого игрока
	var bug2Player = null;
	var bug3Player = null;
    var bug4Player = null;

    // ставки на тараканов
	var rate11 = 0; // ставка первого игрока на первого таракана
	var rate12 = 0; // ставка первого игрока на второго таракана
	var rate13 = 0;
	var rate14 = 0;
	var rate21 = 0; // ставка второго игрока на первого таракана
	var rate22 = 0; // и тд.
	var rate23 = 0;
	var rate24 = 0;
	var rate31 = 0;
	var rate32 = 0;
	var rate33 = 0;
	var rate34 = 0;
	
    // призовые места
	var state1 = null;  // первый финишировавший
	var state2 = null;  // второй
    var state3 = null;  // третий
	
    //по умолчанию игра остановлена (до нажатия старта)
	var game = false;

	resetGame();    // обнуление игры

    // основной игровой цикл
	var draw = function () {
	    if (game == true) {

				gameField(0,0,1024,600);    //рисование игрового поля
				canvas.drawImage(tarakan,dx1,20);   // 1-ый таракан
				canvas.drawImage(tarakan,dx2,170);  // 2-й
				canvas.drawImage(tarakan,dx3,320);  // 3-й
				canvas.drawImage(tarakan,dx4,470);  // 4-й

                //обработка 1-го жука
				if (dx1 < 1024) {
				    if (bug1V == true) dx1 += Math.floor(Math.random() * max) + min;
				    if (bug1V == false) dx1 -= Math.floor(Math.random() * max) + min;
				    if (((Math.floor(Math.random() * 140) + 1) == (Math.floor(Math.random() * 50) + 1))&& dx1>400) bug1V = false;
				    if ((Math.floor(Math.random() * 15) + 1) == (Math.floor(Math.random() * 10) + 1)) bug1V = true;
				} else if (bug1F == 0) {
	                if (bug2F == 0 && bug3F == 0 && bug4F == 0) {
	                    bug1F = 1;
	                }
	                if (bug2F != 0 || bug3F != 0 || bug4F != 0) {
	                    bug1F = 2;
	                }
	                if ((bug2F != 0 && bug3F != 0) || (bug2F != 0 && bug4F != 0) || (bug3F != 0 && bug4F != 0)) {
	                    bug1F = 3;
	                }
	                if (bug2F != 0 && bug3F != 0 && bug4F != 0) {
	                    bug1F = 4;
	                }
	            } else {
				    drawMedal(bug1F, 1);
				}

	            //обработка 2-го жука
				if (dx2 < 1024) {
				    if (bug2V == true) dx2 += Math.floor(Math.random() * max) + min;
				    if (bug2V == false) dx2 -= Math.floor(Math.random() * max) + min;
				    if (((Math.floor(Math.random() * 140) + 1) == (Math.floor(Math.random() * 50) + 1))&& dx2>400) bug2V = false;
				    if ((Math.floor(Math.random() * 15) + 1) == (Math.floor(Math.random() * 10) + 1)) bug2V = true;
				} else if (bug2F == 0) {
				    if (bug1F == 0 && bug3F == 0 && bug4F == 0) {
				        bug2F = 1;
				    }
				    if (bug1F != 0 || bug3F != 0 || bug4F != 0) {
				        bug2F = 2;
				    }
				    if ((bug1F != 0 && bug3F != 0) || (bug2F != 0 && bug4F != 0) || (bug3F != 0 && bug4F != 0)) {
				        bug2F = 3;
				    }
				    if (bug1F != 0 && bug3F != 0 && bug4F != 0) {
				        bug2F = 4;
				    }
				} else {
				    drawMedal(bug2F, 2);
				}

	            //обработка 3-го жука
				if (dx3 < 1024) {
				    if (bug3V == true) dx3 += Math.floor(Math.random() * max) + min;
				    if (bug3V == false) dx3 -= Math.floor(Math.random() * max) + min;
				    if (((Math.floor(Math.random() * 140) + 1) == (Math.floor(Math.random() * 50) + 1))&& dx3>400) bug3V = false;
				    if ((Math.floor(Math.random() * 15) + 1) == (Math.floor(Math.random() * 10) + 1)) bug3V = true;
				} else if (bug3F == 0) {
				    if (bug1F == 0 && bug2F == 0 && bug4F == 0) {
				        bug3F = 1;
				    }
				    if (bug1F != 0 || bug2F != 0 || bug4F != 0) {
				        bug3F = 2;
				    }
				    if ((bug1F != 0 && bug2F != 0) || (bug1F != 0 && bug4F != 0) || (bug2F != 0 && bug4F != 0)) {
				        bug3F = 3;
				    }
				    if (bug1F != 0 && bug2F != 0 && bug4F != 0) {
				        bug3F = 4;
				    }
				} else {
				    drawMedal(bug3F, 3);
				}

	            //обработка 4-го жука
				if (dx4 < 1024) {
				    if (bug4V == true) dx4 += Math.floor(Math.random() * max) + min;
				    if (bug4V == false) dx4 -= Math.floor(Math.random() * max) + min;
				    if (((Math.floor(Math.random() * 140) + 1) == (Math.floor(Math.random() * 50) + 1))&& dx4>400) bug4V = false;
				    if ((Math.floor(Math.random() * 15) + 1) == (Math.floor(Math.random() * 10) + 1)) bug4V = true;
				} else if (bug4F == 0) {
				    if (bug1F == 0 && bug2F == 0 && bug3F == 0) {
				        bug4F = 1;
				    }
				    if (bug1F != 0 || bug2F != 0 || bug3F != 0) {
				        bug4F = 2;
				    }
				    if ((bug1F != 0 && bug2F != 0) || (bug1F != 0 && bug3F != 0) || (bug2F != 0 && bug3F != 0)) {
				        bug4F = 3;
				    }
				    if (bug1F != 0 && bug2F != 0 && bug3F != 0) {
				        bug4F = 4;
				    }
				} else {
				    drawMedal(bug4F, 4);
				}
	            if (bug1F != 0 && bug2F != 0 && bug3F != 0 && bug4F != 0) {
	                game = false;
	                giveResult();
	                resetRate();
	                GO.style.display = 'block';
	            }
	    }
	    else if (game == false) {
	            listBoxRate.options[0] = new Option("Банк: " + topRate + " ₽", "");
	            listBoxRate.options[1] = new Option("Казино: " + casinoRate + " ₽", "");
	            listBoxResult.options[0] = new Option("Список победителей:", "");
			    drawMedal(bug1F, 1);    // рисуем медальки, даже если игра не запущена
			    drawMedal(bug2F, 2);
			    drawMedal(bug3F, 3);
			    drawMedal(bug4F, 4);
			}

        // стартовая кнопка
	    GO.onclick = function () {
			    if (!game) {
			        casinoRate += topRate;
			        resetGame();
			        game = true;
			        GO.style.display = 'none';
			    } else {
			        //game = false;
			    }
			};

        // удаление ставки
	    deleteButton.onclick = function () {
	        if (listBoxRate.selectedIndex != -1) {
	            topRate -= listBoxRate.options[listBoxRate.selectedIndex].value;
                listBoxRate.options[listBoxRate.selectedIndex] = null;
	        }
	    }

        // ввод ставок
	    inputButton.onclick = function ()	{
			if (player1.checked && cost.value != "")	{
			    if (bug1.checked) {
			        topRate += parseInt(cost.value);
			        listBoxRate.options[listBoxRate.options.length] = new Option("Игрок 1; Жук 1; Cтавка: " + cost.value + " ₽", parseInt(cost.value));
			        bug1Player = 1;
				    rate11 = cost.value;
					player1.checked = false;
					bug1.checked = false;
					cost.value = "";
				}
			    if (bug2.checked) {
			        topRate += parseInt(cost.value);
			        listBoxRate.options[listBoxRate.options.length] = new Option("Игрок 1; Жук 2; Cтавка: " + cost.value + " ₽", parseInt(cost.value));
			        bug1Player = 2;
				    rate12 = cost.value;
					player1.checked = false;
					bug2.checked = false;
					cost.value = "";
				}
			    if (bug3.checked) {
			        topRate += parseInt(cost.value);
			        listBoxRate.options[listBoxRate.options.length] = new Option("Игрок 1; Жук 3; Cтавка: " + cost.value + " ₽", parseInt(cost.value));
			        bug1Player = 3;
				    rate13 = cost.value;
					player1.checked = false;
					bug3.checked = false;
					cost.value = "";
				}
			    if (bug4.checked) {
			        topRate += parseInt(cost.value);
			        listBoxRate.options[listBoxRate.options.length] = new Option("Игрок 1; Жук 4; Cтавка: " + cost.value + " ₽", parseInt(cost.value));
			        bug1Player = 4;
				    rate14 = cost.value;
					player1.checked = false;
					bug4.checked = false;
					cost.value = "";
				}
			}


			if (player2.checked && cost.value != "") {
			    if (bug1.checked) {
			        topRate += parseInt(cost.value);
			        listBoxRate.options[listBoxRate.options.length] = new Option("Игрок 2; Жук 1; Cтавка: " + cost.value + " ₽", parseInt(cost.value));
			        bug2Player = 1;
			        rate21 = cost.value;
			        player2.checked = false;
			        bug1.checked = false;
			        cost.value = "";
			    }
			    if (bug2.checked) {
			        topRate += parseInt(cost.value);
			        listBoxRate.options[listBoxRate.options.length] = new Option("Игрок 2; Жук 2; Cтавка: " + cost.value + " ₽", parseInt(cost.value));
			        bug2Player = 2;
			        rate22 = cost.value;
			        player2.checked = false;
			        bug2.checked = false;
			        cost.value = "";
			    }
			    if (bug3.checked) {
			        topRate += parseInt(cost.value);
			        listBoxRate.options[listBoxRate.options.length] = new Option("Игрок 2; Жук 3; Cтавка: " + cost.value + " ₽", parseInt(cost.value));
			        bug2Player = 3;
			        rate23 = cost.value;
			        player2.checked = false;
			        bug3.checked = false;
			        cost.value = "";
			    }
			    if (bug4.checked) {
			        topRate += parseInt(cost.value);
			        listBoxRate.options[listBoxRate.options.length] = new Option("Игрок 2; Жук 4; Cтавка: " + cost.value + " ₽", parseInt(cost.value));
			        bug2Player = 4;
			        rate24 = cost.value;
			        player2.checked = false;
			        bug4.checked = false;
			        cost.value = "";
			    }
			}


			if (player3.checked && cost.value != "") {
			    if (bug1.checked) {
			        topRate += parseInt(cost.value);
			        listBoxRate.options[listBoxRate.options.length] = new Option("Игрок 3; Жук 1; Cтавка: " + cost.value + " ₽", parseInt(cost.value));
			        bug3Player = 1;
			        rate31 = cost.value;
			        player3.checked = false;
			        bug1.checked = false;
			        cost.value = "";
			    }
			    if (bug2.checked) {
			        topRate += parseInt(cost.value);
			        listBoxRate.options[listBoxRate.options.length] = new Option("Игрок 3; Жук 2; Cтавка: " + cost.value + " ₽", parseInt(cost.value));
			        bug3Player = 2;
			        rate32 = cost.value;
			        player3.checked = false;
			        bug2.checked = false;
			        cost.value = "";
			    }
			    if (bug3.checked) {
			        topRate += parseInt(cost.value);
			        listBoxRate.options[listBoxRate.options.length] = new Option("Игрок 3; Жук 3; Cтавка: " + cost.value + " ₽", parseInt(cost.value));
			        bug3Player = 3;
			        rate33 = cost.value;
			        player3.checked = false;
			        bug3.checked = false;
			        cost.value = "";
			    }
			    if (bug4.checked) {
			        topRate += parseInt(cost.value);
			        listBoxRate.options[listBoxRate.options.length] = new Option("Игрок 3; Жук 4; Cтавка: " + cost.value + " ₽", parseInt(cost.value));
			        bug3Player = 4;
			        rate34 = cost.value;
			        player3.checked = false;
			        bug4.checked = false;
			        cost.value = "";
			    }
			}
		}
	}
	setInterval(draw, 25); 
}
addEventListener("load", initiate);