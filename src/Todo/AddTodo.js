import React, { useState } from 'react'
import PropTypes from 'prop-types'

function AddTodo({ onCreate }) {
  const [value, setValue] = useState('')

  function submitHandler(event) {
    event.preventDefault()

    if (value.trim()) {
      onCreate(value)
      setValue('')
    }
  }

  return (
    <form className="input-group mb-4" onSubmit={submitHandler}>
      <input className="form-control" value={value} onChange={event => { setValue(event.target.value) }} />
      <button className="btn btn-primary" type="submit">Добавити</button>
    </form>
  )
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired
}

export default AddTodo