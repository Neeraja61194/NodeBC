let year = 2017;
let champion = null;
let message = null;
switch (year){
    case 2006:
        champion = 'Carolina Hurricanes';
        message = `${champion} was the ${year} NHL Champion`
        break;
    case 2007:
        champion = 'Anaheim Ducks';
        message = `${champion} was the ${year} NHL Champion`
        break;
    case 2008:
        message = `Detroit Red Wings was the ${year} NHL Champion`
        break;
    
    case 2009:
        message = `Pittsburgh Penguinas was the ${year} NHL Champion`
        break;
    case 2010:
        message = `Chicago Blackhawks was the ${year} NHL Champion`
        break;
    case 2011:
        message = `Boston Bruins was the ${year} NHL Champion`
        break;
    case 2012:
        message = `Los Angeles Kings was the ${year} NHL Champion`
        break;
    case 2013:
        message = `Chicago Blackhawks was the ${year} NHL Champion`
        break;
    case 2014:
        message = ` Los Angeles Kings was the ${year} NHL Champion`
        break;
    case 2015:
        message = `Chicago Blackhawks was the ${year} NHL Champion`
        break;
    case 2016:
        message = `Pittsburgh Penguins was the ${year} NHL Champion`
        break;
    case 2017:
        message = `Pittsburgh Penguins was the ${year} NHL Champion`
        break;
    default :
        message = "Sorry, please try a differnt year"
}
console.log(message)