import React from 'react';
import styles from "../../style/_about.scss"

const About = () => {
    return (
        <div>
            <div className={ styles.container }>
                <div className={ styles.header }>
                    <div className={ styles.profile }>
                        <img className={ styles.profileImg } src="/src/images/ivan.jpg" width="250px" height="250px"></img>
                    </div>
                    <div className={ styles.infoHeader }>
                        <h2>個人資料 <span className={ styles.colorRed }> PROFILE </span></h2>
                        <hr/>
                        <ul className={ styles.infoBody }>
                            <li className={ styles.fontSize3 }>蘇宥橙 IvanSu</li>
                            <li>秉持著積極學習和負責的態度完成每件事，勇於挑戰新技術，享受解決問題帶來的成就感，並相信每段經驗，都會是灌溉未來的養分。</li>
                            <li className={ styles.fontSize2 }>前端工程師 <span>Front-End Developer</span></li>
                        </ul>
                    </div>
                </div>
                <div className={ styles.body }>
                    <div className={ styles.title }>
                        <h2>技能 <span className={ styles.colorRed }>SKILLS</span></h2>
                        <hr/>
                        <div className={ styles.skillContent }>
                            <div className={ styles.skills}>
                                <h3>Front-End</h3>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>BootStrap5</li>
                                    <li>JavaScript</li>
                                    <li>React.js (React hook) / Redux</li>
                                    <li>webpack</li>
                                    <li>Git</li>
                                    <li>postMan</li>
                                </ul>
                            </div>
                            <div className={ styles.skills}>
                                <h3>Back-End</h3>
                                <ul>
                                    <li>Node.js</li>
                                    <li>Mysql</li>
                                    <li>php(Laravel)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={ styles.noPadding }>
                        <h2>工作經驗 <span className={ styles.colorRed }>WORK EXPERIENCE</span></h2>
                        <hr/>
                        <p className={ styles.bold }> 美商塗鴉科技公司(pro360達人網)，前端工程師，2017 年 9 月 - 至今</p>
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
                            <li>規劃系統測試與需求流程體驗，每週減少逾七成的客服問題回報。</li>
                            <li>與產品和行銷部門協作，針對用戶需求改善網頁功能，大幅改善使用者體驗，並成功提升月營收近一倍以上。</li>
                        </ul>
                    </div>
                    <div className={ styles.title }>
                        <h2>聯絡方式 <span className={ styles.colorRed }>CONTACT METHOD</span></h2>
                        <hr/>
                        <ul className={ `${ styles.contact } ${ styles.infoBody }` }>
                            <li>Email: persist1189@gmail.com</li>
                            <li>Phone: 0908-020-100</li>
                            <li>作品連結: <a href="https://persist1189.github.io/practice/ReactToDoList/dist/index.html#/about">Click me</a> </li>
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