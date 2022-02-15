import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import React, {useState, useEffect} from "react";
import axios from 'axios';

function Competitions(props) {

  const accessToken = localStorage.getItem('accessToken');
  const [state, setState] = useState(null);
  const [isLoading, setLoading] = useState(true);

  let content = [<div class="loading box4">
    <div className="ball"></div>
    <div className="ball"></div>
    <div className="ball"></div>
  </div>
    ];

  useEffect(async () => {
    setLoading(true);
    axios({
      url: "https://intense-cove-28580.herokuapp.com/competitions",
      method: "GET",
      headers: {
        'Access-Control-Allow-Origin': '*',
        "Authorization": `Bearer ${accessToken}`
      }
    }).then((res) => {
      // console.log(res.data.competitions);
      setState(res.data.competitions);
      //console.log(data);
      setLoading(false);
    }).catch((err) => {
      alert(err);
      console.log(err);
    });
  }, []);

  if (state) {
    content = [];
    // console.log(state);
    state.forEach((ele, i) => {
      ele.competitions.forEach((le, j) => {
        // {var value = "#collapseExample"+i.toString()+j.toString()}
        content.push(<div className="box3">
          <a className="removestyle" data-bs-toggle="collapse" href={"#collapseExample" + i + j} role="button" aria-expanded="false" aria-controls="collapseExample">
            <div>
              <p className='jobTitle'>{le.Name}</p>
            </div>
            <div>
              <h1 key={ele.companyname} className="workLocation">{ele.type}</h1>
            </div>
          </a>

          <div class="collapse" id={"collapseExample" + i + j}>
            <div className="card-body">
              <div>
                <div className='employmentType'>
                  <p >
                    <b>Challange Format:</b><br/> {le["Challenge format"]}</p>
                </div>
                <div className='eligibilityCriteria'>
                  <p >
                    <b>Eligibility Criteria:</b><br/> {le["Eligibility Criteria"]}</p>
                </div>
                <div className='description'>
                  <p >
                    <b>Duration:
                    </b>{le["Duration"]}</p>
                </div>
                <div className='salary'>
                  <p >
                    <b>Prizes:
                    </b><br/> {le["Prizes"]}</p>
                </div>
                <div className='recruitmentProcess'>
                  <p>
                    <b>Guidelines:
                    </b><br/> {le["Guidelines"]}</p>
                </div>
                <div className='recruitmentProcess'>
                  <p>
                    <b>About Company:
                    </b><br/> {le["About Company"]}</p>
                </div>
                <a className="btn btn-primary" href={le["url"]} target="_blank">Participate Now</a>
              </div>
            </div>
          </div>

        </div>);
      });
    });
  }
  return (<div>{content}</div>);
}

export default Competitions;
