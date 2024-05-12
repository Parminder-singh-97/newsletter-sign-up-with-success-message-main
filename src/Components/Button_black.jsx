import React from 'react'

const Button_black = (props) => {
  return (
    <>
      <button onClick={props.click_fn} className='btn_black' type='submit'  >{props.name}</button>
    </>
  )
}

export default Button_black
