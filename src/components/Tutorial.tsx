import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function Tutorial() {
    return (
        <>
            <div className="overlay"></div>
            <Navbar />
            <div className="tutorial-container">
                <div className="go-back"><Link to="/"><span>&lt;&lt;</span>Go Back</Link></div>
                <div className="tutorial-wrap">
                    <h2 className="title">Tutorial - Learn how NFTQuizer works.</h2>
                    
                    <p>You are allowed to answer from any collection advertised on our website for prizes. The prizes you win will be unique to the collections ecosystem from which you have answered. Also, these are completely random.</p>
                    
                    <p>Before you attempt the questions be sure you know enough about the collection. After three tries, you can only try again after 12hrs.</p>
                    
                    <p>The hearts ♥️ in the questions are your life lines. If you lose three hearts, you are stopped. You can only try again after 12hrs.</p>
                    
                    <p>If you are successful, you are redirected to the rewards page where you Approve your wallet for a prize transfer.</p>
                    
                    <p><strong>We wish you good luck!</strong></p>
                </div>
            </div>
        </>
    )
}

export default Tutorial;