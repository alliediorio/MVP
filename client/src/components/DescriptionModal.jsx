import React from 'react';

const DescriptionModal = (props) => {

  const closeModal = () => {
    props.modal(false)
  }

  return (
    <div className='description-modal'>
      <div className='modal-header'>
        <h1>{props.parkName}</h1>
      </div>
      <div className='modal-body'>
        {props.desc}
      </div>
      <br></br>
      <div>
        <img className='pic' src={props.pics[0].url}></img>
      </div>
      <br></br>
      <div className='modal-footer'>
        <button className='modal-button' onClick={closeModal}>Close</button>
      </div>
    </div>
  )
}

export default DescriptionModal;