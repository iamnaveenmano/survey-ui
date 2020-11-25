import React from 'react'
import SurveyItem from './SurveyItem'

export default function surveys({ surveys }) {
    return (
        surveys.map((survey) => {
            return <SurveyItem key={survey.id} survey={survey} surveys={surveys}/>
        })
    )
}
