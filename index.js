const distanceFromHqInBlocks = function(street) {
    const hqStreet = 42;
    return typeof street === "number" ? Math.abs(street - hqStreet) : "Error";
}

const distanceFromHqInFeet = function(street) {
    const hqStreet = 42;
    return typeof street === "number" ? Math.abs((street - hqStreet)*264) : "Error";
}

const distanceTravelledInFeet = function(street1,street2) {
    return typeof street1 === "number" && typeof street2 === "number" ? Math.abs((street1 - street2)*264) : "Error";
}

const calculatesFarePrice = function(street1,street2) {
     const distinceInFeet = distanceTravelledInFeet(street1,street2);
     if(distinceInFeet !== 'Error'){
        if(distinceInFeet < 400){
            return 0;
        } else if(distinceInFeet >= 400 && distinceInFeet <= 2000){
            return (distinceInFeet - 400) * .02;
        } else if(distinceInFeet > 2000 && distinceInFeet <= 2500) {
            return 25;
        } else {
            return "cannot travel that far";
        }
     } else {
        return distinceInFeet;
     }
}