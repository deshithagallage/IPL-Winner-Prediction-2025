import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

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

const validationSchema = Yup.object({
  battingTeam: Yup.string().required('Required'),
  bowlingTeam: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  runsLeft: Yup.number().required('Required').min(0, 'Must be 0 or more'),
  ballsLeft: Yup.number().required('Required').min(0, 'Must be 0 or more'),
  wicketsLeft: Yup.number().required('Required').min(0, 'Must be 0 or more').max(10, 'Must be 10 or less'),
  currentRunRate: Yup.number().required('Required').min(0, 'Must be 0 or more'),
  requiredRunRate: Yup.number().required('Required').min(0, 'Must be 0 or more'),
  target: Yup.number().required('Required').min(0, 'Must be 0 or more')
});

const PredictionForm = () => {
  return (
    <Formik
      initialValues={{
        battingTeam: '',
        bowlingTeam: '',
        city: '',
        runsLeft: '',
        ballsLeft: '',
        wicketsLeft: '',
        currentRunRate: '',
        requiredRunRate: '',
        target: ''
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        axios.post('http://localhost:5000/predict', values)
          .then(response => {
            console.log(response.data);
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
              <Field type="text" name="city" className="input"/>
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

          <div className="form-row">
            <div className="form-item">
              <label htmlFor="currentRunRate" className="label">Current Run Rate:</label>
              <Field type="number" step="0.01" name="currentRunRate" className="input"/>
              <ErrorMessage name="currentRunRate" component="div" className="error" />
            </div>

            <div className="form-item">
              <label htmlFor="requiredRunRate" className="label">Required Run Rate:</label>
              <Field type="number" step="0.01" name="requiredRunRate" className="input"/>
              <ErrorMessage name="requiredRunRate" component="div" className="error" />
            </div>
          </div>

          <div className="button-container">
            <button type="submit" disabled={isSubmitting}>Submit</button>
            <button type="button" onClick={resetForm} disabled={isSubmitting}>Reset</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default PredictionForm;

