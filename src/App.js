import React,{Component} from 'react';
import Search from "./component/search/search.component";
import Axios from "axios";
import Ylist from './component/youtubelist/youtubelist';
import Ydetails from './component/youtubedetails/youtubedetails';

class App extends Component
{
  constructor()
  {
    super();
    this.state ={
      searchfield:"",
      youtubelist:[],
      loading:"",
      ydetails:""
    }
  }
  searchSomething=async (e)=>
  {
    this.setState({loading: true});
    e.preventDefault();

    console.log("hello");
    let item= await Axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyD4evUEH4srt9wtKQxlSayO9E9cHgB0mvs`,
    { 
      params:{
        part:"snippet",
        maxresult: 5,
        q:this.state.searchfield,
        pageToken:"AIzaSyD4evUEH4srt9wtKQxlSayO9E9cHgB0mvs"
      }
    })
    console.log(item);
    setTimeout(()=>{
      this.setState({loading:false});
      this.setState({youtubelist: item.data.items});
      this.setState({ydetails:item.data.items[0]})
    },1000)
    
  }

  playvideo=(data)=>
  {
    console.log("shhs",data);
    this.setState({ydetails: data});
    
  }
  render()
  {
    let style={
      padding:"50px"
    }
    return(
      <div className="container" style={style}>
        {/* <div className="row"> */}
          <form onSubmit={this.searchSomething}>
          <Search placeholder="Search something" SearchYoutube={e=>this.setState({searchfield: e.target.value})} />
          </form>
        {/* </div> */}

     

        
        <div className="row">
          <div className="col-md-8">
          <Ydetails details={this.state.ydetails} />

          </div>

            
          <div className="col-md-4">
          { this.state.loading ? "loading..." : <Ylist list={this.state.youtubelist} pv={this.playvideo} />}

          </div>


        </div>
      </div>

    );
  }
}

export default App;
