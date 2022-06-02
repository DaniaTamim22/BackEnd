import CustomerRow from './CustomerRow';

const CustomerList = ({ customers, removeCustomer }) => {
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
				<tbody>
					{customers.map((customer) => (
						<CustomerRow key={customer.id} customer={customer} removeCustomer={removeCustomer} />
					))}

					{!customers.length && (
						<tr>
							<td>No customers to show</td>
							<td />
							<td />
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
};

export default CustomerList;
