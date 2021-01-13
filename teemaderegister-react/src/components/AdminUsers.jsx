import React from 'react'
import {PropTypes} from 'prop-types'
import AddNewUserForm from './AddNewUserForm'
// import SupervisorNewTopic from './SupervisorNewTopic'
import {Card} from 'antd'

const propTypes = {
  type: PropTypes.string
}

const AdminUsers = props => {
  switch (props.type) {
    case 'supervisor':
      return (
        <h2>Registered supervisors</h2>
      )
    case 'students':
      return (
        <h2>Registered students</h2>
      )
    case 'add-new-user':
      return (
        <Card>
          {/*<AddNewUserForm/>*/}
          <h1>Hello</h1>
        </Card>
      )
    case 'new-topic':
      return (
          <SupervisorNewTopic/>
      )
    default:
      return (<h2>Choose something.</h2>
      )
  }
}

AdminUsers.propTypes = propTypes

export default AdminUsers
