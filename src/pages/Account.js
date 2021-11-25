import React from 'react'
import { useUserContext } from '../stores/AppState'
export default function Account() {
    const {logoutUser}=useUserContext();
    return (
        <div>
            Account
            <button onClick={logoutUser}>AAAAAAAA
            </button>
        </div>
    )
}
