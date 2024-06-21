import { Box, Card, Typography, styled } from '@mui/material';

export const PokeCardStyled = styled(Card)({
	color: 'darkslategray',
	backgroundColor: 'aliceblue',
	padding: '24px',
	borderRadius: '16px',
	display: 'grid',
	gridTemplateColumns: 'min-content auto',
});

export const PokeCardImageStyled = styled(Box)({
	gridColumnStart: '1',
	gridColumnEnd: '2',
	gridRowStart: '1',
	gridRowEnd: '1',
});

export const PokeCardDataStyled = styled(Box)({
	gridColumnStart: '2',
	gridColumnEnd: '3',
	gridRowStart: '1',
	gridRowEnd: '1',
});

export const PokeCardDataRowStyled = styled(Box)({
	display: 'flex',
	flexDirection: 'row',
	margin: '2px 0',
	padding: '4px 0',
	borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
});

export const LabelStyled = styled(Typography)({
	fontWeight: 'bold',
	flexDirection: 'row',
	marginRight: '8px',
});

export const ValueStyled = styled(Typography)({
	textTransform: 'capitalize',
});
