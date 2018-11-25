function Habitation(adresse, habitant)
{
    this.adresse = adresse;
    this.habitant = habitant;
    this.bal = {
        courriers: [],
        deposerCourrier: function(courrier)
        {
            this.courriers.push(courrier);
        },
        retirerCourrier: function()
        {
            adresse.habitant = courriers;
            courriers = [];
        }
    }
}

maison1 = new Habitation("Chemin des développeurs","Mr et Mde Patate");
maison2 = new Habitation("Route de Castelnau", "Barbie & Ken");

