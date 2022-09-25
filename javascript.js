let Switch = function () {
    this.setSwitchBtn = function (status, lamp) {
        this.statusSwitch = status;
        this.lampConnected = lamp;
    }
    this.getLampConnected = function () {
        return this.lampConnected;
    }
    this.getStatusSwitch = function () {
        return this.statusSwitch;
    }
    this.setLampConnected = function (lamp) {
        this.lampConnected = lamp;
    }
    this.switchOn = function () {
        this.getLampConnected().statusLamp = true;
        return this.statusSwitch = true;
    }
    this.switchOff = function () {
        this.getLampConnected().statusLamp = false;
        return this.statusSwitch = false;
    }
}

let Lamp = function () {
    this.setLamp = function (status) {
        this.statusLamp = status;
    }
    this.getLampStatus = function () {
        return this.statusLamp;
    }
}

let myLamp = new Lamp();
myLamp.setLamp(false);
let mySwitchBtn = new Switch();
mySwitchBtn.setSwitchBtn(false, myLamp);

for (let i = 0; i < 10; i++) {
    console.log(i);
    console.log(myLamp.getLampStatus());
    console.log(mySwitchBtn.getStatusSwitch());
    document.write((i + 1) + "<br>");
    if (myLamp.getLampStatus()) {
        document.write("Lamp is turning on <br>");
        mySwitchBtn.switchOff();
        document.write("Turn off lamp <br><br>");
    } else {
        document.write("Lamp is turning off <br>");
        mySwitchBtn.switchOn();
        document.write("Turn on lamp <br><br>");
    }
    console.log(myLamp.getLampStatus());
    console.log(mySwitchBtn.getStatusSwitch());
}
