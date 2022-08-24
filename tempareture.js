class Tempareture  {
    cDegree;
    constructor( cDegree) {
        this.cDegree = cDegree;
    }
    fDegree() {
        return 9/5*this.cDegree + 32;
    }
    kDegree() {
        return this.cDegree + 273;
    }
}
let tempareture = new Tempareture(25);
let  f = tempareture.fDegree();
let k = tempareture.kDegree();
document.write("Nhiệt độ F :" + f +"<br>" + "Nhiệt độ K :" + k);

