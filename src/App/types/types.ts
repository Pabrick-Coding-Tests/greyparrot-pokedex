export type UnknownResponse = {
	[key: string]: unknown;
};

export type ApiNode = {
	name: string;
	url: string;
};

export type ListElem = {
	id: number;
	number: number;
	name: string;
	apiUrl: string;
};

export type PokemonData = {
	id: number;
	order: number;
	name: string;
	image: string;
	types: string[];
	abilities: string[];
};
export type PokemonResponse = {
	id: number;
	order: number;
	name: string;
	sprites: {
		front_default: string;
		other: {
			'official-artwork': {
				front_default: string;
			};
		};
	};
	types: Array<{ type: ApiNode }>;
	abilities: Array<{ ability: ApiNode }>;
};
