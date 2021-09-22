import React from "react"
import { BookMark } from "../BookMark"
import styles from "../../index.scss"

class NavBar extends React.Component{
    render(){
        return (
            <div className={ styles.nav }>
                {/* <BookMark to="/ToolsPractice"
                          name="ToolsPractice"
                          className={`${styles.HomeBookMark} ${styles.none}`}/> */}
                {/* <BookMark to="/ToDoList"
                          name="ToDoList"
                          className={styles.HomeBookMark}/> */}
                <BookMark to="/productList"
                          name="作品集"
                          className={styles.HomeBookMark}/>
                
                <BookMark to="/about"
                          name="關於我"
                          className={styles.HomeBookMark}/>
                <BookMark to="/login"
                          name="登入"
                          className={styles.HomeBookMark}/>
                          
                {/* <BookMark to="/cssWorld"
                          name="Css世界"
                          className={styles.HomeBookMark}/> */}
            </div>
        )
    }
}

export { NavBar }