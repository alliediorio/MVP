import React from 'react';

const WinningModal = (props) => {

  const closeModal = () => {
    props.modal(false)
  }

  return (
    <div className='winning-modal'>
        <div className='modal-header'>
          <h4 className='modal-title'></h4>
        </div>
        <div className='win-modal-body'>
        COMPLETE!
        </div>
        <div className='percent'>You got <u className='number'>{Math.ceil(props.count/props.parkCount * 100)}</u>% Correct</div>
        <br></br>
        <div>
          <img src={'https://bosguydotcom.files.wordpress.com/2017/08/giphy-1.gif'}></img>
        </div>
        <br></br>
        <div className='modal-footer'>
          <button className='modal-button' onClick={closeModal}>Close</button>
        </div>
    </div>
  )
}

export default WinningModal;