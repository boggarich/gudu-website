import React from 'react';
import PageHero from '../components/page-hero';
import '../assets/sass/about.scss';
import ImgContainer from '../components/img-container';

export default class About extends React.Component {
   render() {

        return(

            <div className="page-content about">

                <svg viewBox="0 0 1 1" style={{ position: 'absolute' }}>
                    <defs>

                        <clipPath id="our-values-mask" clipPathUnits="objectBoundingBox" >

                            <path d="M0,0.097 C0,0.044,0.017,0,0.038,0 H0.962 C0.983,0,1,0.044,1,0.097 V0.696 C1,0.743,0.987,0.784,0.968,0.792 L0.507,0.999 C0.502,1,0.498,1,0.493,0.999 L0.032,0.792 C0.013,0.784,0,0.743,0,0.696 V0.097" />

                        </clipPath>


                    </defs>
                </svg>

                <PageHero bgVideo="pexels-rodnae-productions-7914851.mp4">
                    <h1 className='page-hero-header'>Our mission is to democratize <span className="text-yellow">Games</span> across <span className="text-yellow">Africa</span> </h1>
                </PageHero>

                <section className='section-2'>

                    <div className='layout-width'>

                        <div className='grid-2-row headerXlWithParagraph'>
                            <h1 className='header-xl text-black has-underline underline-blue fit-content'>We are GUDU</h1>
                            <p className='text-black f-32 fw-400'>
                            Gudu Studios is a video game company based in Ghana, West Africa. The company was founded to create games that reward, entertain, educate and deliver high-value experiences to everyone. At Gudu, our goal is to bring happiness to everyone with games.
                            </p>
                        </div>

                    </div>

                </section>

                <section className='section-3'>

                    <div className='layout-width'>
                        <div className='grid-2-row'>
                            <h1 className='header-lg text-black has-underline underline-blue fit-content'>Our Values</h1>
                            <div className='grid-3-col bg-clip has-video-bg justify-content-between'>
                                <video src={ process.env.PUBLIC_URL + "/assets/video/pexels-rodnae-productions-8034286.mp4" } autoPlay loop muted></video>
                                <div>
                                    <div className='grid-3-row place-items-center'>
                                        <h1 className='header-md text-white fit-content'>Happiness</h1>
                                        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M50 1.5625C23.2422 1.5625 1.5625 23.2422 1.5625 50C1.5625 76.7578 23.2422 98.4375 50 98.4375C76.7578 98.4375 98.4375 76.7578 98.4375 50C98.4375 23.2422 76.7578 1.5625 50 1.5625ZM50 89.0625C28.457 89.0625 10.9375 71.543 10.9375 50C10.9375 28.457 28.457 10.9375 50 10.9375C71.543 10.9375 89.0625 28.457 89.0625 50C89.0625 71.543 71.543 89.0625 50 89.0625ZM70.625 59.4922C65.5664 61.1133 58.0469 62.0508 50 62.0508C41.9531 62.0508 34.4531 61.1133 29.375 59.4922C27.4414 58.8867 25.5859 60.5469 25.918 62.4805C27.4609 71.6797 39.8438 78.1055 50 78.1055C60.1562 78.1055 72.5195 71.6797 74.082 62.4805C74.3945 60.5664 72.5781 58.8867 70.625 59.4922ZM34.375 46.875C37.832 46.875 40.625 44.082 40.625 40.625C40.625 37.168 37.832 34.375 34.375 34.375C30.918 34.375 28.125 37.168 28.125 40.625C28.125 44.082 30.918 46.875 34.375 46.875ZM65.625 46.875C69.082 46.875 71.875 44.082 71.875 40.625C71.875 37.168 69.082 34.375 65.625 34.375C62.168 34.375 59.375 37.168 59.375 40.625C59.375 44.082 62.168 46.875 65.625 46.875Z" fill="white"/>
                                        </svg>
                                        <p className="text-white text-center f-16">Bringing smiles to the faces of many by playing games they love.</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='grid-3-row place-items-center'>
                                        <h1 className='header-md text-white'>Togetherness</h1>

                                        <svg width="115" height="100" viewBox="0 0 115 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_845_291)">
                                                <path d="M114.014 26.5939V32.3336C113.749 33.6552 113.525 34.9885 113.216 36.2984C111.906 41.8467 109.128 46.565 105.098 50.571C102.755 52.8993 100.421 55.2423 97.9897 57.6706C101.952 60.9967 104.253 64.985 102.799 70.2125C101.363 75.3812 97.6394 77.9214 92.4178 78.4277C92.2765 81.4064 91.2227 83.9289 89.1476 85.9864C87.0755 88.0409 84.5323 89.0475 81.6448 89.1741C81.2063 94.1426 78.8839 97.7277 74.1862 99.3348C69.4649 100.948 65.3883 99.5408 62.0563 95.9705C58.8186 99.3878 54.9597 100.718 50.5063 99.3407C45.5879 97.8189 43.1065 94.1926 42.6297 89.074C39.7422 88.8709 37.1932 87.8996 35.1181 85.8304C33.0194 83.7405 32.0275 81.1591 31.8362 78.2658C31.5977 78.2393 31.4506 78.2216 31.3063 78.2039C23.6475 77.2915 19.3855 70.657 21.8108 63.3396C22.0316 62.6685 21.7373 62.4036 21.3752 62.0416C17.4987 58.168 13.6222 54.2886 9.74574 50.4121C5.97521 46.6416 3.32907 42.2088 1.96332 37.046C1.55418 35.4948 1.30693 33.9024 0.983154 32.3306C0.983154 30.4174 0.983154 28.5042 0.983154 26.5909C1.21274 25.3724 1.39818 24.1391 1.68369 22.9323C6.51974 2.39008 30.0142 -6.46669 46.8947 5.19222C50.4504 7.64999 53.3614 11.0467 56.5462 14.0343C56.8553 14.3257 57.0025 14.7878 57.2409 15.1999C59.5574 12.8893 61.5294 10.9142 63.5104 8.94804C70.4775 2.02804 78.8427 -0.859462 88.5943 0.312023C99.9294 1.67483 109.878 10.2785 112.886 21.3458C113.354 23.0706 113.643 24.8425 114.014 26.5939ZM52.3371 40.8577C52.034 41.1462 51.7661 41.3905 51.51 41.6466C47.7365 45.4171 43.9601 49.1847 40.1896 52.9611C36.4485 56.711 32.678 60.4345 28.9899 64.2374C27.2091 66.0741 27.3151 68.682 29.0605 70.3538C30.7883 72.011 33.3756 71.9403 35.2064 70.1831C35.6567 69.7504 36.0924 69.3001 36.5339 68.8586C39.6833 65.7091 42.8151 62.5479 45.9823 59.419C47.9043 57.5234 50.9037 58.2299 51.6278 60.7318C52.0398 62.1505 51.5189 63.3073 50.5034 64.3169C46.9801 67.8195 43.4656 71.3281 39.9688 74.8543C38.0733 76.7646 38.0438 79.3754 39.8423 81.1415C41.576 82.8428 44.1956 82.7721 46.0647 80.9472C47.4069 79.6374 48.7403 78.3129 50.0383 76.9589C50.4033 76.5792 50.7124 76.1023 50.9184 75.6137C52.2665 72.4142 54.5388 70.2008 57.8472 69.1323C58.845 68.8085 59.9076 68.682 60.9349 68.4671C61.7149 61.9974 65.3795 58.4153 71.8167 57.6647C72.0228 54.1768 73.4091 51.3511 76.123 49.2465C80.338 45.9793 86.1306 46.203 90.1072 49.7675C91.2169 50.7624 92.2559 51.8367 93.3597 52.9052C95.7968 50.4592 98.181 48.1074 100.518 45.7144C106.087 40.013 108.295 33.2284 106.979 25.34C104.877 12.7421 91.9822 4.35335 79.4726 7.22319C71.8991 8.95981 67.3427 14.5759 62.2506 19.6915C62.5891 20.0477 62.8599 20.342 63.1424 20.6246C65.2647 22.7674 67.4605 24.8455 69.5003 27.0648C73.418 31.324 73.2001 38.0409 69.0999 42.1499C64.9762 46.2825 58.3859 46.4326 54.0443 42.4855C53.4762 41.9704 52.9317 41.4288 52.3312 40.8548L52.3371 40.8577ZM26.6057 57.2114C26.6616 57.1467 26.9147 56.8288 27.2003 56.5433C34.6589 49.0787 42.1205 41.6142 49.588 34.1526C51.4718 32.2718 53.226 32.2806 55.1187 34.1673C56.1606 35.2064 57.1791 36.266 58.2328 37.2932C60.0813 39.0946 62.6156 39.1653 64.3522 37.4846C66.1153 35.7774 66.1506 33.1047 64.3316 31.271C58.3005 25.184 52.3077 19.0587 46.1706 13.0836C40.7606 7.81776 34.1585 5.86627 26.7264 6.973C12.6892 9.06283 4.03843 24.0154 9.05403 37.3845C9.96649 39.8158 11.1115 42.1587 12.9423 43.9895C17.3869 48.4341 21.9668 52.7404 26.6057 57.2144V57.2114ZM92.2706 71.6784C94.0749 71.5989 95.4201 70.7895 96.1707 69.1205C96.9507 67.3927 96.6563 65.7533 95.37 64.4316C92.2206 61.188 89.024 57.9885 85.7803 54.8361C84.0408 53.1436 81.374 53.2466 79.7316 54.9214C78.0568 56.6286 78.0244 59.1865 79.761 60.9613C82.8722 64.1403 86.0364 67.2691 89.1888 70.4068C90.0307 71.2457 91.0461 71.7049 92.2677 71.6784H92.2706ZM80.8383 82.5367C83.2402 82.4219 84.5942 81.6183 85.3536 79.9553C86.1601 78.1892 85.8333 76.535 84.5088 75.1781C81.374 71.9698 78.204 68.7938 74.9927 65.662C73.2561 63.9666 70.5952 64.0461 68.941 65.715C67.2574 67.4133 67.2103 69.9947 68.9351 71.7549C72.0758 74.9573 75.2282 78.151 78.4718 81.2504C79.2136 81.9598 80.3321 82.2718 80.8383 82.5396V82.5367ZM70.6658 93.3096C72.4584 93.2037 73.8124 92.406 74.5571 90.7282C75.3253 88.9975 75.028 87.3639 73.7417 86.0423C70.5893 82.8016 67.3898 79.6021 64.152 76.4467C62.4154 74.7572 59.7516 74.8661 58.1033 76.5556C56.4373 78.2628 56.4255 80.8383 58.1563 82.5955C61.2763 85.7656 64.4376 88.8974 67.587 92.0381C68.4318 92.8799 69.4532 93.3155 70.6688 93.3067L70.6658 93.3096ZM57.3468 91.3375C55.3541 89.2359 53.4026 87.1785 51.4453 85.1122C49.1111 86.9165 48.6608 89.5597 50.3562 91.6319C51.7013 93.2772 54.8125 94.1279 57.3468 91.3375Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_845_291">
                                                <rect width="113.028" height="100" fill="white" transform="translate(0.986084)"/>
                                                </clipPath>
                                                </defs>
                                        </svg>

                                        <p className="text-white text-center f-16">Enabling people to spend time together by playing games they love.</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='grid-3-row place-items-center'>
                                        <h1 className='header-md text-white'>Experience</h1>

                                        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M50 15.4688C48.8672 15.4688 47.9688 16.3867 47.9688 17.5V20.3125C47.9688 21.4453 48.8867 22.3438 50 22.3438C51.1133 22.3438 52.0312 21.4258 52.0312 20.3125V17.5C52.0312 16.3672 51.1328 15.4688 50 15.4688Z" fill="white"/>
                                            <path d="M65.4883 40L67.8711 26.4648C69.5508 16.875 63.0273 7.61719 50.8203 2.28516C50.293 2.05078 49.707 2.05078 49.1992 2.28516C36.9922 7.59766 30.4688 16.8555 32.1484 26.4648L34.5312 40C22.3828 43.8281 14.6484 51.8555 14.6484 60.8008C14.6484 66.5625 17.9102 72.0313 23.75 76.3086C24.7656 77.0508 25.7227 76.582 26.0547 76.3672C26.7578 75.8984 27.1094 75.0586 26.9336 74.2383C26.7969 73.5742 24.6094 65.8008 38.125 60.5469L38.3203 61.6992C39.043 65.8398 43.9648 68.8477 50 68.8477C56.0352 68.8477 60.9375 65.8398 61.6797 61.6992L61.875 60.5469C75.5273 66.0352 73.2031 73.5742 73.0664 74.2188C72.8906 75.0391 73.2422 75.8984 73.9453 76.3477C74.9219 76.9727 75.8984 76.543 76.25 76.2891C82.1289 72.0508 85.3516 66.543 85.3516 60.7813C85.3516 51.8555 77.6172 43.8281 65.4883 40ZM22.8906 70.1758C20.1758 67.3047 18.7305 64.082 18.7305 60.7813C18.7305 53.7891 25.1367 47.3633 35.2344 44.0234L37.4219 56.4648C29.4336 59.1992 24.0234 64.3164 22.8906 70.1758ZM57.6563 60.9961C57.3438 62.8125 54.3164 64.7852 50 64.7852C45.6836 64.7852 42.6562 62.8125 42.3438 60.9961L36.1523 25.7617C34.8438 18.3203 40.1367 10.957 50 6.38672C59.8633 10.9375 65.1562 18.3008 63.8477 25.7617L57.6563 60.9961ZM77.1094 70.1953C75.957 64.3359 70.5664 59.1992 62.5781 56.5039L64.7656 44.0625C74.8633 47.3828 81.2695 53.8086 81.2695 60.8203C81.2891 64.082 79.8242 67.3242 77.1094 70.1953Z" fill="white"/>
                                            <path d="M61.6797 74.1211C60.5469 74.1211 59.6484 75.0391 59.6484 76.1523V88.5156C59.6484 89.6484 60.5664 90.5469 61.6797 90.5469C62.8125 90.5469 63.7109 89.6289 63.7109 88.5156V76.1523C63.7109 75.0195 62.8125 74.1211 61.6797 74.1211Z" fill="white"/>
                                            <path d="M50 74.1211C48.8672 74.1211 47.9688 75.0391 47.9688 76.1523V95.8203C47.9688 96.9531 48.8867 97.8516 50 97.8516C51.1133 97.8516 52.0312 96.9336 52.0312 95.8203V76.1523C52.0312 75.0195 51.1328 74.1211 50 74.1211Z" fill="white"/>
                                            <path d="M38.3203 74.1211C37.1875 74.1211 36.2891 75.0391 36.2891 76.1523V88.5156C36.2891 89.6484 37.207 90.5469 38.3203 90.5469C39.4336 90.5469 40.3516 89.6289 40.3516 88.5156V76.1523C40.3516 75.0195 39.4531 74.1211 38.3203 74.1211Z" fill="white"/>
                                        </svg>

                                        <p className="text-white text-center f-16">Delivering exciting memories for everyone by playing games they love.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <section className='section-5'>
                    <div className='layout-width'>
                        <h1 className='header-xl text-black has-underline underline-blue fit-content'>Our Leadership</h1>

                        <div className='spacing grid-2'>

                            <ImgContainer alt="chairman" bgImg="chairman.png" />

                            <div>
                                <h1 className='header-lg text-black'>Mr. Kwesi Amoafo-Yeboah</h1>
                            
                                <div className='grid-2-row'>
                                    <h1 className='header-lg text-uppercase f-48 fw-600 text-blue has-underline underline-blue'>Co-founder & Chairman</h1>
                                    <p className='f-20 fw-500'>
                                    Mr. Kwesi Amoafo-Yeboah received a BS degree in Engineering and Petro-Physics from San Francisco State University, San Francisco, California - USA.<br></br><br></br>

                                    Subsequently, he has held electronic design engineer positions at Fisher-Berkeley Corporation where he focused on the design and testing of hospital communication systems. He moved from there to hold various engineering and management positions with oil service giant, Schlumberger Technology Corporation.<br></br><br></br>

                                    From 1986 to present he has founded and managed several companies in the fields of financial services, telecommunications and equities management. He was responsible for the successful introduction of the Western Union Money Transfer Service to Ghana, Nigeria, Kenya, Uganda, Ethiopia, Eritrea and Zambia.<br></br><br></br>

                                    He is a board member in several privately held companies including his positions as Chairman of i-Zone Limited, Chairman of BlueCIoud Networks Limited, Chairman of Gudu Studios Limited and Vice Chairman of Achimota Golf Club where he previously served as Captain.<br></br><br></br>

                                    In the 2008 elections in Ghana, Mr. Amoafo-Yeboah contested for the high office of President as an Independent Candidate on the singular theme of job and opportunity creation for all Ghanaians.<br></br><br></br>

                                    Mr. Amoafo-Yeboah was subsequently appointed Chairman of the Ghana Venture Capital Trust Fund from 2013 to 2017.

                                    </p>
                                </div>

                            </div>

                        </div>

                        <div className='spacing grid-2'>

                            <div className='grid-2-row'>

                                <div className=''>
                                    <h1 className='header-lg text-black'>Kane Mani</h1>
                                    <div className='header-lg text-uppercase f-48 fw-600 text-blue has-underline underline-blue'>Co-founder & C.E.O</div>
                                </div>

                                <p className='f-20 fw-500'>
                
                                    Kane co-founded Gudu in August, 2019 and has served as it’s CEO since. Kane is responsible for overseeing and leading technology, product and crafting the long-term vision and strategy of the company.<br></br><br></br>

                                    Kane is also the Co-founder, CEO & CTO at Origgin, an electric utility company since September, 2010 and as well the Co-founder, CEO at Cast Social, a social media technology company since December, 2021.<br></br><br></br>

                                    Kane pursued a B.A in Film Directing from NAFTI [National Film and Television Institute, Ghana] but dropped out in 2010.
                                </p>

                            </div>

                            <div className='justify-self-lg-end'>

                                <ImgContainer alt="chairman" bgImg="kane-mani.png" />

                            </div>

                        </div>

                    </div>
                </section>

            </div>

        );

   } 
}