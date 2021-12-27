import {ProgressBar} from'react-bootstrap'

function Progressbar(){
    return(
        <div>
        <div><span className="textspace color1">Projects</span> </div>         
        <span className="textspace">Server Migration</span> 
        <ProgressBar variant="danger" now={20} label='20%' />
        <span className="textspace">Sales Tracking</span>        
        <ProgressBar variant="warning" now={40} label='40%'/>
        <span className="textspace">Customer Database</span>      
        <ProgressBar variant="primary" now={60} label='60%'/>
        <span className="textspace">Payout Details</span>
        <ProgressBar variant="info" now={80} label='80%' />
        <span className="textspace">Account Setup</span>
        <ProgressBar variant="success" now={100} label='100%'/>
      </div>   

    );
}

export default Progressbar
