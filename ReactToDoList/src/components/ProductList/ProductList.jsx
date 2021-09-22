import React from 'react';
import { useHistory } from "react-router-dom"
import styles from "../../style/_productList.scss"

const ProductList = () => {
    let history = useHistory();

    const toHome = (e) => {
        e.preventDefault();
        history.push('/Home');
    }
    return (
        <div>
            <div className={ styles.container }>
                <div className={ styles.coverImage }>
                    <div className={ styles.item }>
                        <img src="/src/images/fundraising.jpg" alt="fundraising"></img>
                        <div className={ styles.txt }>
                            <h2>募款平台：拍出會動的照片</h2>
                            <p>使用 bootstrap5 + 內建 bootstrap5 javascript 功能。</p>
                        </div>
                    </div>

                    <div onClick={ toHome }>
                        <div className={ styles.item }>
                        <img src="/src/images/cutView.png" alt="grid"></img>
                            <div className={ styles.txt }>
                                <h2>根據六角學院的版型來練習</h2>
                                <p>使用 javascript 操控元素 / flex 排版</p>
                            </div>
                        </div>
                    </div>
                    
                       
                    <div className={ styles.item }>
                        <img src="/src/images/blog.jpg" alt="blog"></img>
                        <div className={ styles.txt }>
                            <h2>blog 排版</h2>
                            <p>使用 bootstrap5 功能。</p>
                        </div>
                    </div>
                    <div className={ styles.item }>
                        <img src="/src/images/grid.jpg" alt="grid"></img>
                        <div className={ styles.txt }>
                            <h2>grid 排版</h2>
                            <p>使用 bootstrap5 功能。</p>
                        </div>
                    </div>                    
                    <div className={ styles.item }>
                        <img src="/src/images/album.jpg" alt="grid"></img>
                        <div className={ styles.txt }>
                            <h2>album 排版</h2>
                            <p>使用 bootstrap5 功能。</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductList;