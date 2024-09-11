import { Codec } from "@toolpad/core";
import { Inventaire } from "../types/inventaire";

export const INVENTAIRES_CODEC: Codec<Inventaire[]> = {
	parse: (inventairesString) => JSON.parse(inventairesString),
	stringify: (inventaires) => JSON.stringify(inventaires),
};