import { useState } from 'react';

const AddCustomerForm = ({ addCustomer }) => {
	const [ customerName, setCustomerName ] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		if (customerName.trim() === '') return;

		addCustomer(customerName);
		setCustomerName('');
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className="text-center mb-4">
					<h2>Add Customer</h2>
				</div>
				<div className="input-group">
					<input
						type="text"
						placeholder="Enter customer name"
						className="form-control"
						value={customerName}
						onChange={(e) => {
							setCustomerName(e.target.value);
						}}
					/>
					<button className="btm btn-primary">Add Customer</button>
				</div>
			</form>
		</div>
	);
};

export default AddCustomerForm;
