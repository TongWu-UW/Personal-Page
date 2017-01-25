import * as React from 'react';
import {Jumbotron,DropdownButton,MenuItem} from 'react-bootstrap';
import AutoAffix from "react-overlays/lib/AutoAffix";
import reactCSS from 'reactcss'
import Background from '../img/nature.jpg'
import profile from '../img/profile.jpg'
import resume from '../img/Resume.pdf'
import scramblr from '../img/ScramblrFinal2.mp4'
import STQ from '../img/SurviveTheQuarter.mp4'
import LA from '../img/LocationAllocation.png'
import resumeP from '../img/Resume.jpg'

class App extends React.Component{
	render(){
        	const styles = reactCSS({
				'default':{
					bk:{
                        background:'url('+Background+')',
                        width:'100%',
                        height:'250px',
                        paddingTop:"25px"
					},
                    conta:{
                        color:"white",
                        fontFamily:"Trench"//"lucida Sans Unicode, Lucida Grande, sans-serif",
                             
                    },
                    normal:{
                            color:"white",
                            fontFamily:"Trench",//"lucida Sans Unicode, Lucida Grande, sans-serif",
                            opacity: "0.7",
                            fontSize: "24px"
                        },
                    header:{
                            paddingBottom:"5px",
                            borderBottom:"1px solid #4db8ff",
                            lineHeight: "1em",
                            fontSize: "36px",
                            fontFamily: "Glegoo,serif",
                            display: "block",
                            opacity: "0.8"
                    },
                    subheader:{
                        textIndent: "20px",
                        fontFamily: "Trench",
                        fontSize: "24px"
                    },
                    textdec:
                    {
                        textDecoration:'none'

                    },
                    bnormal:{
                        color:"black",
                        fontFamily:"lucida Sans Unicode, Lucida Grande, sans-serif",
                        opacity: "0.7",

                    },
                    alignul:{
                          margin: "1em 0",
                          padding: "0 0 0 40px"
                    },
                    alignli:{
                        margin:"1em 0"
                    }

				}
			})

		return(
            <body>
    			<div className="container-fluid">                    
                    
                    <div className="row">
                    
                        <div className="col-xs-6 col-md-2">
                            <AutoAffix>
                                <div className="container-fluid">

                                    <div className="row">
                                        <img src={profile} className='img-circle' style={styles.padd} width="100%" alt="Tong Wu" />  
                                    </div> 
                                    

                                    <br/>


                                    <div className="row">
                                    
                                        <center><ul className="nav nav-pills nav-stacked">
                                            <li><a href="#Home">Home</a></li>
                                            <li><a href={resume}>Resume</a></li> 
                                            <DropdownButton bsStyle='link' style={styles.textdec} title='Projects' id={'dropdown-basic-${6}'}>
                                                <center>
                                                <a style={styles.textdec} href="#Scramblr">Scramblr 1.0</a>
                                                    <br/>
                                                <a style={styles.textdec} href="#SVQ">Survive The Quarter!</a>
                                                    <br/>
                                                <a style={styles.textdec} href="#LA">Location Allocation</a>
                                                </center>
                                            </DropdownButton>


                                           
                                            
                                        </ul></center>
                                    </div>


                                    <center><h3>Contact Me</h3></center>
                                    

                                   
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-md-4"><a href="https://github.com/TongWu-UW" target="_blank"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a></div>
                                                <div className="col-md-4"><a href="mailto:tong.wupersoanl@gmail.com"><i className="fa fa-envelope-o fa-2x" aria-hidden="true"></i></a></div>
                                                <div className="col-md-4"><a href="https://ca.linkedin.com/in/tong-wu-332360135"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></a></div>
                                            </div>
                                        </div>
                                </div>
                            </AutoAffix> 
                        </div>
                        
                        <div className="col-xs-12 col-md-10" id="Home">
                            <Jumbotron style={styles.bk}>
                                <h1 style={styles.conta}><b>Hello!</b> I am Tong Wu</h1>
                                <p style={styles.normal}>I am a Self-Motivated, Enthusiastic and Tech-loving individual who works well under pressure, in fast-paced environments and within a team.</p>
                            </Jumbotron> 
                            

                            <div className="container-fluid">
                                <div id="Projects">    
                                <h1 style={styles.header}>Projects</h1>

                                    <div className="row">
                                        <div className="container-fluid">
                                            <div style={styles.subheader} id="Scramblr"> <b>Scramblr 1.0</b></div>
                                            <div style={styles.subheader}>RBC Hacks Sept 2016</div>
                                            <div className="col-md-5"> 
                                                <br/>
                                                <center>
                                                <video width="200" controls>
                                                <source src={scramblr}/>
                                                </video>
                                                </center>
                                            </div>
                                            <div className="col-md-6">
                                                <br/>
                                                <br/>
                                                <br/>
                                                <div style={styles.bnormal}>
                                                <ul style={styles.alignul}>
                                                    <li style={styles.alignli}>
                                                        Scramblr 1.0 is an android application that allows user to  encrypt images with
                                                        an user set password into a static file  
                                                    </li>
                                                        
                                                    <li style={styles.alignli}>
                                                        The purpose of this application is to enchance cyber security
                                                    </li>
                                                    <li style={styles.alignli}>
                                                        Even if hackers do hack your WhatsApp or your
                                                        phone, Scramblr 1.0 elimates the possibility of private photos leaking
                                                    </li>
                                                    <li style={styles.alignli}>
                                                        Users can share their private photo on different social media platforms and only
                                                        people who decrypts the image using our app with the password can see the original image
                                                    </li>
                                                </ul>

                                             </div>
                                        </div>
                                    </div>
                                    <br/>
                                    <br/>
                                    <div className="row">
                                        <div className="container-fluid">
                                            <div className="col-md-12">

                                                <div style={styles.subheader} id="SVQ"><b>Survive The Quarter!</b></div>
                                                <div style={styles.subheader}>RBC Hacks Sept 2016</div>
                                                <br/>
                                                <center>
                                                <video width="900" controls>
                                                <source src={STQ}/>
                                                </video>
                                                </center>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="container-fluid">
                                            <div className="col-md-12">
                                            <center>Survive The Quarter! is a simulation web application game that encourages people
                                            to start a business using RBC information and data. It establishes a more entertaining way of financial learning
                                            without being overwhelmed by the cliche financial documents.</center>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <br/>
                                    <br/>
                                    <div className="row">
                                        <div className="container-fluid">
                                            <div className="col-md-5">

                                                <div style={styles.subheader} id="LA"><b>Location Allocation</b></div>
                                                <div style={styles.subheader}>June 2016</div>
                                                <br/>
                                                <center>
                                                <img src={LA} role="presentation"/>
                                                </center>
                                            </div>
                                            <div className="col-md-6">
                                                <br/>
                                                <br/>
                         
                                                <br/>
                                                <br/>
                                                <br/>
                                                Location Allocation project revolves around network
                                                analysis on finding the most optimal location for new lowe's
                                                opening departments in Waterloo, Ontario. Many scenarios have been accounted, 
                                                there are cases when there isn't an optimal location, 
                                                where we find one best location, and where there are two locations that are optimal.
                                                Network analysis will take all these 
                                                scenarios into account, because it allows us to perform data analysis on 
                                                a network dataset that gives us potential optimal locations according to 
                                                spatial interaction models and location-allocation modeling. On the left there is an example
                                                of a single site scenario map.    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                              
                            </div>           
                </div>
                        </div>
                    </div>
                 </div>  
           </body>
			)
	
	}
}
export default App
