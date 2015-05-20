function initiate() {
    //инициализация игрового поля
    function gameField(x, y, width, height) {
        //canvas.clearRect(x, y, width, height);
        canvas.strokeStyle = "#e8e8cc";
        //canvas.strokeRect(x, y, width, height);
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
    }
    //отображение медалей
    function drawMedal(position, bug) {
        if (position == 1) {
            if (bug == 1) canvas.drawImage(medalFirst, 0, 20);
            if (bug == 2) canvas.drawImage(medalFirst, 0, 170);
            if (bug == 3) canvas.drawImage(medalFirst, 0, 320);
            if (bug == 4) canvas.drawImage(medalFirst, 0, 470);
        }
        if (position == 2) {
            if (bug == 1) canvas.drawImage(medalSecond, 0, 20);
            if (bug == 2) canvas.drawImage(medalSecond, 0, 170);
            if (bug == 3) canvas.drawImage(medalSecond, 0, 320);
            if (bug == 4) canvas.drawImage(medalSecond, 0, 470);
        }
        if (position == 3) {
            if (bug == 1) canvas.drawImage(medalThird, 0, 20);
            if (bug == 2) canvas.drawImage(medalThird, 0, 170);
            if (bug == 3) canvas.drawImage(medalThird, 0, 320);
            if (bug == 4) canvas.drawImage(medalThird, 0, 470);
        }
        if (position == 4) {
            if (bug == 1) canvas.drawImage(medalFourth, 0, 20);
            if (bug == 2) canvas.drawImage(medalFourth, 0, 170);
            if (bug == 3) canvas.drawImage(medalFourth, 0, 320);
            if (bug == 4) canvas.drawImage(medalFourth, 0, 470);
        }
    }


    var element = document.getElementById("canvas");
    var canvas = element.getContext('2d');
    var background = document.getElementById("background");
    var tarakan = document.getElementById("tarakan");

    var medalFirst = document.getElementById("first");
    var medalSecond = document.getElementById("second");
    var medalThird = document.getElementById("third");
    var medalFourth = document.getElementById("fourth");

    var GO = document.getElementById("goButton");

	/*canvas.drawImage(tarakan,0,20);
	canvas.drawImage(tarakan,0,170);
	canvas.drawImage(tarakan,0,320);
	canvas.drawImage(tarakan,0,470);*/
	
	
	
	//путь каждого жука
	var dx1 = 0;
	var dx2 = 0;
	var dx3 = 0;
	var dx4 = 0;
	//var rn = 0;
    
    //var position = [0,0,0,0,0];

    //позиции на  финише для каждого жука
	var bug1F = 0;
	var bug2F = 0;
	var bug3F = 0;
	var bug4F = 0;

    //диапазон СВ для шага жука
	var max = 6;
	var min = 1;

    //определение направления движения жука: true - вперёд, false - назад
	var bug1V = true;
	var bug2V = true;
	var bug3V = true;
	var bug4V = true;

    //по умолчанию игра остановлена (до нажатия старта)
	var game = false;

	resetGame();

	var draw = function () {
	    if (game == true) {

				gameField(0,0,1024,600);
				
				canvas.drawImage(tarakan,dx1,20);
				canvas.drawImage(tarakan,dx2,170);
				canvas.drawImage(tarakan,dx3,320);
				canvas.drawImage(tarakan,dx4,470);

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
	            }
	    }
			else if (game == false)	{
			    drawMedal(bug1F, 1);
			    drawMedal(bug2F, 2);
			    drawMedal(bug3F, 3);
			    drawMedal(bug4F, 4);
			}

	    GO.onclick = function () {
			    if (!game) {
			        resetGame();
			        game = true;
			    } else {
			        //game = false;
			    }
			};

	}
	setInterval(draw, 25); 
}

addEventListener("load", initiate);