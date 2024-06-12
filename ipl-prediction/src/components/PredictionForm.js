import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import PercentageBar from './PercentageBar'; // Import the PercentageBar component

const teamOptions = [
    'Chennai Super Kings',
    'Delhi Capitals',
    'Gujarat Titans',
    'Kolkata Knight Riders',
    'Lucknow Super Giants',
    'Mumbai Indians',
    'Punjab Kings',
    'Rajasthan Royals',
    'Royal Challengers Bangalore',
    'Sunrisers Hyderabad',
  ];

const cityOptions = [
    'Bangalore', 'Chandigarh', 'Delhi', 'Mumbai', 'Kolkata', 'Jaipur',
    'Hyderabad', 'Chennai', 'Cape Town', 'Port Elizabeth', 'Durban',
    'Centurion', 'East London', 'Johannesburg', 'Kimberley',
    'Bloemfontein', 'Ahmedabad', 'Cuttack', 'Nagpur', 'Dharamsala',
    'Visakhapatnam', 'Pune', 'Raipur', 'Ranchi', 'Abu Dhabi', 'Rajkot',
    'Kanpur', 'Bengaluru', 'Indore', 'Dubai', 'Sharjah', 'Navi Mumbai',
    'Guwahati', 'Other'
];

const validationSchema = Yup.object({
  battingTeam: Yup.string().required('Required'),
  bowlingTeam: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  runsLeft: Yup.number().required('Required').min(0, 'Must be 0 or more'),
  ballsLeft: Yup.number().required('Required').min(0, 'Must be 0 or more').max(120, 'Must be 120 or less'),
  wicketsLeft: Yup.number().required('Required').min(0, 'Must be 0 or more').max(10, 'Must be 10 or less'),
  target: Yup.number().required('Required').min(0, 'Must be 0 or more'),
});

const PredictionForm = () => {
  const [team1name, setTeam1Name] = useState('Batting Team');
  const [team2name, setTeam2Name] = useState('Bowling Team');
  const [percentage, setPercentage] = useState(50);

  return (
    <>
    <Formik
      initialValues={{
        battingTeam: '',
        bowlingTeam: '',
        city: '',
        runsLeft: '',
        ballsLeft: '',
        wicketsLeft: '',
        target: ''
      }}
      validationSchema={validationSchema}
      validate={values => {
        const errors = {};
        if (values.battingTeam === values.bowlingTeam) {
          errors.battingTeam = 'Cannot be the same as bowling team';
          errors.bowlingTeam = 'Cannot be the same as batting team';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        axios.post('http://localhost:5000/predict', values)
          .then(response => {
            console.log(response.data);
            setTeam1Name(response.data.batting_team);
            setTeam2Name(response.data.bowling_team);
            setPercentage(response.data.prediction);
            setSubmitting(false);
          })
          .catch(error => {
            console.error('There was an error!', error);
            setSubmitting(false);
          });
      }}
    >
      {({ isSubmitting, resetForm }) => (
        <Form className="form-container">
          <div className="form-row">
            <div className="form-item">
              <label htmlFor="battingTeam" className="label">Batting Team:</label>
              <Field as="select" name="battingTeam" className="input">
                <option value="">Select Team</option>
                {teamOptions.map((team, index) => (
                  <option key={index} value={team}>{team}</option>
                ))}
              </Field>
              <ErrorMessage name="battingTeam" component="div" className="error" />
            </div>

            <div className="form-item">
              <label htmlFor="bowlingTeam" className="label">Bowling Team:</label>
              <Field as="select" name="bowlingTeam" className="input">
                <option value="">Select Team</option>
                {teamOptions.map((team, index) => (
                  <option key={index} value={team}>{team}</option>
                ))}
              </Field>
              <ErrorMessage name="bowlingTeam" component="div" className="error" />
            </div>

            <div className="form-item">
            <label htmlFor="city" className="label">City:</label>
              <Field as="select" name="city" className="input">
                  <option value="">Select City</option>
                  {cityOptions.map((city, index) => (
                    <option key={index} value={city}>{city}</option>
                  ))}
              </Field>
              <ErrorMessage name="city" component="div" className="error" />
            </div>
          </div>

          <div className="form-row-2">
            <div className="form-row">
                <div className="form-item">
                <label htmlFor="runsLeft" className="label">Runs Left:</label>
                <Field type="number" name="runsLeft" className="input"/>
                <ErrorMessage name="runsLeft" component="div" className="error" />
                </div>

                <div className="form-item">
                <label htmlFor="ballsLeft" className="label">Balls Left:</label>
                <Field type="number" name="ballsLeft" className="input"/>
                <ErrorMessage name="ballsLeft" component="div" className="error" />
                </div>
            </div>

            <div className="form-row">
                <div className="form-item">
                <label htmlFor="wicketsLeft" className="label">Wickets Left:</label>
                <Field type="number" name="wicketsLeft" className="input"/>
                <ErrorMessage name="wicketsLeft" component="div" className="error" />
                </div>

                <div className="form-item">
                <label htmlFor="target" className="label">Target:</label>
                <Field type="number" name="target" className="input"/>
                <ErrorMessage name="target" component="div" className="error" />
                </div>
            </div>
          </div>

          <div className="button-container">
            <button type="submit" disabled={isSubmitting}>Submit</button>
            <button type="button" onClick={() => {
                resetForm();
                setTeam1Name('Batting Team');
                setTeam2Name('Bowling Team');
                setPercentage(50);
            }} disabled={isSubmitting}>Reset</button>
          </div>
        </Form>
      )}
    </Formik>
    <PercentageBar team1name={team1name} team2name={team2name} percentage={percentage} />
    </>
  );
};

export default PredictionForm;

