import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Landing from './components/Landing'
import PageOne from './components/PageOne'
import PageTwo from './components/PageTwo'

export default (
    <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/pageone' component={PageOne}/>
        <Route path='/pagetwo/:id' component={PageTwo}/>
    </Switch>
)