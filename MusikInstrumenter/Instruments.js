class Instrument{
    name;
    sound;

    constructor(){

    }

}

class Saxophone extends Instrument{
    material;

    constructor(name, material){
        super();
        this.name = name;
        this.material = material;
        this.sound = document.getElementById("SaxSound");
    }
}

class Flute extends Instrument{
    holes;
    material;

    constructor(name, holes, material){
        super();
        this.name = name;
        this.holes = holes;
        this.material = material;
        this.sound = document.getElementById("FluteSound");
    }
}

class Stringed extends Instrument{
    numberOfStrings;
    constructor(){
        super();
    }
}

class Harp extends Stringed{
    height;

    constructor(name, numberOfStrings, height){
        super();
        this.name = name;
        this.numberOfStrings = numberOfStrings;
        this.height = height;
        this.sound = document.getElementById("HarpSound");
    }
}

class Guitar extends Stringed{
    material;

    constructor(name, numberOfStrings, material){
        super();
        this.name = name;
        this.numberOfStrings = numberOfStrings;
        this.material = material
        this.sound = document.getElementById("GuitarSound");
    }
}

//Create The 4 Different Instruments
let saxophone = new Saxophone("Saxophone", "Copper");
let flute = new Flute("Flute", 16, "Bamboo");
let harp = new Harp("Harp", 47, "160CM");
let guitar = new Guitar("Guitar", 6, "Wood");

var fluteP,saxP,guitarP,harpP;
    fluteP = "Name: " + flute.name + " Holes: " + flute.holes+ " Material: " + flute.material;
    saxP = "Name: " +saxophone.name + " Material: " + saxophone.material;
    guitarP = "Name: " + guitar.name + "Number Of Strings: " + guitar.numberOfStrings + "Material" + guitar.material;
    harpP = "Name: " + harp.name + " Height: " + harp.height + " Number Of Strings: " + harp.numberOfStrings;

window.onload = function(){
    document.getElementById("flute").innerHTML = fluteP;
    document.getElementById("sax").innerHTML = saxP;
    document.getElementById("guitar").innerHTML = guitarP;
    document.getElementById("harp").innerHTML = harpP;
}

//Decides which what click it was and plays the correct sound
function SoundPlay(instrument){
    if(instrument == saxophone.name){
        saxophone.sound.play()
    }else if(instrument == flute.name){
        flute.sound.play();
    }else if(instrument == harp.name){
        harp.sound.play();
    }else if(instrument == guitar.name){
        guitar.sound.play();
    }
}