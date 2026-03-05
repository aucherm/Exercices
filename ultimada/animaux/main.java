abstract class Animal { 
    private int nbrDePatte; 
    private String pellage;
    private String cri;
    private String capacite;
    private String habitatNaturel;
    private String regime;
};

abstract class Mammifere extends Animal {
    public Mammifere(int nbrDePatte, String pellage, String cri, String capacite, String habitatNaturel, String regime) {
super(nbrDePatte, pellage: "poils", cri, capacite, habitatNaturel, regime);
};
}
