import React from "react"
import { BookMark } from "../BookMark"
import styles from "../../index.scss"

class NavBar extends React.Component{
    render(){
        return (
            <div id={styles.NavBar}>
                <BookMark to="/ToolsPractice"
                          name="ToolsPractice"
                          className={styles.HomeBookMark}/>
                <BookMark to="/ToDoList"
                          name="ToDoList"
                          className={styles.HomeBookMark}/>
                <BookMark to="/"
                          name="Home"
                          className={styles.HomeBookMark}/>
                <BookMark to="/login"
                          name="登入"
                          className={styles.HomeBookMark}/>
                <BookMark to="/cssWorld"
                          name="Css世界"
                          className={styles.HomeBookMark}/>
            </div>
        )
    }
}

export { NavBar }