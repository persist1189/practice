import React from 'react';
import { useHistory } from "react-router-dom"
import styles from "../../style/_productList.scss"

const ProductList = () => {
    let history = useHistory();

    const toToDoList = (e) => {
        setTimeout(() => {
            e.preventDefault();
            history.push('toDoList');
        }, 500);
    }

    const toHome = (e) => {
        setTimeout(() => {
            e.preventDefault();
            history.push('/Home');
        }, 500);
    }
    return (
        <div>
            <div className={ styles.container }>
                <div className={ styles.coverImage }>
                
                    <a href="https://persist1189.github.io/practice/fundraising/">
                        <div className={ styles.item }>
                            <img src="../src/images/fundraising.jpg" alt="fundraising"></img>
                            <div className={ styles.txt }>
                                <h2>募款平台：拍出會動的照片</h2>
                                <p>使用 BootStrap5 為基底，並搭配 Scss 編寫樣式，Webpack 作為模組化打包工具，Git 紀錄程式碼</p>
                                <h3> Bootstrap5 | JS | RWD | Scss | Git |Webpack </h3>
                            </div>
                        </div>    
                    </a>

                    <div onClick={ toToDoList }>
                        <div className={ styles.item }>
                        <img src="../src/images/toDoList.png" alt="toDoList"></img>
                            <div className={ styles.txt }>
                                <h2>待辦事項</h2>
                                <p>將 React 與 Redux 結合使用 styled-components 編寫樣式，Webpack 作為模組化打包工具，Git 紀錄程式碼</p>
                                <h3> React | Redux | JS | styled-component | RWD | Webpack | Git </h3>
                            </div>
                        </div>
                    </div>

                    <div onClick={ toHome }>
                        <div className={ styles.item }>
                        <img src="../src/images/cutView.png" alt="grid"></img>
                            <div className={ styles.txt }>
                                <h2>切版練習</h2>
                                <p>使用 JS 抓取屬性位置，並搭配 Scss 編寫樣式，Webpack 作為模組化打包工具，Git 紀錄程式碼</p>
                                <h3> Bootstrap5 | JS | Scss | RWD | Git | Webpack </h3>
                            </div>
                        </div>
                    </div>
                    
                    <a href="https://persist1189.github.io/practice/blogTemplate/">
                        <div className={ styles.item }>
                            <img src="../src/images/blog.jpg" alt="blog"></img>
                            <div className={ styles.txt }>
                                <h2>切版練習 (blog)</h2>
                                <p>使用 BootStrap5 為基底，並搭配 Scss 編寫樣式，Webpack 作為模組化打包工具，Git 紀錄程式碼</p>
                                <h3> Bootstrap5 | Scss| RWD | Git | Webpack </h3>
                            </div>
                        </div>
                    </a>   

                    <a href="https://persist1189.github.io/practice/gridExample/">
                        <div className={ styles.item }>
                            <img src="../src/images/grid.jpg" alt="grid"></img>
                            <div className={ styles.txt }>
                                <h2>切版練習 (grid)</h2>
                                <p>使用 BootStrap5 為基底，並搭配 Scss 編寫樣式，Webpack 作為模組化打包工具，Git 紀錄程式碼</p>
                                <h3> Bootstrap5 | Scss| RWD | Git | Webpack </h3>
                            </div>
                        </div>                    
                    </a>

                    <a href="https://persist1189.github.io/practice/rwdAlbum/">
                        <div className={ styles.item }>
                            <img src="../src/images/album.jpg" alt="grid"></img>
                            <div className={ styles.txt }>
                                <h2>切版練習 (album)</h2>
                                <p>使用 BootStrap5 為基底，並搭配 Scss 編寫樣式，Webpack 作為模組化打包工具，Git 紀錄程式碼</p>
                                <h3> Bootstrap5 | Scss| RWD | Git | Webpack </h3>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProductList;