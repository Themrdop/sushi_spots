import * as React from 'react';
import './App.css';
import axios from 'axios';

import Business from './componets/Business';

function App() {

  const [businesses, setBusinesses] = React.useState(null);

  React.useEffect(() => {
    getBusiness();
  }, []);

  async function getBusiness(){
    try {

      let response = await axios.get("http://localhost:3000/getTopSushiSpots");

      let business = await response.data;

      setBusinesses(business);

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">

      <div class="container">
          <h1>Top 5 sushi spots</h1>
          <div>
              <div class="row">
                {
                  businesses?.map(item => {
                    return <Business businessData={item}/>
                  })
                }
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;
