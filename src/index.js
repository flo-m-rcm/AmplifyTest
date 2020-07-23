import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Amplify from 'aws-amplify';
//import config from './aws-exports';
var config = {
  "aws_project_region": "eu-central-1",
  "aws_cognito_identity_pool_id": "eu-central-1:e4d1a0f8-4c7a-43a2-860b-258909559e76",
  "aws_cognito_region": "eu-central-1",
  "aws_user_pools_id": "eu-central-1_oUSP0lY1Y",
  "aws_user_pools_web_client_id": "3jik9olc4uldom3b80ts23uafo",
  "oauth": {},
  "aws_appsync_graphqlEndpoint": "https://fyfdeeioxnfp5gnidzj5dt64xq.appsync-api.eu-central-1.amazonaws.com/graphql",
  "aws_appsync_region": "eu-central-1",
  "aws_appsync_authenticationType": "API_KEY",
  "aws_appsync_apiKey": "da2-prsbhd7fyzeonpiancowtdl6cu",
  "aws_user_files_s3_bucket": "amplifyappdf145d406d5d42b690467a6827087c8c173333-dev",
  "aws_user_files_s3_bucket_region": "eu-central-1"
};
Amplify.configure(config);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
