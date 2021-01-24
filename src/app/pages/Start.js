import React, { useState } from 'react'
import { NavBar } from '../components'
import axios from 'axios'

const Start = () => {
  const [issue, setIssue] = useState('')
  const [getDBStatus, setDBStatus] = useState(false)
  const [getDBStatusMSG, setDBStatusMSG] = useState('')

  const addIssue = async (e) => {
    e.preventDefault()

    const url = 'http://localhost:8080'

    const res = await axios.post(`${url}/repository`, {
      url: issue
    })

    setDBStatus(res.data.result)
    setDBStatusMSG(res.data.msg)
  }

  return (
    <div>
      <NavBar />
      {getDBStatus ? (
        <div role="alert">
          {getDBStatusMSG}
        </div>
      ) : null}
      <div>
        <div>
          <div>
    <div className='min-h-screen flex flex-col items-center dark:bg-gray-800 bg-gray-200'>
      <NavBar />
      {getDBStatus
        ? (
        <div className='alert alert-primary my-3 ' role='alert'>
          {getDBStatusMSG}
        </div>
          )
        : null}
      <div className='container'>
        <div className='row mt-3'>
          <div className='d-flex justify-content-center align-items-center flex-row'>
            <input
              type='text'
              className='form-control'
              onChange={(e) => setIssue(e.target.value)}
              placeholder='GitHub Repository URL (opensourceadam-place/wiki)'
              name='note'
            />
            <button
              onClick={addIssue}
              type="Submit"
              type='Submit'
              className='w-25 form-control btn btn-primary'
            >
              Add Project
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Start
