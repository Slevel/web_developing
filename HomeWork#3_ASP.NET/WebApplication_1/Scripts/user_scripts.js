function aboutUser()	{
	name = document.forms["form_1"].elements["name"].value;
	surname = document.forms["form_1"].elements["surname"].value;
	age = document.forms["form_1"].elements["age"].value;
	gender = document.forms["form_1"].elements["gender"].value;
	if (name !== '' && surname !== '' && age !== '' )	{
		alert('Добрый день, уважаемый Пользователь!\n\nИнформация о Вас:\nИмя: '+ name + '\nФамилия: ' + surname + '\nВозраст: ' + age + '\nПол: ' + gender);
	}
	else alert('Пожалуйста, введите данные!');
}