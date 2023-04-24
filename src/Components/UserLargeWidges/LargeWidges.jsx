import React from 'react'

function LargeWidges() {

  const Button = ({type})=>{

    return <button className={ "lgwidgesbtn " + type}>{type}</button>
  }
  // ₹
  return (
    <div className='large-widges'>
    <span className='heading-trans'>Latest Transactions</span>
    <table className='largewidge-table'>
    
     <tr className='largewidge-tabletr'>
    <th className='largewidge-tableth'>Customer</th>
    <th className='largewidge-tableth'>Date</th>
    <th className='largewidge-tableth'>Amount</th>
    <th className='largewidge-tableth'>Status</th>
     </tr>

     <tr className='largewidge-tabletr'>
      <td className='ldwidges-user'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScFO4r1R_iPEfkV2PljLuQI3VXX3zb8zc0yg&usqp=CAU'
          alt='' className='user-img'
         />
        <span className='table-username'>Manoj </span>
        
      </td>
      <td className='lguserdate'>03-March-2023</td>
     <td className='lguseramount'>123105</td>
     <td>
      <Button type="Approved"/>
     </td>
     </tr>

     <tr className='largewidge-tabletr'>
      <td className='ldwidges-user'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScFO4r1R_iPEfkV2PljLuQI3VXX3zb8zc0yg&usqp=CAU'
          alt='' className='user-img'
         />
        <span className='table-username'>Pavitra</span>
        
      </td>
      <td className='lguserdate'>03-March-2023</td>
     <td className='lguseramount'>123105</td>
     <td>
      <Button type="Declined"/>
     </td>
 </tr>

     <tr className='largewidge-tabletr'>
      <td className='ldwidges-user'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScFO4r1R_iPEfkV2PljLuQI3VXX3zb8zc0yg&usqp=CAU'
          alt='' className='user-img'
         />
        <span className='table-username'>Harshith</span>
        
      </td>
      <td className='lguserdate'>03-March-2023</td>
     <td className='lguseramount'>123105</td>
     <td>
      <Button type="Pending"/>
     </td>
     </tr>

      <tr className='largewidge-tabletr'>
      <td className='ldwidges-user'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScFO4r1R_iPEfkV2PljLuQI3VXX3zb8zc0yg&usqp=CAU'
          alt='' className='user-img'
         />
        <span className='table-username'>Kushal</span>
        
      </td>
      <td className='lguserdate'>03-March-2023</td>
     <td className='lguseramount'>123105</td>
     <td>
      <Button type="Approved"/>
     </td>
     </tr>
     <tr className='largewidge-tabletr'>
      <td className='ldwidges-user'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScFO4r1R_iPEfkV2PljLuQI3VXX3zb8zc0yg&usqp=CAU'
          alt='' className='user-img'
         />
        <span className='table-username'>Ankita</span>
        
      </td>
      <td className='lguserdate'>03-March-2023</td>
     <td className='lguseramount'>123105</td>
     <td>
      <Button type="Approved"/>
     </td>
     </tr>

    </table>
   </div>
  )
}

export default LargeWidges