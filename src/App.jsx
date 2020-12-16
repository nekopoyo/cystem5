import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Button, Toolbar} from 'react-onsenui';
import {notification} from 'onsenui';
import './style.css';
export default class App extends React.Component {
  constructor(props) {
super(props);
this.state = {selectMenu: 0};
this.onClickMenu = this.onClickMenu.bind(this);
}

renderToolbar() {
return (
<Toolbar>
<div className='center'>CSSで見た目を変える</div>
</Toolbar>
);
}
onClickMenu(val) {
this.setState({selectMenu: val});
}
render() {
  var font =  ["#00802b","#800000","#ff0000","#008080"]
var styleHello = {
"color": font[this.state.selectMenu-1],
};
var menuItemClass = "item";
if(this.state.selectMenu == 1) {
menuItemClass = "item-selected";
}
var menuItemClass2 = "item";
if(this.state.selectMenu == 2) {
menuItemClass2 = "item-selected2";
}
var menuItemClass3 = "item";
if(this.state.selectMenu == 3) {
menuItemClass3 = "item-selected3";
}
var menuItemClass4 = "item";
if(this.state.selectMenu == 4) {
menuItemClass4 = "item-selected4";
}

return (
<Page renderToolbar={this.renderToolbar}>
<div className="midashi">第5回  課題</div>
<p style={styleHello}>はろー！</p>
<ul className="menu">
<li className={menuItemClass} onClick={()=>this.onClickMenu(1)}>メニュー1</li>
<li className={menuItemClass2} onClick={()=>this.onClickMenu(2)}>メニュー2</li>
<li className={menuItemClass3} onClick={()=>this.onClickMenu(3)}>メニュー3</li>
<li className={menuItemClass4} onClick={()=>this.onClickMenu(4)}>メニュー4</li>
</ul>
</Page>
);
}
}
