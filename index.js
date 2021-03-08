// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver,key,value){
    const newDrivers = {...driver};
    newDrivers[key] = value;
    return newDrivers;
};

function destructivelyUpdateDriverWithKeyAndValue(driver,key,value){
    driver[key] = value;
    return driver
};

function deleteFromDriverByKey(driver,key){
    const newDriver = {...driver};
    delete newDriver['name']
    return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver['name']
    return driver
}