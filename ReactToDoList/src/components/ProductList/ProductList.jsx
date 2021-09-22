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
                                <p>使用 bootstrap5 + 內建 bootstrap5 javascript 功能。</p>
                            </div>
                        </div>    
                    </a>

                    <div onClick={ toToDoList }>
                        <div className={ styles.item }>
                        <img src="../src/images/cutView.png" alt="toDoList"></img>
                            <div className={ styles.txt }>
                                <h2>ToDoList</h2>
                                <p>使用route</p>
                            </div>
                        </div>
                    </div>

                    <div onClick={ toHome }>
                        <div className={ styles.item }>
                        <img src="../src/images/cutView.png" alt="grid"></img>
                            <div className={ styles.txt }>
                                <h2>根據六角學院的版型來練習</h2>
                                <p>使用 javascript 操控元素 / flex 排版</p>
                            </div>
                        </div>
                    </div>
                    
                    <a href="https://persist1189.github.io/practice/blogTemplate/">
                        <div className={ styles.item }>
                            <img src="../src/images/blog.jpg" alt="blog"></img>
                            <div className={ styles.txt }>
                                <h2>blog 排版</h2>
                                <p>使用 bootstrap5 功能。</p>
                            </div>
                        </div>
                    </a>   

                    <a href="https://persist1189.github.io/practice/gridExample/">
                        <div className={ styles.item }>
                            <img src="../src/images/grid.jpg" alt="grid"></img>
                            <div className={ styles.txt }>
                                <h2>grid 排版</h2>
                                <p>使用 bootstrap5 功能。</p>
                            </div>
                        </div>                    
                    </a>

                    <a href="https://persist1189.github.io/practice/rwdAlbum/">
                        <div className={ styles.item }>
                            <img src="../src/images/album.jpg" alt="grid"></img>
                            <div className={ styles.txt }>
                                <h2>album 排版</h2>
                                <p>使用 bootstrap5 功能。</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProductList;