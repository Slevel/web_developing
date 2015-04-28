function sun(x, y, r)	{	// �����, �������� ������
    this.x = x; // ���������� �
    this.y = y; // ���������� �
	this.r = r; // ������
    this.draw = function(context)	{	// �����, �������� ������
		this.gradient_sun = context.createRadialGradient(this.x, this.y, this.r/4, this.x, this.y, this.r);
		this.gradient_sun.addColorStop(0, '#ffff00');
		this.gradient_sun.addColorStop(1, "rgba(249, 255, 184 ,0)"); 
        context.fillStyle = this.gradient_sun;
        context.fillRect(this.x - this.r, this.y - this.r, this.r*2, this.r*2);
    };
}

function moon(x, y, r)	{	// ����
    this.x = x;
    this.y = y;
	this.r = r;
    this.draw = function(context)	{
		this.gradient_moon = context.createRadialGradient(this.x, this.y, this.r/4, this.x, this.y, this.r);
		this.gradient_moon.addColorStop(0, '#fffdd0');
		this.gradient_moon.addColorStop(0.28, '#ffffcc');
		this.gradient_moon.addColorStop(0.36, "rgba(255, 255, 133 ,0)"); 
        context.fillStyle = this.gradient_moon;
        context.fillRect(this.x - this.r, this.y - this.r, this.r*2, this.r*2);
    };
}

function day(x, y, width, height) // ������� ���
{
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.draw = function(context) {
		this.gradient_background = context.createLinearGradient(this.x, this.y, 0, this.height);
		this.gradient_background.addColorStop(0, '#42aaff');
		this.gradient_background.addColorStop(0.80, '#dcf1fa');
		this.gradient_background.addColorStop(0.814, '#008000');
		this.gradient_background.addColorStop(1, '#00e600');
		context.fillStyle = this.gradient_background;
        context.fillRect(this.x, this.y, this.width, this.height);
    };
}

function night(x, y, width, height) // ������ ���
{
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.draw = function(context) {
		this.gradient_background = context.createLinearGradient(this.x, this.y, 0, this.height);
		this.gradient_background.addColorStop(0, '#002137');
		this.gradient_background.addColorStop(0.78, '#224c6e');
		this.gradient_background.addColorStop(0.834, '#004d20');
		this.gradient_background.addColorStop(1, '#145214');
		context.fillStyle = this.gradient_background;
        context.fillRect(this.x, this.y, this.width, this.height);
    };
}


function init()	{
	// �������������
	current_time = 'day'; // ��������� ����� �����
	// ������� �������
	var background_day = new day(0, 0, 1024, 720);
	var sun_onSky = new sun(-160, 300, 80);
	//������ �������
	var background_night = new night(0, 0, 1024, 720);
	var moon_onSky = new moon(-160, 300, 80);
	// �������� �������� �� ��� �������
    var vX = 2;
	// �������� �������� �� ��� �������
    var vY = 0.2;
	// ������������� canvas'a � ��������
    var element = document.getElementById("landscape");
	// ������� �����
    element.width = background_day.width;
    element.height = background_day.height;
    var context = element.getContext("2d");
	//������������� ����� � ���������
    var scene = new anim(element, 50, false);
	
    scene.draw(function() {
		if (current_time == 'night')	{
			background_night.draw(context);
			moon_onSky.draw(context);
		}
		if (current_time == 'day')	{
			background_day.draw(context);
			sun_onSky.draw(context);
		}
    });
	
    scene.update(function()	{
	// ��������� �������� ���� (���� ����)
	if (current_time == 'night')	{
        if (moon_onSky.x - moon_onSky.r < -320 || moon_onSky.x + moon_onSky.r > 1184)	{
            current_time = 'day'
			sun_onSky.x = -160;
			sun_onSky.y = 300;
        }
		if (moon_onSky.x < 128) moon_onSky.y -=3*vY;
			else if (moon_onSky.x < 256) moon_onSky.y -=2*vY;
				else if (moon_onSky.x < 380) moon_onSky.y -=1.5*vY;
					else if (moon_onSky.x < 480) moon_onSky.y -=1*vY;
						else if (moon_onSky.x < 500) moon_onSky.y -=0.5*vY;
							else if (moon_onSky.x < 524) moon_onSky.y -=0*vY;
								else if (moon_onSky.x < 568) moon_onSky.y -=0.5*vY;
									else if (moon_onSky.x < 640) moon_onSky.y +=1.5*vY;
										else if (moon_onSky.x < 768) moon_onSky.y +=2*vY;
											else moon_onSky.y +=3*vY;
			moon_onSky.x += vX;
	}
		
	// ��������� �������� ������ (���� ����)
	if (current_time == 'day')	{
		if (sun_onSky.x - sun_onSky.r < -320 || sun_onSky.x + sun_onSky.r > 1184)	{
            current_time = 'night'
			moon_onSky.x = -160;
			moon_onSky.y= 300;
        }
		if (sun_onSky.x < 128) sun_onSky.y -=4*vY;
			else if (sun_onSky.x < 256) sun_onSky.y -=3*vY;
				else if (sun_onSky.x < 380) sun_onSky.y -=2*vY;
					else if (sun_onSky.x < 480) sun_onSky.y -=1.5*vY;
						else if (sun_onSky.x < 524) sun_onSky.y -=0*vY;
							else if (sun_onSky.x < 568) sun_onSky.y +=1.5*vY;
								else if (sun_onSky.x < 640) sun_onSky.y +=2*vY;
									else if (sun_onSky.x < 768) sun_onSky.y +=3*vY;
											else sun_onSky.y +=4*vY;
        sun_onSky.x += vX;
	}    });
	
	if (current_time == 'night')	{
		background_night.draw(context);
		moon_onSky.draw(context);
	}
	if (current_time == 'day')	{
		background_day.draw(context);
		sun_onSky.draw(context);
	}
	
    var click = false;
    // �� ������ ���� ���������
    element.onclick = function() {
        if (!click) {
            click = true;
            scene.play();
        } else {
            click = false;
            scene.stop();
        }
    };
}