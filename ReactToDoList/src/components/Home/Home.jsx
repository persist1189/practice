import React from "react"
import styles from "../../style/Home.styl"

const Banner = () => {
    return (
        <div className={ styles.youTube }>
            <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/fiDZGZMN9wE" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
    )
}

const ThinkCssIsEasyToLearn = () => {
    return (
        <div className={ styles.easySection }>
            <div className={ styles.easyContainer }>
                <div className={ styles.easyItem }>
                    <div className={ styles.easyFont }>
                        你是不是覺得，CSS易學?
                    </div>
                </div>
                <div className={ styles.easyItem }>
                    <div>
                        <img src="https://picsum.photos/350/250?random=1" alt="easy"/>
                        <p className={ styles.easyText }>網路資源超多</p>
                    </div>
                </div>
                <div className={ styles.easyItem }>
                    <div>
                        <img src="https://picsum.photos/350/250?random=2" alt="easy2"/>
                        <p className={ styles.easyText }>自己也算略懂</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const CssHardRefined = () => {
    return (
        <div className={ styles.hardSection}>
            <h2>上戰場才發現，CSS難精！</h2>
            <div className={ styles.hardContainer }>
                <div className={ styles.hardItem}>
                    <div>
                        <img src="https://picsum.photos/350/250?random=3" alt="hardCss"/>
                        <p className={ styles.hardText }>沒代表作品，找不到版型練習</p>
                    </div>
                </div>
                <div className={ styles.hardItem}>
                    <div>
                        <img src="https://picsum.photos/350/250?random=4" alt="hardCss2"/>
                        <p className={ styles.hardText }>沒足夠知識，語法知識量不足</p>
                    </div>
                </div>
                <div className={ styles.hardItem}>
                    <div>
                        <img src="https://picsum.photos/350/250?random=5" alt="hardCss3"/>
                        <p className={ styles.hardText }>沒實戰機會，切版熟練度太低</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const LearningIsNotAPerson = ({ h2, h2Br, p }) => {
    return (
        <div className={ styles.learningSection }>
            <div className={ styles.learningContainer }>
                <div className={ styles.learningItem }>
                    <img src="https://picsum.photos/450/270?random=6" alt="learning1"/>
                </div>
                    <div className={ styles.learningItem }>
                        <h2>{ h2 } { <br/> } { h2Br }</h2>
                        <p>{ p }</p>
                    </div>
            </div>
        </div>
    )
}

const HowToUseJavaScript = () => {
    return (
        <div className={ styles.howToUseSection }>
            <div className={ styles.howToUseItem }>
                <div className={ styles. howToUsePStyle}>
                    <p>凡參加本次直播班學員，將會獲得</p>
                        <div className={ styles.howToUsePStyle2 }>
                            <p class="far fa-hand-point-right">專屬學習頻道，百人在線加速學習效率</p>
                            <p class="far fa-hand-point-right">從 JS 設計模式著手，不僅教你怎麼構，還讓你知道怎麼拆</p>
                            <p class="far fa-hand-point-right">供新版 API，建置屬於自己的商業主題</p>
                            <p class="far fa-hand-point-right">專屬 UI 設計框架，完成獨一無二的網站作品</p>
                            <p class="far fa-hand-point-right">設計講師引導你掌握美感小撇步，質感網頁自己動手做</p>
                        </div>
                </div>
            </div>
            <div className={ styles.howToUseItem }>
                <div className={ styles.howToUseImg }>
                    <img src="https://picsum.photos/450/270?random=7" alt="howtoUse"/>
                </div>
            </div>
        </div>
    )
}

const CourseSyllabusFromTheShallower = () => {
    return (
        <div className={ styles.CourseSyllabusSection }>
            <h2>由淺入深的課程大綱</h2>
            <p>這門課程，我們是以<b>「 求職面試作品 」</b>為導向，來規劃我們的課綱，讓您上完課後，就能開發屬於自己的網站作品。</p>
        </div>
    )
}

const ImageCarousel = () => {
    
    let leftArrow = () => {
        console.log('left');
    }

    return (
        <div className={ styles.imageCarouselSection }>
        <div className={ styles.imageCarouseRightArrow} onClick={leftArrow}></div>
            <div className={ styles.imageCarouselView }>
                <div className={ styles.imageCarouselSource }>
                    <img src="https://picsum.photos/450/270?random=8" alt="carousel"/>
                    <img src="https://picsum.photos/450/270?random=9" alt="carousel1"/>
                    <img src="https://picsum.photos/450/270?random=10" alt="carousel2"/>
                    <img src="https://picsum.photos/450/270?random=11" alt="carousel3"/>
                    <img src="https://picsum.photos/450/270?random=12" alt="carousel4"/>
                </div>
            </div>
            <div className={ styles.imageCarouseLeftArrow} onClick={ () => console.log('click')}></div>
        </div>
    )
}

const Footer = () => {
    return (
        <div>Footer</div>
    )
}

const Author = () => {
    return (
        <div>Author</div>
    )
}

const Home = () => {
    return (
        <div className={ styles.paddingTop }>
            <div className={ styles.main }>
                <Banner/>
                    <div className={ styles.subSection }>
                        <ThinkCssIsEasyToLearn/>
                        <CssHardRefined/>
                        <LearningIsNotAPerson h2="學習不是一個人的事情" h2Br="你需要找人來幫你" p="雖說網路上有眾多的資源、眾多的教學，但這些內容多到眼花撩亂且品質參疵不齊難以整合，本課程將帶你打通 JavaScript 拆解、Vue 實戰運用、怎麼做都不難看的版型技巧！"/>
                        <HowToUseJavaScript/>
                        <CourseSyllabusFromTheShallower/>
                        <CssHardRefined/>
                        <LearningIsNotAPerson h2="為了讓你真的學會，" h2Br="我們做了個團戰遊戲任務系統" p="反派霸格黨為了不讓大家成為網頁開發者，都會故意在程式碼埋 Bug、讓你的電腦不安份，來降低學習意願這次他們派了隻 BOSS 來阻撓六角學院，打敗他的方式，只有繳交每週關卡作業，化為攻擊力來打敗牠！。"/>
                        <ImageCarousel/>
                        <Footer/>
                        <Author/>
                    </div>
            </div>
        </div>
    )
}

export default Home;