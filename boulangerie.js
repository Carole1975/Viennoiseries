var Produit = function(nom, prix) {
    this.nom = nom;
    this.prix = prix;
};

var TVA = 5.5;
var montantTVA = (1+TVA/100);

var Panier = function() {
    this.totalHT = 0;
    this.totalTTC = 0;
    this.ajoute = function(objet) {
        this.totalHT = Math.round((this.totalHT + objet.prix) * 100) / 100;
        this.totalTTC = Math.round((this.totalHT * montantTVA) * 100) / 100;
    };
    
    this.retire = function(objet) {
        this.totalHT = Math.round((this.totalHT - objet.prix) * 100) / 100;
        this.totalTTC = Math.round((this.totalHT * montantTVA) * 100) / 100;
    };
};

var baguette = new Produit("Baguette", 0.85);
var croissant = new Produit("Croissant", 0.80);
var panier = new Panier();
panier.ajoute(baguette);
panier.ajoute(croissant);

console.log("Total baguette et croissant");
console.log(panier.totalHT+"HT");
console.log(panier.totalTTC+"TTC");
console.log("Avec chocolatine total");

var chocolatine = new Produit("chocolatine", 0.80);
panier.ajoute(chocolatine);

console.log(panier.totalHT+"HT");
console.log(panier.totalTTC+"TTC");
console.log("Sans chocolatine total");

panier.retire(chocolatine);
console.log(panier.totalHT+"HT");
console.log(panier.totalTTC+"TTC");

var Viennoiserie = Object.create(Produit);
Viennoiserie.fraiche = true;

if (Viennoiserie.fraiche) {
  console.log("Bon appétit!");
}
