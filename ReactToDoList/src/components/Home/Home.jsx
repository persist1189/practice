import React from "react"
import styles from "../../style/Home.styl"

const Bootstrap = () => {
    return (
        <div class="container">
            <div class="row">
                <div class="col">
                    <div className={ styles.item}>
                        <img class="w-100" src="https://picsum.photos/350/250?random=2" alt="pic"></img>
                        <p>https://picsum.photos/350/250?random=2https://picsum.photos/350/250?random=2https://picsum.photos/350/250?random=2https://picsum.photos/350/250?random=2https://picsum.photos/350/250?random=2https://picsum.photos/350/250?random=2https://picsum.photos/350/250?random=2https://picsum.photos/350/250?random=2https://picsum.photos/350/250?random=2</p>
                    </div>
                </div>
                <div class="col">
                    <div className={ styles.item}>
                        <img class="w-100" src="https://picsum.photos/350/250?random=2" alt="pic"></img>
                        <p>https://picsum.photos/350/250?random=2https://picsum.photos/350/250?random=2https://picsum.photos/350/250?random=2https://picsum.photos/350/250?random=2https://picsum.photos/350/250?random=2https://picsum.photos/350/250?random=2https://picsum.photos/350/250?random=2https://picsum.photos/350/250?random=2https://picsum.photos/350/250?random=2</p>
                    </div>
                </div>
                <div class="col">
                    <div className={ styles.item}>
                        <img class="w-100" src="https://picsum.photos/350/250?random=2" alt="pic"></img>
                        <p>https://picsum.photos/350/250?random=2https://picsum.photos/350/250?random=2https://picsum.photos/350/250?random=2https://picsum.photos/350/250?random=2https://picsum.photos/350/250?random=2https://picsum.photos/350/250?random=2https://picsum.photos/350/250?random=2https://picsum.photos/350/250?random=2https://picsum.photos/350/250?random=2</p>
                    </div>
                </div>
                <div class="col">
                    <div className={ styles.item}>
                        <img class="w-100" src="https://picsum.photos/350/250?random=2" alt="pic"></img>
                        <p>https://picsum.photos/350/250?random=2https://picsum.photos/350/250?random=2https://picsum.photos/350/250?random=2https://picsum.photos/350/250?random=2https://picsum.photos/350/250?random=2https://picsum.photos/350/250?random=2https://picsum.photos/350/250?random=2https://picsum.photos/350/250?random=2https://picsum.photos/350/250?random=2</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Banner = () => {
    return (
        <div className={ styles.banner }>
            <img src="https://picsum.photos/350/250?random=50" alt="easy" height="400px"  width="100%"/>
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
                        <img src="https://picsum.photos/280/250?random=3" alt="hardCss"/>
                        <p className={ styles.hardText }>沒代表作品，找不到版型練習</p>
                    </div>
                </div>
                <div className={ styles.hardItem}>
                    <div>
                        <img src="https://picsum.photos/280/250?random=4" alt="hardCss2"/>
                        <p className={ styles.hardText }>沒足夠知識，語法知識量不足</p>
                    </div>
                </div>
                <div className={ styles.hardItem}>
                    <div>
                        <img src="https://picsum.photos/280/250?random=5" alt="hardCss3"/>
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
                <div className={ styles.learningImgPadding }>
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
                    <img src="https://picsum.photos/450/270?random=7" alt="howtoUse"/>
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
    
    let rightArrow = (arrow) => {
        // 取得 畫布的元件
        let element = document.getElementById('imageCarouselSource');
        // 取得 css style
        let style = window.getComputedStyle(element)
        console.log(style.transform, 'getStyle');
        let matrix = new WebKitCSSMatrix(style.transform);
        let translateX = matrix.m41;
        if(arrow === "right"){
            // 點擊 right 箭頭，計算目前畫面上的位置
            if(translateX > -1801){
                element.style.transform = "translateX("+ (translateX - 600) + "px)";   
            } else {
                element.style.transform = "translateX(0px)";
            }
        } else {
            // 點擊 left 箭頭
            if(translateX <= -1){
                element.style.transform = "translateX("+ (translateX + 600) + "px)";   
            } else {
                element.style.transform = "translateX(-2400px)";   
            }
        }
    }  

    return (
        // 將輪播視窗置中
        <div className={ styles.imageCarouselSection }>
            <div className={ styles.imageCarouseLeftArrow} onClick={ () => { rightArrow("left") }}>{ "<" }</div>
                {/* 限制住圖片大小，超過就隱藏 */}
                <div className={ styles.imageCarouselView }>
                    { /* 設定起始值為 0 */ }
                    <div id="imageCarouselSource" className={ styles.imageCarouselSource }>
                        <img src="https://picsum.photos/600/270?random=8" alt="carousel"/>
                        <img src="https://picsum.photos/600/270?random=9" alt="carousel1"/>
                        <img src="https://picsum.photos/600/270?random=10" alt="carousel2"/>
                        <img src="https://picsum.photos/600/270?random=11" alt="carousel3"/>
                        <img src="https://picsum.photos/600/270?random=12" alt="carousel4"/>
                    </div>
                </div>
                <div className={ styles.imageCarouseRightArrow } onClick={() => { rightArrow("right") }}> {">"} </div>
        </div>
    )
}

const LecturerTitle = ({ title, content }) => {
    return (
        <div className={ styles.lecturerTitleSection }>
            <div className={ styles.lecturerDescription }>
                    <h2>{ title }</h2>
                    <p>{ content }</p>
            </div>
        </div>
    )
}

const Lecturer = ({ first_job_title, second_job_title, first_description, second_description, first_img, second_img }) => {
    return (
        <div className={ styles.lecturerSection }>
            <div className={ styles.lecturerContainer }>
                
                <div className={ styles.lecturerProfile }>
                    <div className={ styles.lecturerItem }>
                        <img src={ first_img } alt="profile"/>
                        <p>{ first_job_title }</p>
                            <div className={ styles.lecturerSpeakSection }>
                                <div className={ styles.lecturerSpeak }>
                                    <img src="https://firebasestorage.googleapis.com/v0/b/hexschool-api.appspot.com/o/tutorials%2Ftraining%2Fimg-comment.svg?alt=media&token=bbad079b-79e3-4577-b4f3-8f50e809ad2e" alt="talk"/>
                                    <p>{ first_description }</p>
                                </div>
                            </div>
                    </div>
                    <div className={ styles.lecturerItem }>
                        <img src={ second_img } alt="profile1"/>
                        <p>{ second_job_title }</p>
                        <div className={ styles.lecturerSpeakRightSection }>
                                <div className={ styles.lecturerSpeak }>
                                    <img src="https://firebasestorage.googleapis.com/v0/b/hexschool-api.appspot.com/o/tutorials%2Ftraining%2Fimg-comment-mobile.svg?alt=media&token=e19f5d22-e202-4546-bc3d-0f4bb35f9abf" alt="talk"/>
                                    <p>{ second_description }</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const GameTeam = () => {
    return (
        <div className={ styles.GameTeamSection }>
            <LecturerTitle title="遊戲系統團隊" content="系統穩定度都靠我們！"/>
                <div className={ styles.GameTeamMember }>
                    <Lecturer first_job_title="乾太 / 後端工程師" second_job_title="Ray / 前端工程師" 
                              first_description="我雖然不會寫程式，但寫系統略懂" second_description="戰鬥吧工程師們，世界和平靠你們惹" 
                              first_img="https://picsum.photos/200/200?random=15" second_img="https://picsum.photos/200/200?random=17"/>
                    <Lecturer first_job_title="俊儀 / UI 設計師" second_job_title="佳瑜 / UI 設計師" 
                              first_description="這次的 UI 設計稿都是我設計的辣" second_description="這次的 UI 設計稿都是我設計的辣" 
                              first_img="https://picsum.photos/200/200?random=18" second_img="https://picsum.photos/200/200?random=19"/>
                </div>
        </div>
    )
}

const Home = () => {
    return (
        <div className={ styles.paddingTop }>
            <div className={ styles.main }>
                <Banner/>
                <ThinkCssIsEasyToLearn/>
                <CssHardRefined/>
                <LearningIsNotAPerson h2="學習不是一個人的事情" h2Br="你需要找人來幫你" p="雖說網路上有眾多的資源、眾多的教學，但這些內容多到眼花撩亂且品質參疵不齊難以整合，本課程將帶你打通 JavaScript 拆解、Vue 實戰運用、怎麼做都不難看的版型技巧！"/>
                <HowToUseJavaScript/>
                <CourseSyllabusFromTheShallower/>
                <CssHardRefined/>
                <LearningIsNotAPerson h2="為了讓你真的學會，" h2Br="我們做了個團戰遊戲任務系統" p="反派霸格黨為了不讓大家成為網頁開發者，都會故意在程式碼埋 Bug、讓你的電腦不安份，來降低學習意願這次他們派了隻 BOSS 來阻撓大家，打敗他的方式，只有繳交每週關卡作業，化為攻擊力來打敗牠！。"/>
                <ImageCarousel/>
                <LecturerTitle title="講師團隊" content="直播教學都靠我們！" />
                <Lecturer first_job_title="吸水布 / 副校長" second_job_title="伸手牌 / 校長" first_description="沒有我教不會 JS 邏輯，儘管來吧！" second_description="我是 JS 教學之神，莫非你不知道？" first_img="https://picsum.photos/255/255?random=13" second_img="https://picsum.photos/255/255?random=14" />
                <GameTeam/>
            </div>
        </div>   
    )
}

export default Home;