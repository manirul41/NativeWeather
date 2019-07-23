import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from "react-native";
import { NativeRouter, Route, Switch, Link } from "react-router-native";
import Dashboard from '../components/Dashboard';


const MainRoute = () => (
  <NativeRouter>
    <Switch>
        <Route exact path="/" component={Dashboard} />
    </Switch>
  </NativeRouter>
);

export { MainRoute };
