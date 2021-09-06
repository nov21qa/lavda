'use strict';

fetch("https://clist.by/api/v2/contest/?username=manavesh&api_key=0bc94771bb4c92eefa1ec425f417af50486d6075",
{
    method:"GET",
    origin:"strict-origin-when-cross-origin",
    
    headers: {
        'Content-Type': 'application/json', // Your headers
        
        'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Authorization': 'Bearer key',
        
      }
    
}).then((response)=>
response.json()).then((data)=>
data);
