import React from 'react'

export default function SurveyItem( {survey, surveys} ) {
    return (
        <div className="container">
            <table className="table table-striped">
            <tbody>
                <tr className="row align-items-start">
                <td className="col-sm">{survey.name}</td>
                <td className="col-sm">{survey.expiryDate}</td>
                <td className="col-sm">{survey.trigger}</td>
                <td className="col-sm">{survey.accessibility}</td>
                <td className="col-sm">
                    { (survey.status==='Active') ? <span className="badge badge-success">{survey.status}</span> : <span className="badge badge-danger">{survey.status}</span>}
                </td>
                {/* <td className="col-sm"><button type="button" onClick={() => deleteItem(survey.id)} className="btn btn-outline-danger">Delete</button></td> */}
                </tr>
            </tbody>
            </table>
        </div>
    )
}
