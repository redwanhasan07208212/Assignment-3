//1:Kilometer to Meter Program Start:
function kilometerToMeter(kilo)
{
    if(kilo<0)
    {
        return ("Distance can not be negetive.");
    }
    else {
        return meter=kilo*1000;
    }
    
}

var Neg_Distance= kilometerToMeter(-2);
console.log(Neg_Distance);
var Pos_Distance = kilometerToMeter(2);
console.log(Pos_Distance)


//2:Budget Calculator Start:

function budgetCalculator(watch,phone,laptop)
{
    if(watch<0)
    {
        return ("Watch Number can not be negetive");
    }
    else {
        var Price1= watch*50;
    }
    if(phone<0)
    {
        return ("Phone Number can not be negetive");
    }
    else {
        var Price2= phone*100;
    }
    if(laptop<0)
    {
        return ("Laptop Number can not be negetive");
    }
    else {
        var Price3= laptop*500;
    }


    var total= Price1+Price2+Price3;
    return (total);
}
var calculator = budgetCalculator(5,6,7);
console.log("Total Price",calculator);


//3: Hotel Cost Start:

function hotelCost(Days)
{
    if(Days<0)
    {
        return ("Undefined");
    }
    var Payment= 0;
    if(Days<=10)
    {
       Payment = Days*100;
    }
    else if(Days<=20)
    {
        var firstPayment= 10*100;
        var remainingDays = Days - 10;
        var secondPayment = remainingDays*80;
        Payment = firstPayment + secondPayment;
    }
    else 
    {
        var firstPayment= 10*100;
        var secondPayment = 10*80;
        var remainingDays = Days - 20;
        var thirdPayment = remainingDays*50;
        Payment = firstPayment + secondPayment + thirdPayment;
    }
    return (Payment);
}

var cost = hotelCost(55);
console.log(cost);

//4: Mega Friend Start
function megaFriend(names)
{
    maxword=names[0];
    for(var i=0; i<names.length;i++)
    {
        var element = names[i];
        if(element.length>maxword.length)
        {
            maxword=element;
        }
    }
    return (maxword);
}

var names=['Redwan', 'Samim', 'Osman', 'Jalila','Etu', 'Mosarraf','Osmahana'];
var maxLength= megaFriend(names);
console.log(maxLength);