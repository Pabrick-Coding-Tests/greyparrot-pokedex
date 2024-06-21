import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Card, Typography } from '@mui/material';
import { PokemonAPI } from '../../../api/PokemonAPI';
import PokeList from '../../components/list';
import { ListElem } from '../../types/types';
import { PageStyled } from '../styles';

const ListPage = () => {
	const navigate = useNavigate();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const goToPokemon = (number: number) => navigate(`/pokemon/${number}`);
	const [pokeList, setPokeList] = useState<ListElem[]>([]);

	const handleRowSelected = useCallback(
		(index: number) => {
			goToPokemon(pokeList[index].number);
		},
		[pokeList, goToPokemon]
	);

	const pokeListMemo = useMemo(() => {
		return <PokeList pokeList={pokeList} onSelectRow={handleRowSelected} />;
	}, [pokeList, handleRowSelected]);

	useEffect(() => {
		PokemonAPI.getAll().then((list) => {
			if (list) {
				setPokeList(list);
			}
		});
	}, []);

	return (
		<PageStyled className='list-page'>
			<Typography variant='h2' sx={{ textAlign: 'center', mb: 2 }}>
				Pokelist
			</Typography>
			<Card>{pokeListMemo}</Card>
		</PageStyled>
	);
};

export default ListPage;
