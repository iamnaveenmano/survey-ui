import React, { useState, useEffect } from 'react';
import Surveys from './components/Surveys'
import CreateSurvey from './components/CreateSurvey'
import './App.css';
// import Amplify, {API} from 'aws-amplify';
// import config from "./aws-exports"
// import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
// Amplify.configure(config)
function App() {
  // useEffect(() => {
  //   API.get('surveysapi', '/survey/id').then((surveyRes) => {
  //     setSurveys([ ...surveys, ...surveyRes])
  //   })
  // }, []);

  let [buttonClicked, setButtonClicked] = useState(false)
  const [surveys, setSurveys] = useState([])
  function onCreateSurveyClose() {
    setButtonClicked(false);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h3>Survey Admin</h3>
      </header>
      {/* <AmplifySignOut /> */}
      <br />
      <br/>
      <div className="container">
        <div className="row">
          <div className="col-sm"></div>
          <div className="col-sm"><h4>{buttonClicked ? 'Create New Survey': 'Surveys'}</h4></div>
          <div className="col-sm"></div>
        </div>
        {!buttonClicked ? <button className="btn btn-primary" onClick={()=> setButtonClicked(true)}>Create New Survey</button> : null}
      </div>
      <br/>
      {/* {(surveys.length===0) ? <div><h4>No surveys available. Please create a new survey</h4></div> : <Surveys surveys={surveys}/>} */}
      { ((surveys.length === 0 && buttonClicked) || (surveys.length > 0 && !buttonClicked) || (surveys.length > 0 && buttonClicked)) ? ( buttonClicked ? <CreateSurvey surveys={surveys} setSurveys={setSurveys} onClose={onCreateSurveyClose}/> : <Surveys surveys={surveys}/> ) : (<div><h4>No surveys available. Please create a new survey</h4></div>)}
    </div>
  );
}


// export default withAuthenticator(App);
export default App;
