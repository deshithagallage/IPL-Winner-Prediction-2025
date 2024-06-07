import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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
        console.log(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="form-container">
          <div className="form-row">
            <div className="form-item">
              <label htmlFor="battingTeam" className="label">Batting Team:</label>
              <Field type="text" name="battingTeam" className="input"/>
              <ErrorMessage name="battingTeam" component="div" className="error" />
            </div>

            <div className="form-item">
              <label htmlFor="bowlingTeam" className="label">Bowling Team:</label>
              <Field type="text" name="bowlingTeam" className="input"/>
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
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default PredictionForm;

