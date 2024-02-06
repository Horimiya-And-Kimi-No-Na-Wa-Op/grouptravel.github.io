import Header from "./Components/Header";
import ShowCase from "./Components/ShowCase"

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state={
      savedLocations: []
    }
  }
  
  saveLocation = (location) => {
    let locations = this.state.savedLocations;
    locations.push(location);
    
    this.setState(...this.state, {
      savedLocations: locations
    });
    console.log(this.state);
  }

  render() {
    return (
      <div className="main_container">
        <Header title="Travelicious"/>
        <ShowCase title="Rome" image="https://media.timeout.com/images/105211673/image.jpg" description="In Rome, classical ruins and early Christian places of worship stand next to – or lie beneath – Renaissance palazzos and Baroque fountains." onClick={this.saveLocation}/>
        <ShowCase title="New York" image="https://www.pixelstalk.net/wp-content/uploads/2016/05/New-York-City-Wallpaper-HD-Free-Download.jpg" description="Epicenter of the arts. Dining and shopping capital. Trendsetter. New York City wears many crowns, and spreads an irresistible feast for all."/>
        <ShowCase title="Vancouver" image="http://helivideopros.com/wp/wp-content/uploads/2016/02/Vancouver_canada_drone_cinematography_helicopter_services_uav_.jpg" description="Jim Perrin describes Vancouver as “a world-class city with ocean attached”. He adds: “The first thing you notice, flying into Vancouver, is the surrounding water."/>
        <ShowCase title="Bern" image="https://i.imgur.com/mCY5IEB.jpg" description="Not many cities have managed to retain their historic features quite as successfully as Bern, the capital of Switzerland. The old town of Bern is a UNESCO World Heritage Site and thanks to its 6 kilometres of arcades - the locals refer to them as 'Lauben' - boasts on of the longest weather-sheltered shopping promenades in Europe."/>
        <ShowCase title="Sydney" image="http://cdn.wonderfulengineering.com/wp-content/uploads/2015/05/Sydney-wallpaper-19.jpg" description="Enjoy Sydney’s natural beauty, from unspoilt beaches to public gardens and, of course, the sparkling harbour, before discovering its thriving restaurants and markets. Top it off with a trip to the Blue Mountains, a popular excursion among locals."/>
        <ShowCase title="Brisbane" image="http://s1.1zoom.me/b5050/310/Australia_Brisbane_Evening_Houses_Rivers_Bridges_521154_2560x1080.jpg" description="Combine art and outdoor adventure in Brisbane, where creative spaces, music and hip new restaurants meet pretty riverside gardens and man-made beaches. Explore the sun-soaked capital over a couple of days or a few weeks with our tips on the best things to see and do."/>
    	</div>
    )
  }

};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);