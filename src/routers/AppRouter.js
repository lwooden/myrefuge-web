import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from '../components/Header'
import HomePage from '../components/HomePage'
import CategoryPage from '../components/CategoryPage'
import PassagePage from '../components/PassagesPage'
import AddExpensePage from '../components/AddExpense'
import EditExpensePage from '../components/EditExpense.js'
import HelpPage from '../components/Help'
import NotFoundPage from '../components/404'

// 1. Create high-level router component 
// 2. Export it to app.js
// 3. Break components out into seperate files
// 4. Import them into high-level router which is then exported to app.js

// Clean. Consistent. Modular

const AppRouter = () => (
    <BrowserRouter>
    {/* Single root element inside of BrowserRouter */}
    <div>
      <Header /> {/* Displayed on every page */}
      <Switch> {/* Processes routes exclusively for betting matching */}
        <Route path="/" component={HomePage} exact={true} /> {/* must be typed exactly in order to render */}
        <Route path="/categories" component={CategoryPage} exact={true} />
        <Route path="/passages/:id" component={PassagePage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
    </BrowserRouter>
)


export default AppRouter