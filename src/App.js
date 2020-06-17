import React, { Component } from 'react';
import First from './component/First-component';
import Header from './component/header';
import {add, sub, mult, div} from "./component/calcu";
import {List, Button} from './component/List-component';
import Lists from './component/List/List';
import ShowCode from './component/Card/Showcard';
import BoxLayout from './component/Layout/Box-layout'
import FluidLayout from './component/Layout/Fluid-layout'
import FunPus from './Fun-pus';
import { BrowserRouter, Route, Router, Switch, Link } from 'react-router-dom'
import Post from './component/post'


const textStyle = {
    color : 'red',
    textAlign : 'center',
    textShadow: '0px 2px 4px #ffe9c5',
    margin: '50px 0'
  }





class App extends Component {
    state = {
        bgColor : 'bg-light'
    }

    darkMode = () => {
        this.setState({
            bgColor : 'bg-dark'
        })
    }
    lightMode = () => {
        this.setState({
            bgColor : 'bg-light'
        })
    }
    render() {
        return (
            <>
            <BrowserRouter>
            <Header />
            <br/>
            <br/>
            <Switch>
              <Route path='/' exact render={() => {
                 return (
                    <BoxLayout>
                        <ShowCode />
                    </BoxLayout>
                    )
              }} />
                  
                <Route path='/about' render={() => {
                return (
                    <BoxLayout>
                        <Lists />
                    </BoxLayout>
                )
              }} />
              <Route path='/users' render={() => {
                 return  (
                    <>
                    <BoxLayout>
                        <List title="Title here"  bgColor={this.darkMode}>This is a descripation</List>
                        <List title="Title here"  bgColor={this.darkMode}>This is a descripation</List>
                        <List title="Title here"  bgColor={this.darkMode}>This is a descripation</List>
                    </BoxLayout>
                    </>
                 )
              }} />
              <Route path='/post' render={() => {
                  return (
                      <Post />
                  )
              }} />
            </Switch>
            </BrowserRouter>
            </>
        );
    }
}

export default App;