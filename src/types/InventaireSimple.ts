
export interface InventaireSimple{
    produitId: string,
    magasinId: string,
    date: Date,
    stock: number | undefined //Est undefined lorsque le stock pour ce jour n'a pas encore été spécifié

}