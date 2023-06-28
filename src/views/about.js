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
                    <h1 className='page-hero-header'>This is <span className='icon'><img src={ process.env.PUBLIC_URL + "/assets/img/GUDUlogo2.png" } /></span></h1>
                </PageHero>

                <section className='section-2'>

                    <div className='layout-width'>

                        <div className='grid-2-row'>
                            <h1 className='header-xl text-black has-underline underline-blue fit-content'>We are GUDU</h1>
                            <p className='text-black f-32 fw-400'>
                            Gudu Studios Ltd is a video game and software developer based in Ghana, West Africa. The company was founded to create games that reward, entertain, educate and deliver high-value experiences to everyone. At Gudu Studios, our goal is to bring happiness to everyone through games.
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
                                        <p className="text-white text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et veli</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='grid-3-row place-items-center'>
                                        <h1 className='header-md text-white'>Competitiveness</h1>

                                        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M78.8105 67.3142L76.8552 39.2454L84.5346 26.9738V0H65.7563V8.35773H59.3892V0H40.6109V8.35773H34.2441V0H15.4653V26.9738L23.1447 39.2454L21.1894 67.3142L13.8738 79.7841V100H86.1264V79.7841L78.8105 67.3142ZM29.1847 41.5499H70.815L72.4598 65.1606H27.54L29.1847 41.5499ZM71.987 35.3643H28.013L24.1422 29.1788H75.8581L71.987 35.3643ZM28.0583 6.18557V14.5433H46.7963V6.18557H53.2035V14.5433H71.9416V6.18557H78.3488V22.9932H21.6509V6.18557H28.0583ZM25.9956 71.346H74.0045L77.6334 77.5315H22.3668L25.9956 71.346ZM20.0593 93.8144V83.7171H79.9408V93.8144H20.0593Z" fill="white"/>
                                        </svg>

                                        <p className="text-white text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et veli</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='grid-3-row place-items-center'>
                                        <h1 className='header-md text-white'>Innovation</h1>

                                        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M50 15.4688C48.8672 15.4688 47.9688 16.3867 47.9688 17.5V20.3125C47.9688 21.4453 48.8867 22.3438 50 22.3438C51.1133 22.3438 52.0312 21.4258 52.0312 20.3125V17.5C52.0312 16.3672 51.1328 15.4688 50 15.4688Z" fill="white"/>
                                            <path d="M65.4883 40L67.8711 26.4648C69.5508 16.875 63.0273 7.61719 50.8203 2.28516C50.293 2.05078 49.707 2.05078 49.1992 2.28516C36.9922 7.59766 30.4688 16.8555 32.1484 26.4648L34.5312 40C22.3828 43.8281 14.6484 51.8555 14.6484 60.8008C14.6484 66.5625 17.9102 72.0313 23.75 76.3086C24.7656 77.0508 25.7227 76.582 26.0547 76.3672C26.7578 75.8984 27.1094 75.0586 26.9336 74.2383C26.7969 73.5742 24.6094 65.8008 38.125 60.5469L38.3203 61.6992C39.043 65.8398 43.9648 68.8477 50 68.8477C56.0352 68.8477 60.9375 65.8398 61.6797 61.6992L61.875 60.5469C75.5273 66.0352 73.2031 73.5742 73.0664 74.2188C72.8906 75.0391 73.2422 75.8984 73.9453 76.3477C74.9219 76.9727 75.8984 76.543 76.25 76.2891C82.1289 72.0508 85.3516 66.543 85.3516 60.7813C85.3516 51.8555 77.6172 43.8281 65.4883 40ZM22.8906 70.1758C20.1758 67.3047 18.7305 64.082 18.7305 60.7813C18.7305 53.7891 25.1367 47.3633 35.2344 44.0234L37.4219 56.4648C29.4336 59.1992 24.0234 64.3164 22.8906 70.1758ZM57.6563 60.9961C57.3438 62.8125 54.3164 64.7852 50 64.7852C45.6836 64.7852 42.6562 62.8125 42.3438 60.9961L36.1523 25.7617C34.8438 18.3203 40.1367 10.957 50 6.38672C59.8633 10.9375 65.1562 18.3008 63.8477 25.7617L57.6563 60.9961ZM77.1094 70.1953C75.957 64.3359 70.5664 59.1992 62.5781 56.5039L64.7656 44.0625C74.8633 47.3828 81.2695 53.8086 81.2695 60.8203C81.2891 64.082 79.8242 67.3242 77.1094 70.1953Z" fill="white"/>
                                            <path d="M61.6797 74.1211C60.5469 74.1211 59.6484 75.0391 59.6484 76.1523V88.5156C59.6484 89.6484 60.5664 90.5469 61.6797 90.5469C62.8125 90.5469 63.7109 89.6289 63.7109 88.5156V76.1523C63.7109 75.0195 62.8125 74.1211 61.6797 74.1211Z" fill="white"/>
                                            <path d="M50 74.1211C48.8672 74.1211 47.9688 75.0391 47.9688 76.1523V95.8203C47.9688 96.9531 48.8867 97.8516 50 97.8516C51.1133 97.8516 52.0312 96.9336 52.0312 95.8203V76.1523C52.0312 75.0195 51.1328 74.1211 50 74.1211Z" fill="white"/>
                                            <path d="M38.3203 74.1211C37.1875 74.1211 36.2891 75.0391 36.2891 76.1523V88.5156C36.2891 89.6484 37.207 90.5469 38.3203 90.5469C39.4336 90.5469 40.3516 89.6289 40.3516 88.5156V76.1523C40.3516 75.0195 39.4531 74.1211 38.3203 74.1211Z" fill="white"/>
                                        </svg>

                                        <p className="text-white text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et veli</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <section className='section-4'>
                    <div className='layout-width'>
                        <div className='grid-2-col'>
                            <div className='grid-2-row'>
                                <h1 className='header-lg text-black has-underline underline-blue fit-content'>Our Mission</h1>
                                <p className='fw-600 f-32 text-black'>
                                To democratize video games accross Africa.
                                </p>
                            </div>
                            <div className='grid-2-row'>
                                <h1 className='header-lg text-black has-underline underline-blue fit-content'>Our Vision</h1>
                                <p className='fw-600 f-32 text-black'>
                                To become Africa’s biggest game company.
                                </p>
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
                                    <h1 className='header-lg text-uppercase f-48 fw-600 text-blue has-underline underline-blue'>Chairman</h1>
                                    <p className='f-20 fw-500'>
                                        Mr. Kwesi Amoafo-Yeboah recieved a BS degree in Engineering and Petro-Physics from San Franscisco State University, San Francisco, California - USA in January 1975. <br></br><br></br>

                                        Subsequently, he has held electronic design engineer positions at Fisher-Berkeley Corporation where he focused on the design and testing of hospital communication systems. He moved from there to hold various engineering and management positions with oil service giant, Schlumberger Technology Corporation. <br></br><br></br>

                                        From 1986 to present he has founded and managed several companies in the fields of financial services, real estate, telecommunications and equities management. He was responsible for the successful introduction of the Western Union Money Transfer Service to Ghana, Nigeria, Kenya, Uganda, Ethiopia, Eritrea and Zambia. <br></br><br></br>

                                        He is a board member in several privately held companies including his positions as Chairman of i-Zone Limited, Chairman of Okadagh Limited, Chairman of BlueCIoud Networks Limited, and Chairman of Gudu Studios Limited. He is also a member of the board of M-Pay Limited and a member of the board of 
                                        trustees of Achimota Golf Club where he also serves as Captain. <br></br><br></br>
                                        
                                        In the 2008 elections in Ghana, Mr. Amoafo-Yeboah contested for the high office of President as an Independent Candidate on the singular theme of job and opportunity creation for all Ghanaians. <br></br><br></br>

                                        Mr. Amoafo-Yeboah was subsequently appointed Chairman of the Ghana Venture Capital Trust Fund from 2013 to 2017. 

                                    </p>
                                </div>

                            </div>

                        </div>

                        <div className='spacing grid-2'>

                            <div className='grid-2-row'>

                                <div className='has-underline underline-blue'><h1 className='header-lg text-black'>Kane Mani - <span className='header-lg text-uppercase f-48 fw-600 text-blue'>C.E.O</span></h1></div>

                                <p className='f-20 fw-500'>
                
                                Kane Mani is a Ghanaian technology entrepreneur. <br></br><br></br>

                                In 2010, Kane co-founded Origgin, a consumer technology from his university room at NAFTI. In 2011, Kane left NAFTI to fully focus on building his company, Origgin. Since 2010, Kane has built Origgin into a leading and recognized consumer technology company. 
                                In 2019, Kane co-founded Gudu Studios Ltd, a video game and software company gaming company that creates entertaining and relevant mobile gaming products for the mass consumption.  <br></br><br></br>

                                Kane was named a “Top 10 under 30” entrepreneur in Ghana 2011 by YEC, Top 3 Young African Tech Entrepreneurs to Watch in 2013 by Cranchon.com and has been featured on both local and international platforms such as Reuters.com, IDEG, The KSM Show etc. on his efforts in entrepreneurship and technology. In 2017, Kane was named the 41st Most Influential Youth in Ghana by Avance Media. Kane has been described as one of the young 
                                African technology entrepreneurs who are building global technology companies from Africa. 

                                </p>

                            </div>

                            <div className='justify-self-lg-end'>

                                <ImgContainer alt="chairman" bgImg="kane-mani.png" />

                            </div>

                        </div>

                    </div>
                </section>

                <section className='section-6'>
                    <div className='layout-width'>
                        <h1 className='header-xl text-black has-underline underline-blue fit-content'>Meet The Team</h1>
                        <div className='flex-row-3 flex-wrap justify-content-center'>

                            <div>
                                <div className='profile-container'>
                                    <div className='body'>
                                        <img src={ process.env.PUBLIC_URL + "/assets/img/team.png" } />
                                    </div>
                                    <div className='footer text-center'>
                                        <h4 className='fw-600 f-36 text-black'>Kane Mani</h4>
                                        <p className='fw-600 f-32 text-blue'>Team Member</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className='profile-container'>
                                    <div className='body'>
                                        <img src={ process.env.PUBLIC_URL + "/assets/img/team.png" } />
                                    </div>
                                    <div className='footer text-center'>
                                        <h4 className='fw-600 f-36 text-black'>Kane Mani</h4>
                                        <p className='fw-600 f-32 text-blue'>Team Member</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className='profile-container'>
                                    <div className='body'>
                                        <img src={ process.env.PUBLIC_URL + "/assets/img/team.png" } />
                                    </div>
                                    <div className='footer text-center'>
                                        <h4 className='fw-600 f-36 text-black'>Kane Mani</h4>
                                        <p className='fw-600 f-32 text-blue'>Team Member</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className='profile-container'>
                                    <div className='body'>
                                        <img src={ process.env.PUBLIC_URL + "/assets/img/team.png" } />
                                    </div>
                                    <div className='footer text-center'>
                                        <h4 className='fw-600 f-36 text-black'>Kane Mani</h4>
                                        <p className='fw-600 f-32 text-blue'>Team Member</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className='profile-container'>
                                    <div className='body'>
                                        <img src={ process.env.PUBLIC_URL + "/assets/img/team.png" } />
                                    </div>
                                    <div className='footer text-center'>
                                        <h4 className='fw-600 f-36 text-black'>Kane Mani</h4>
                                        <p className='fw-600 f-32 text-blue'>Team Member</p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </section>

            </div>

        );

   } 
}