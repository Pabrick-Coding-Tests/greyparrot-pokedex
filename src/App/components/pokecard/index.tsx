import { Typography } from '@mui/material';
import {
	LabelStyled,
	PokeCardDataRowStyled,
	PokeCardDataStyled,
	PokeCardImageStyled,
	PokeCardStyled,
	ValueStyled,
} from './styles.ts';

type Props = {
	id: number;
	order: number;
	name: string;
	image: string;
	types: string[];
	abilities: string[];
};

const PokeCard = ({ id, name, image, types, abilities }: Props) => {
	return (
		<PokeCardStyled data-testid='pokecard'>
			<PokeCardImageStyled>
				<img src={image} />
			</PokeCardImageStyled>
			<PokeCardDataStyled>
				<Typography variant='h3' sx={{ textTransform: 'capitalize', mb: 4 }} data-testid='name'>
					{name.split('-').join(' ')}
				</Typography>

				<PokeCardDataRowStyled>
					<LabelStyled variant='body1'>Number:</LabelStyled>
					<Typography variant='body1'>{id}</Typography>
				</PokeCardDataRowStyled>

				<PokeCardDataRowStyled>
					<LabelStyled variant='body1'>Types:</LabelStyled>
					<ValueStyled variant='body1' data-testid='types'>
						{types.join(', ')}
					</ValueStyled>
				</PokeCardDataRowStyled>

				<PokeCardDataRowStyled>
					<LabelStyled variant='body1'>Abilties:</LabelStyled>
					<ValueStyled variant='body1' data-testid='abilities'>
						{abilities.join(', ')}
					</ValueStyled>
				</PokeCardDataRowStyled>
			</PokeCardDataStyled>
		</PokeCardStyled>
	);
};

export default PokeCard;
