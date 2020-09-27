import React, { useState } from 'react';
import './App.css';

import { Formik, Field, Form, ErrorMessage } from "formik";
import { Col, Button, FormGroup, FormLabel } from 'react-bootstrap';

import { validationSchema } from "./validationSchema";

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
};

function App() {
  const [formValues, setFormValues] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Basic Form Validation using <code>Formik &amp; Yup</code>.
        </p>
        {formValues ? (<p>
          {formValues}
        </p>) : null}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            setFormValues(JSON.stringify(values));
          }}>
          {
            () => {
              return (
                <Form>
                  <FormGroup>
                    <Col sm={2}>
                      <FormLabel>
                        Name:
                    </FormLabel>
                    </Col>
                    <Col sm={10}>
                      <Field
                        type="text"
                        name="name"
                      />
                    </Col>
                    <ErrorMessage name="name">{value => <Col sm={10}><small className="text-danger">{value}</small></Col>}</ErrorMessage>
                  </FormGroup>
                  <FormGroup>
                    <Col sm={2}>
                      <FormLabel>Email: </FormLabel>
                    </Col>
                    <Col sm={10}>
                      <Field
                        type="text"
                        name="email"
                      />
                    </Col>
                    <ErrorMessage name="email">{value => <Col sm={10}><small className="text-danger">{value}</small></Col>}</ErrorMessage>
                  </FormGroup>
                  <FormGroup>
                    <Col sm={2}>
                      <FormLabel>Password: </FormLabel>
                    </Col>
                    <Col sm={10}>
                      <Field
                        type="password"
                        name="password"
                      />
                    </Col>
                    <ErrorMessage name="password">{value => <Col sm={10}><small className="text-danger">{value}</small></Col>}</ErrorMessage>
                  </FormGroup>
                  <FormGroup>
                    <Col sm={10}>
                      <FormLabel>Confirm Password: </FormLabel>
                    </Col>
                    <Col sm={10}>
                      <Field
                        type="password"
                        name="confirmPassword"
                      />
                    </Col>
                    <ErrorMessage name="confirmPassword">{value => <Col sm={12}><small className="text-danger">{value}</small></Col>}</ErrorMessage>
                  </FormGroup>
                  <FormGroup>
                    <Col>&nbsp;</Col>
                    <Col sm={10}><Button name="submit" type="submit">Submit</Button></Col>
                  </FormGroup>
                </Form>
              )
            }
          }

        </Formik>
      </header>
    </div>
  );
}

export default App;
