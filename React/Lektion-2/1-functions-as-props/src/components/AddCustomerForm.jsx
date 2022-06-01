import React from 'react'

const AddCustomerForm = () => {
  return (
    <div>
        <form>
            <div className="text-center mb-4">
                <h2>Add Customer</h2>
             </div>
             <div className="input-group">
                 <input type="text" placeholder='Enter customer name' className='form-control'/>
             <button className='btm btn-primary'>Add Customer</button>
             </div>
        </form>
    </div>
  )
}

export default AddCustomerForm