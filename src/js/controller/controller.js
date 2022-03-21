"use strict"
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';

import * as model from '../model/model.js';

//VIEWS
import mapView from "../views/map.js";
import headerView from "../views/headerView.js";
import dataView from '../views/dataView.js';

const controllerIPPressed = async function (ip) {
    try {
        await model.updateDataFromIP(ip);
        dataView.render(model.state);
        mapView.renderLocation(model.state.get('latitude'), model.state.get('longitude'));
    } catch (e) {
        headerView.renderError();
    }

}

const init = async function () {
    await model.updateDataFromIP(null);
    dataView.render(model.state);
    mapView.initMap(model.state.get('latitude'), model.state.get('longitude'));
    headerView.addHandlerGetIP(controllerIPPressed);
}
init();