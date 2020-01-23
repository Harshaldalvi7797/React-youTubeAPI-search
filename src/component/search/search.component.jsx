import React from "react";



const Search=({placeholder,SearchYoutube})=>
{
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                    <input type="text" className="form-control"
                     placeholder={placeholder} 
                     onChange={SearchYoutube}
                    />

                    </div>
                   
                </div>
            </div>
        </div>

    );
}
export default Search;