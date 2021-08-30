import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Inicio from '../components/Inicio';
import Registro from '../components/Registro';

import Amazonas from "../components/regiones/Amazonas";
import Andina from "../components/regiones/Andina";
import Caribe from "../components/regiones/Caribe";
import Orinoquia from "../components/regiones/Orinoquia";
import Pacifico from "../components/regiones/Pacifico";

// Toast
import { ToastProvider } from 'react-toast-notifications'

export function RouterAPP() {
    return (
        <Router>
            <ToastProvider>
                <Switch>
                    <Route exact path='/'>
                        <Inicio />
                    </Route>
                    <Route exact path='/registro'>
                        <Registro />
                    </Route>
                    <Route exact path='/amazonas'>
                        <Amazonas />
                    </Route>
                    <Route exact path='/andina'>
                        <Andina />
                    </Route>
                    <Route exact path='/caribe'>
                        <Caribe />
                    </Route>
                    <Route exact path='/orinoquia'>
                        <Orinoquia />
                    </Route>
                    <Route exact path='/pacifico'>
                        <Pacifico />
                    </Route>
                </Switch>
            </ToastProvider>
        </Router>
    );
}