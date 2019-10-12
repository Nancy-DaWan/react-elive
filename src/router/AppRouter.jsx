import React from "react"

import { HashRouter, Route, Switch } from "react-router-dom"

import Layout from "../pages/Layout"

import Home from "../pages/Home"
import LifeService from "../pages/LifeService"
import Mine from "../pages/Mine"
import Shop from "../pages/Shop"
import City from "../pages/City"
import Search from "../pages/Search"
import Details from "../pages/Details"
import ShopCar from "../pages/ShopCar"
import Login from "../pages/Login"
import HookDemo from "../pages/StateHookDemo"
import EffectHookDemo from "../pages/EffectHookDemo"
import NotFound from "../pages/NotFound"

export default class AppRouter extends React.Component {
    render() {
        return (
            <div>
                <HashRouter>
                    <Layout path="/">
                        <Switch>
                            <Route exact path="/" component={Home}></Route>
                            <Route path="/life" component={LifeService}></Route>
                            <Route path="/mine" component={Mine}></Route>
                            <Route path="/shop" component={Shop}></Route>
                            <Route path="/city" component={City}></Route>
                            <Route path="/login" component={Login}></Route>
                            <Route path="/shopcar" component={ShopCar}></Route>
                            <Route path="/hook" component={HookDemo}></Route>
                            <Route path="/effecthook" component={EffectHookDemo}></Route>
                            <Route path="/details/:id" component={Details}></Route>
                            <Route path="/search/:keywords" component={Search}></Route>
                            <Route component={NotFound}></Route>
                        </Switch>
                    </Layout>
                </HashRouter>
            </div>
        )
    }
}