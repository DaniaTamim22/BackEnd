import { useState } from 'react';
import CustomerRow from './CustomerRow';

const CustomerList = () => {
	const [ customers, setcustomers ] = useState([
		{ id: '23243guy8', name: 'Dania' },
		{ id: '7gff6t843', name: 'Zain' }
	]);
	return (
		<div>
			<table className="table mt-5">
				<thead>
					<tr>
						<th>#</th>
						<th>Customer Name</th>
						<tr />
					</tr>
				</thead>
				<tbody>{customers.map((customer) => <CustomerRow key={customer.id} customer={customer} />)}</tbody>
			</table>
		</div>
	);
};

export default CustomerList;
