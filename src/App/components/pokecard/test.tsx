import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PokeCard from '.';

describe('PokeCard component', () => {
	let cardComp: HTMLElement;
	let name: HTMLElement;
	let types: HTMLElement;
	let abilities: HTMLElement;

	const idMock = 20;
	const nameMock = 'this-is-a-test';
	const typeMock = ['type 1', 'type 2'];
	const abilitiesMock = ['ability 1', 'ability 2'];

	beforeEach(() => {
		render(
			<PokeCard
				id={idMock}
				order={0}
				image={'no-image'}
				name={nameMock}
				types={typeMock}
				abilities={abilitiesMock}
			/>
		);
		cardComp = screen.getByTestId('pokecard');
		name = screen.getByTestId('name');
		types = screen.getByTestId('types');
		abilities = screen.getByTestId('abilities');
	});

	test('renders in document', () => {
		expect(cardComp).toBeInTheDocument();
	});

	describe('when data is provided', () => {
		test('show name formated name', () => {
			expect(name).toHaveTextContent('this is a test');
		});

		test('show name formated types', () => {
			expect(types).toHaveTextContent('type 1, type 2');
		});

		test('show name formated abilities', () => {
			expect(abilities).toHaveTextContent('ability 1, ability 2');
		});
	});
});
