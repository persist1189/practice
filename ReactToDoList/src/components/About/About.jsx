import React from 'react';
import styles from "../../style/_about.scss"

const About = () => {
    return (
        <div>
            <div className={ styles.container }>
                <div className={ styles.header }>
                    <div className={ styles.profile }>
                        <img className={ styles.profileImg } src="../src/images/ivan.jpg" width="250px" height="250px"></img>
                    </div>
                    <div className={ styles.infoHeader }>
                        <h2>蘇宥橙 IvanSu</h2>    
                        <ul className={ styles.profile }>
                            <li><b>美商塗鴉科技公司<span className={ styles.colorGray }> | </span>前端工程師 <span className={ styles.colorGray }> | </span>QA測試工程師</b></li>
                            <li><b>龍華科技大學 <span className={ styles.colorGray }> | </span> 電機工程系 大學畢業</b></li>
                            <ul className={ styles.subProfile }>
                                <li>新北市中和區</li>
                                <li>| 3-4年工作經驗</li>
                                <li>| 希望職稱: 前端工程師</li>
                            </ul>
                            <ul className={ styles.experience }>
                                <li>2 years + Frontend Developer</li>
                                <li>協助開發範本功能，使用前端主流生態 React 與 Redux</li>
                                <li>協助埋入 google Analytics Code 追蹤使用者習慣 </li>
                                <li>分析客服問題，討論並將問題整理完後提出解決方案建議優化</li>
                                <li>產品開發上與 UI 設計師討論並完成，聽取使用者回饋進行改善</li>
                            </ul>
                        </ul>
                    </div>
                </div>
                <div className={ styles.body }>
                    <div className={ styles.title }>
                        <h2>技能 <span className={ styles.colorRed }>SKILLS</span></h2>
                        <hr/>
                        <div className={ styles.skillContent }>
                            <h3 className={ styles.colorBlue }>Web Development</h3>
                            <div className={ styles.skillTree }>
                                <ul>
                                    <li>
                                        <img src="../src/images/html5.png" alt="html"></img><span className={ styles.skillSpan }>HTML5</span>
                                    </li>
                                    <li>
                                        <img src="../src/images/bootstrap.png" alt="html"></img><span className={ styles.skillSpan }>Bootstrap</span>
                                    </li>
                                    <li>
                                        <img src="../src/images/js.png" alt="html"></img><span className={ styles.skillSpan }>JavaScript</span>
                                    </li>
                                    <li>
                                        <img src="../src/images/scss.png" alt="html"></img><span className={ styles.skillSpan }>Scss</span>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <img src="../src/images/react.png" alt="html"></img><span className={ styles.skillSpan }>React</span>
                                    </li>
                                    <li>
                                        <img src="../src/images/redux.png" alt="html"></img><span className={ styles.skillSpan }>Redux</span>
                                    </li>
                                    <li>
                                        <img src="../src/images/css.png" alt="html"></img><span className={ styles.skillSpan }>Css in JS</span>
                                    </li>
                                    <li>
                                        <img src="../src/images/webpack.png" alt="html"></img><span className={ styles.skillSpan }>Webpack</span>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <img src="../src/images/github.png" alt="html"></img><span className={ styles.skillSpan }>GitHub</span>
                                    </li>
                                    <li>
                                        <img src="../src/images/git.png" alt="html"></img><span className={ styles.skillSpan }>Git</span>
                                    </li>
                                    <li>
                                        <img src="../src/images/postMan.png" alt="html"></img><span className={ styles.skillSpan }>postMan</span>
                                    </li>
                                    <li>
                                        <img src="../src/images/jira.jpeg" alt="html"></img><span className={ styles.skillSpan }>Jira</span>
                                    </li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                    <div className={ styles.noPadding }>
                        <h2>工作經驗 <span className={ styles.colorRed }>WORK EXPERIENCE</span></h2>
                        <hr/>
                        <p className={ styles.bold }>前端工程師 - 美商塗鴉科技公司(pro360達人網)，2017 年 9 月 - 至今</p>
                        <p>負責專案開發及內部系統測試，開發流程優化，控管 Web / Android / iOS 三大平台功能。</p>
                        <p className={ styles.bold }>職責內容：</p>
                        <ul>
                            <li>協助客服遇到的系統問題將問題排除，使用專案管理套件 (JIRA) 記錄問題</li>
                            <li>使用前端程式語言 (JavaScript) 與前端打包工具 (Webpack) 來開發網站。</li>
                            <ul className={ styles.inSide }>
                                <li>使用管理版本控制軟體 (Git) 來控管程式碼的品質。</li>
                                <li>與UI設計師 / 後端工程師使用團隊溝通平台 (Slack) 來討論規格實作作品。</li>
                            </ul>
                            <li>使用自動測試系統測試 (Selenium IDE) ，異常問題分析，提出解決方式，確保品質無虞。</li>
                            <li>規劃測試環境，使用測試用例管理工具 (TestRail) 建立測試檔案進行測試與回報。</li>
                        </ul>
                        <p className={ styles.bold }>主要成就：</p>
                        <ul>
                            <li>規劃系統測試與需求流程體驗，每週減少逾 <b>70%</b> 的客服問題回報。</li>
                            <li>與後端工程師共同開發範本功能，讓使用者使用體驗更加流暢。</li>
                            <li>翻譯網站語言進軍香港市場，替公司拿下香港市場。</li>
                            <li>重新美化 Email 排版，收到使用者回應對於開啟信件變成期待的事情。</li>
                            <li>與產品和行銷部門協作，針對用戶需求改善網頁功能，大幅改善使用者體驗，並成功提升月營收近 <b>2</b> 倍以上。</li>
                        </ul>
                    </div>
                    <div className={ styles.title }>
                        <h2>聯絡方式 <span className={ styles.colorRed }>CONTACT METHOD</span></h2>
                        <hr/>
                        <ul className={ `${ styles.contact } ${ styles.infoBody }` }>
                            <li>Email: persist1189@gmail.com</li>
                            <li>Phone: 0908-020-110</li>
                        </ul>
                    </div>
                </div>
                
            </div>    
                <div className={ styles.footer }>
                    <p className={ styles.center }>
                        Copyright ©2021 All rights reserved. By IvanSu
                    </p>
                </div>
        </div>
    )
}

export default About;