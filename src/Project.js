import React, { useState, useEffect } from 'react';

function Project(props){
  const [project_status, setStatus] = useState('offline');
  // project_status should be: 'offline', or 'online'
  
  let check_project = (url)=>{
    return new Promise((resolve, reject)=>{
      fetch('./check_project.php?url='+url).then((res)=>resolve(res.text().then((text=>console.log(text)))));
    });
    
  }

  const check_valid = function(){
    console.log("hello")
    if(project_status !== 'online'){
      window.location = props.projectUrls[0]
    }
  }

  useEffect(()=>{
    if(project_status === 'offline'){
      let url_responses = props.projectUrls.map((url)=>check_project(url));
      Promise.all(url_responses).then((vals)=>{
        console.log(vals);
        setStatus('online');
      });

    }
  }, [project_status, props.projectUrls]);

  return (
    <div className="project">
      <img  src={props.imgUrl} 
            className={project_status} 
            alt="Heart Disease Predictor"
            onClick={check_valid}
      />

      {project_status === ""? "Online": "Starting Up..."}
    </div>
  );
}

export default Project;