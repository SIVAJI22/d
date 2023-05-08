
import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";

import "./Home.css"
import { Link } from "react-router-dom";
    
class  Chat extends React.Component{
    constructor(props) {
        super(props);
      
      
      } 
    componentDidMount(){
  
        (function(d, m){
            var kommunicateSettings = 
                {"appId":"21424902ab81ff5f3ddef733debb69792","popupWidget":true,"automaticChatOpenOnNavigation":true};
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
    /* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */
  
    }
       render(){
        return(
            <Fragment><h1>hi this is chat box</h1></Fragment>
          )
    };
       }
       export default Chat;
    