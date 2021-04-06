class Instrument{
    name;

    playSound(sound){

    }
}

class Saxophone extends Instrument{
    material;

    Saxophone(material){

    }
}

class Flute extends Instrument{
    holes;
    material;

    Flute(holes, material){

    }
}

class Stringed extends Instrument{
    numberOfStrings;

    Stringed(numberOfStrings){

    }
}

class Harp extends Stringed{
    height;

    Harp(height){
        
    }
}

class Guitar extends Stringed(){
    material;

    Guitar(material){
        this.name = "Guitar";
        this.numberOfStrings = 6;
        this.material = material;
    }
}