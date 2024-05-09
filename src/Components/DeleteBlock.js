import React from 'react'

const DeleteBlock = () => {

  const deleteTicket = () =>{
    console.log('deleted')
  }

  return (
    <div className='delete-block'>
      <div onClick={deleteTicket} className="delete-icon">X</div>
    </div>
  )
}

export default DeleteBlock