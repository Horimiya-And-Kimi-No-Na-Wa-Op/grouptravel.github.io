class ShowCase extends React.Component {
  ShowCase
  
  constructor(props) {
    super(props);    
    
    this.state = {
      image: this.props.image
    };
    
    this.fetchCityImage(this.props.title).then(image => {
      this.setState({
        image
      })
    });
  }
  
  async fetchCityImage(city) {
  return fetch("https://api.unsplash.com/search/photos?page=1&query=" + city, {
    headers: {
      Authorization:
        "Client-ID 26c22dbaf3df569f2704283a647173f071f9a45d3c870ee216aac157278f474a"
    }
  })
    .then(response => response.json())
    .then(response => {
      console.log(response);
      return response.results[0].urls.regular;
    })
    .catch(error => {
      return "";
    });
}

  render() {
    return (
      <div className="showcase_container type1" style={{backgroundImage: "url(" + this.state.image + ")"}}>
        <div className="showcase_text_container">
          <h1 className="showcase_title type1">{this.props.title}</h1>
          <p className="showcase_description type1">{this.props.description}</p>
          <button className="add_button type1" onClick={()=>this.props.onClick(this.props.title)}>Add {this.props.title} to travel</button>
        </div>
    	</div>
    )
  }
};

export default ShowCase;