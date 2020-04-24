import React from 'react'
import {useHistory, useParams, useLocation} from 'react-router-dom'

function PageTwo(props){
    const history = useHistory()
    const location = useLocation()
    const params = useParams()

    const handleRedirect = () => {
        // some logic like an axios call

        // props.history.push('/pageone')
        history.push('/pageone')
    }
    return (
        <div>
            PageTwo.js
            <br/>
            {/* This is the id on props.match.params.id: {props.match.params.id} */}
            This is the id on props.match.params.id: {params.id}
            <br/>
            <button onClick={() => handleRedirect()}>Take me back to Page One</button>
        </div>
    )
}

export default PageTwo