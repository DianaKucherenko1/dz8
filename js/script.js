let year = prompt("Здравствуйте! Введите свою дату рождения");
let city;
let sport;
let cansel = "Жаль, что вы не хотите ввести свой";
let champion = "Круто!Хочешь стать,"


switch (year){
    case null:
       age = cansel + ' год рождения';
       alert(age);
       break;
    default:
    if(!isFinite(year)){
        age = cansel + 'год рождения';
        alert(age);
    }else{
        age = 2021 - year;
        city = prompt('В каком городе вы живете?', '')
    }
    


switch (city){
    case null:
       city = cansel + 'город';
       alert(city);
       break;
    case'Киев':
       alert('Ты живешь в столице Украины');
       break;
    case'Москва':
       alert('Ты живешь в столице России');
       break;
    case'Минск':
       alert('Ты живешь в столице Беларуси');
       break;
    default:
       alert("Ты живешь в городе " + city);
}
}

sport = prompt("Какой ваш любимый вид спорта?", '')
switch (sport){
    case null:
       city = cansel + 'любимый вид спорта';
       alert(sport);
       break;
    case'Теннис':
       alert( champion  + 'Серена Уильямс?');
       break;
    case'Гимнастика':
       alert(champion  + 'Александра Солдатова?');
       break;
    case'Футбол':
       alert(champion  + 'Криштиану Роналду?');
       break;
    default:
       alert("Твой любимый вид спорта " + sport);
}

alert("Тебе" + year  + "лет" +  city + sport )