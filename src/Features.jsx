import './Features.css'

function Features(){
    return (
        <>
        <div className="feature-container">
            
            <div className="feature-heading">
                <h1 className='title'>Find the perfect Dorm for you!</h1>
                <h3 className='title-description'>The perfect dorm-room awaits you! Sign up for Ratemydorm!</h3>
                <button className='sign-up' type='submit'>Sign up</button>
            </div>
            <div className="features">
                <div className="feature-box">
                    <div className="img-container">
                        <img className="feature-img" src='https://marketing-assets.chegg.com/ZYPTD8JS/at/cnfbv8pzv54v4h3mcrrtv7x/0823-StudyLPUAE-icon1-dsk.jpg?auto=webp&fit=bounds&optimize=high' alt='Feature1 image'/>
                    </div>
                    <div className="content-container">
                        <h1 className='content-title'>Find the perfect college home for you!</h1>
                        <h3 className='content-description'>College can be an uncertain and time. Ratemydorm removes the doubt when it comes to moving in!</h3>
                    </div>  
                </div>
                <div className="feature-box">
                    <div className="img-container">
                        <img className="feature-img" src='https://marketing-assets.chegg.com/ZYPTD8JS/at/4fktnc9kh7rv9585r9srb3q/0823-StudyLPUAE-icon2-dsk.jpg?auto=webp&fit=bounds&optimize=high' alt='Feature1 image'/>
                    </div>
                    <div className="content-container">
                        <h1 className='content-title'>Find the top reviews frome each dorm!</h1>
                        <h3 className='content-description'>Each review is verified to be created from an actaul student.</h3>
                    </div>
                </div>
                
                <div className="feature-box">
                    <div className="img-container">
                        <img className="feature-img" src='https://marketing-assets.chegg.com/ZYPTD8JS/at/khvpq9rpkhfsk7bwgj64v/0823-StudyLPUAE-icon3-dsk.jpg?auto=webp&fit=bounds&optimize=high&width=400' alt='Feature1 image'/>
                    </div>
                    <div className="content-container">
                        <h1 className='content-title'>Get advice and learn from past tenants</h1>
                        <h3 className='content-description'>Get the best advice, hacks, and tricks to make the best out of your college experience and dorm</h3>
                    </div>  
                </div>
            </div>
    

         </div>
        </>
    )

}

export default Features