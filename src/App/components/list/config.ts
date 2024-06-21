import { GridColDef } from '@mui/x-data-grid';
import { ListElem } from '../../types/types';

export const columns: GridColDef<ListElem>[] = [
	{
		field: 'number',
		headerName: 'Number',
	},
	{
		field: 'name',
		headerName: 'Name',
		width: 300,
		cellClassName: 'list__name',
	},
];
