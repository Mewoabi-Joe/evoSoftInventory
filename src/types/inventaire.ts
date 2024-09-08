export interface Inventaire {
	date: string;
	produitId: string;
	stock: Record<string, number>; // Record<magasinId, stock>
}
