import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { fetchUsers } from '../store/action-creators/user'
import { useTypedSelector } from './hooks/useTypedSelector'

const UserList: FC = () => {

	const { error, loading, users } = useTypedSelector(state => state.user)
	const dispatch: any = useDispatch()

	useEffect(() => {
		dispatch(fetchUsers())
	}, [])


	return (
		<div>UserList</div>
	)
}

export default UserList
