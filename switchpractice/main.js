function myFunction(){
    var elem = document.getElementById('chooseMe')
    var fortuneNum = elem.options[elem.selectedIndex].value
    var fortuneMessage
    console.log(fortuneNum)

    switch (Number(fortuneNum)) {
        case 1:
        case 6:
        case 5:
            fortuneMessage = 'you will receive a bonus'
        break;
        case 2:
        case 7:
        case 10:
            fortuneMessage = 'enjoy your new car'
        break;
        case 3:
        case 9:
            fortuneMessage = 'did your new computer come in?'
        break;
        case 4:
        case 8:
            fortuneMessage = 'do you like your new house?'
            break;
        default:
            fortuneMessage = 'sorry, you didnt win today'
    } // end switch

    document.getElementById('feedback').innerHTML = fortuneMessage
}