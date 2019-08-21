import React, { useState, useEffect } from 'react';

/**
 * 
 * @param {*} props 
 * @var project_status should be: 'offline', or 'online'
 * 
 */
function Project(props){
  const [project_status, setStatus] = useState('offline');
  

  let check_project = (url)=>{
    return new Promise((resolve)=>{
      // fetch('./check_project.php?url='+url).then((res)=>resolve(res.text().then((text=>console.log(text)))));
      fetch('./check_project.php?url='+url).then((res)=>resolve(res.status));
    });
    
  }

  const check_valid = function(){
    if(project_status === 'online'){
      console.log("http://"+props.projectUrls[0]);
      window.location = "http://"+props.projectUrls[0];
    }
  }

  useEffect(()=>{
    if(project_status === 'offline'){
      let url_responses = props.projectUrls.map((url)=>check_project(url));
      Promise.all(url_responses).then((vals)=>{
        console.log(vals);
        console.log("Set status online");
        setStatus('online');
        console.log("Status set");
      });
    }
  }, [project_status, props.projectUrls]);

  return (
    <div className="project hover">
      <img  src={props.imgUrl} 
            className={project_status} 
            alt="Heart Disease Predictor"
            onClick={check_valid}
      />

      {project_status === "online"? "gg": "Starting Up..."}
    </div>
  );
}

export default Project;