import React from 'react'

function AddNewproduct() {
  return (
    <div className='newProduct'>
     <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
      
        <div className="addProductItem">
          <label>Image</label>
          <input className='fileinput' type="file" id="file" />
        </div>

        <div className="addProductItem">
          <label>Name</label>
          <input type="text" placeholder="Samsung mobile" />
        </div>

        <div className="addProductItem">
          <label>Stock</label>
          <input type="text" placeholder="113" />
        </div>

        <div className="addProductItem">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <button className="addProductButton">ADD</button>
      </form>
    </div>
  )
}

export default AddNewproduct