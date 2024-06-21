import axios from 'axios';
import { ListElem, PokemonData, PokemonResponse, ApiNode } from '../App/types/types';

const pokeAPI = 'https://pokeapi.co/api/v2/pokemon/';

const shapeList = (list: ApiNode[]): ListElem[] => {
	return list.map((elem: ApiNode, index: number) => ({
		id: index,
		number: index + 1,
		name: elem.name,
		apiUrl: elem.url,
	}));
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const shapeData = (data: PokemonResponse): PokemonData => {
	return {
		id: data.id,
		order: data.order,
		name: data.name,
		image: data.sprites.other['official-artwork'].front_default || data.sprites.front_default,
		types: data.types.map((type) => type.type.name),
		abilities: data.abilities.map((ability) => ability.ability.name),
	};
};

export const PokemonAPI = {
	get: async function (index: string = '0') {
		try {
			// Sanitise the query to avoid malicious injections
			const sanitiseIndex = parseInt(index, 10);
			const url = `${pokeAPI}${sanitiseIndex}/`;
			const response = await axios.get(url);
			console.log('response', response);
			return shapeData(response.data);
		} catch (error) {
			console.error('GET - Error:', error);
		}
	},
	getAll: async function () {
		try {
			const url = `${pokeAPI}?offset=0&limit=100000`;
			const response = await axios.get(url);
			return shapeList(response.data.results) || [];
		} catch (error) {
			console.error('GETALL - Error:', error);
		}
	},
};
