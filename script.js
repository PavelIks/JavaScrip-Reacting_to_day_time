sayTime(function()
{  
    document.getElementById('TimeID');
});

function sayTime()
{
    var now = new Date();
    var hours = now.getHours()
    var divider = ":";
    if (now.getMinutes() < 10)
    {
        divider = ":0";
    }
    var time = "" + hours + divider + now.getMinutes();
    document.write("Сейчас <b>" + time + "</b> и мы желаем Вам");
    if (hours < 5 || hours > 19)
    {
        document.write(" спокойной ночи!");
    }
    else if (hours < 11 || hours > 6)
    {
        document.write(" доброго утра!");
    }
    else if (hours > 11 || hours < 17)
    {
        document.write(" доброго дня!");
    }
    else if (hours > 18 || hours < 0)
    {
        document.write(" доброго вечера!");
    }
}

/*function getHourOfDay()
{
    var now = new Date();
    return (now.getHours());
}

function getTime()
{
    var now = new Date();
    var minutes = now.getMinutes();
    var divider = ":";

    if (minutes < 10)
    {
        divider = ":0";
    }
    if (navigator.appVersion.lastIndexOf('3.') != -1 && navigator.appName.lastIndexOf('Netscape') != -1)
    return (now.getHours() - 1 + divider + minutes);
    {
        return (now.getHours() + divider + minutes);
    }
}

function sayHello()
{
    document.write("Сейчас <b>" + getTime() + "</b>, поэтому мы желаем Вам");
    if (getHourOfDay() < 5 || getHourOfDay() > 19)
    {
        document.write(' спокойной ночи!');
    }
    else
    {
        if (getHourOfDay() < 11)
        {
            document.write(' доброго утра!');
        }
        else
        {
            document.write(' хорошей работы!');
        }
    }
}*/