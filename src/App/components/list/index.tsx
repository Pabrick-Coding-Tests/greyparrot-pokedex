import { DataGrid } from '@mui/x-data-grid';
import { columns } from './config';
import { ListElem } from '../../types/types';
import './styles.scss';

type Props = {
	pokeList: ListElem[];
	onSelectRow: (index: number) => void;
};

const PokeList = ({ pokeList, onSelectRow }: Props) => {
	return (
		<DataGrid
			rows={pokeList}
			columns={columns}
			onRowSelectionModelChange={(rowSelectionModel) => {
				onSelectRow(rowSelectionModel[0] as number);
			}}
		/>
	);
};

export default PokeList;
