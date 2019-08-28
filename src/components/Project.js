import React, { useState, useEffect } from 'react';
import '../css/Project.css';
/**
 * 
 * @param {*} props 
 * @var project_status 
 * project_status should be: 'offline', 'online'
 * 
 */
function Project(props){
  const [project_status, setStatus] = useState('offline');
  
  /**
   * 
   * @param {url} url of site to check
   * Check if site is responding
   */
  let check_project = (url)=>{
    return new Promise((resolve)=>{
      // fetch('./check_project.php?url='+url).then((res)=>resolve(res.text().then((text=>console.log(text)))));
      fetch('./check_project.php?url='+url).then((res)=>resolve(res.status));
    });
    
  }

  const check_valid = function(){
    if(project_status === 'online'){
      window.location = "https://"+props.projectUrls[0];
    }
  }

  useEffect(()=>{
    if(project_status === 'offline'){
      let url_responses = props.projectUrls.map((url)=>check_project(url));
      Promise.all(url_responses).then((vals)=>{
        setStatus('online');
      });
    }
  }, [project_status, props.projectUrls]);

  return (
    <div className="project hover">
     <p>{project_status === "online"?"": "Starting Up..."}</p>
      <img  src={props.imgUrl} 
            className={project_status} 
            alt="Heart Disease Predictor"
            onClick={check_valid}
      />
    </div>
  );
}

export default Project;