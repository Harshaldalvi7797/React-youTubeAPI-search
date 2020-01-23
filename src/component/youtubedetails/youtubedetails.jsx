import React from "react";

const Ydetails=({details})=>
{
    if(!details){ 
        return null; 
    }
    return (
        
       
        <div className="container">
            <div className="row">
                {/* <div className="col-md-8"> */}
                <div className="embed-responsive embed-responsive-16by9">
                <iframe src={`https://www.youtube.com/embed/${details.id.videoId}`}></iframe>
                    {/* </div> */}
                    
</div>
<div className="row">
                    <div className="card text-left">

    <h4 className="card-title">{details.snippet.title}</h4>
    <h4 className="card-title">{details.snippet.publishedAt}</h4>
    <p className="card-text">{details.snippet.description}</p>

        
                          </div>
                        


                </div>
           
                </div>
            </div>

        
    )

}

export default Ydetails;
