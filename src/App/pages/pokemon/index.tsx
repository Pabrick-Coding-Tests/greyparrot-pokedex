import { Box, Button, Card } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { PokemonAPI } from '../../../api/PokemonAPI';
import PokeCard from '../../components/pokecard';
import { PageStyled } from '../styles';
import { PokemonData } from '../../types/types';

const PokemonPage = () => {
	const navigate = useNavigate();
	const goToList = () => navigate('/');
	const goToPokemon = (number: number) => navigate(`/pokemon/${number}`);

	const { index } = useParams();
	const [pokeData, setPokeData] = useState<PokemonData>();
	const [isLoading, setLoading] = useState<boolean>(true);

	const handleClickPrevious = () => {
		setLoading(true);
		const safeIndex = index || '0';
		const prevIndex = parseInt(safeIndex, 10) - 1;
		goToPokemon(prevIndex);
	};

	const handleClickNext = () => {
		setLoading(true);
		const safeIndex = index || '0';
		const prevIndex = parseInt(safeIndex, 10) + 1;
		goToPokemon(prevIndex);
	};

	useEffect(() => {
		PokemonAPI.get(index).then((res) => {
			setPokeData(res);
			setLoading(false);
		});
	}, [index]);

	return (
		<PageStyled className='pokemon-page'>
			{pokeData ? (
				<PokeCard
					id={pokeData?.id}
					order={pokeData?.order}
					name={pokeData?.name}
					image={pokeData.image}
					types={pokeData.types}
					abilities={pokeData.abilities}
				/>
			) : (
				<Card>No pokemon found</Card>
			)}
			<Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
				<Button
					onClick={handleClickPrevious}
					disabled={isLoading || index === '1'}
					type='button'
					variant='contained'
					sx={{ width: '25%' }}
				>
					{isLoading ? 'Loading previous' : 'Go to previous'}
				</Button>

				<Button onClick={goToList} type='button' variant='contained' sx={{ width: '25%' }}>
					Back to list
				</Button>

				<Button
					onClick={handleClickNext}
					disabled={isLoading || index === '10277'}
					type='button'
					variant='contained'
					sx={{ width: '25%' }}
				>
					{isLoading ? 'Loading next' : 'Go to next'}
				</Button>
			</Box>
		</PageStyled>
	);
};

export default PokemonPage;
