import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import {API} from 'aws-amplify';

export default function CreateSurvey({surveys, setSurveys, onClose}) {
    const [name, setName] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [url, setUrl] = useState('');
    const [email, setEmail] = useState('');
    const [trigger, setTrigger] = useState([]);
    const [accessibility, setAccessbility] = useState('');
    const [status, setStatus] = useState('');
    function handleClick(cb) {
        if(cb.target.checked) {
            setTrigger([...trigger, cb.target.value])
        } else {
            const index = trigger.indexOf(cb.target.value);
            if(index > -1){
                trigger.splice(index, 1)
            }
        }
    }
    const handleSubmit = e => {
        e.preventDefault();
        let id = uuidv4();
        setSurveys([{id,
                name,
                url,
                email,
                status,
                expiryDate,
                trigger,
                accessibility}, ...surveys])
                onClose();
        // API.post("surveysapi", "/survey", {
        //     body: {
        //         id,
        //         name,
        //         url,
        //         email,
        //         status,
        //         expiryDate,
        //         trigger,
        //         accessibility
        //     }
        // }).then(() => {
        //    setSurveys([{id,
        //         name,
        //         url,
        //         email,
        //         status,
        //         expiryDate,
        //         trigger,
        //         accessibility}, ...surveys])
        //         onClose();
        // })
    }
    return (
        <div className="container">
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-sm-4">
                    
                </div>
                <div className="col-sm-4">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value={status} onClick={()=> setStatus('Active')}/>
                        <label>Active</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value={status} onClick={()=> setStatus('Inactive')}/>
                        <label style={{ 'textAlign': 'left'  }}>Inactive</label>
                </div>
            </div>
            <br/>
            <div className="row">
                <label className="col-sm-4" style={{ 'textAlign': 'right'  }}>Survey Name</label>
                <div className="col-sm-6">
                    <input type="text" className="form-control" id="inputName" value={name} onChange={(e)=> setName(e.target.value)}/>
                </div>
            </div>
            <br/>
            <div className="row">
                <label className="col-sm-4" style={{ 'textAlign': 'right'  }}>Survey Expiry Date</label>
                <div className="col-sm-6">
                    <input type="date" className="form-control" id="inputDate" value={expiryDate} onChange={(e)=> setExpiryDate(e.target.value)}/>
                </div>
            </div>
            <br/>
            <div className="row">
                <label className="col-sm-4" style={{ 'textAlign': 'right'  }}>Survey URL</label>
                <div className="col-sm-6">
                    <input type="text" className="form-control" id="inputURL" value={url} onChange={(e)=> setUrl(e.target.value)}/>
                </div>
            </div>
            <br/>
            <div className="row">
                <label className="col-sm-4" style={{ 'textAlign': 'right'  }}>Survey From Email Address</label>
                <div className="col-sm-6">
                    <input type="text" className="form-control" id="inputEmail" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                </div>
            </div>
            <br/>
            <div className="row">
                <label className="col-sm-4" style={{ 'textAlign': 'right'  }}>Survey Trigger</label>
                <div className="col-sm-5">
                    <div className="form-check form-check-inline" style={{ 'textAlign': 'left'  }}>
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="Case Closure" onChange={handleClick.bind(this)}/>
                        <label className="form-check-label">Case Closure</label>
                    </div>
                    <div className="form-check form-check-inline" style={{ 'textAlign': 'left'  }}>
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="Activity Closure" onChange={handleClick.bind(this)}/>
                        <label className="form-check-label">Activity Closure</label>
                    </div>
                </div>
            </div>
            <br/>
            <div className="row">
                <label className="col-sm-4" style={{ 'textAlign': 'right'  }}>Survey Accessbility</label> 
                <div className="col-sm-6">
                    <select id="inputState" className="form-control" value={accessibility} onChange={(e)=> setAccessbility(e.target.value)}>
                        <option defaultValue>Choose...</option>
                        <option>UserGroup1</option>
                        <option>UserGroup2</option>
                        <option>UserGroup3</option>
                        <option>UserGroup4</option>
                    </select>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-sm-4">
                    
                </div>
                <div className="col-sm-4">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="button" onClick={()=> onClose()} className="btn btn-primary">Cancel</button>
                </div>
            </div>
        </form>
    </div>
  )
}
