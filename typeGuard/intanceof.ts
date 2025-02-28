class Remote {
    switchOffTv(){
        console.log("Switching off AC");
    }
}

class CarRemote{
    switchOffCar(){
        console.log("Switching off car");
    }
}

const ac = new Remote();
const car = new CarRemote();

function switchOffDevices(device: Remote | CarRemote) {
    if(device instanceof Remote){
        device.switchOffTv()
    }
    else {
        device.switchOffCar()
    }
}