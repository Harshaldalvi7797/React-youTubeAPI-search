import React from "react";
import Yitem from "./youtubeitem";


const Ylist = ({list,pv})=>
{
    return(
        <div className="container">
            <div className="row">

                {
                    list.map(data => (
                        // <div className="col-md-4">
                        <Yitem key={data.id.videoId} d={data} video={pv}/>
                        // </div>
                    )
                        
                        )
                }
  
                
            </div>
        </div>

    )

};
export default Ylist;