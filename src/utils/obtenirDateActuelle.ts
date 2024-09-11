export const obtenirDateActuelle = (): Date => {
    let dateActuelle = new Date()
    dateActuelle.setHours(12,0,0,0)
    return dateActuelle
}