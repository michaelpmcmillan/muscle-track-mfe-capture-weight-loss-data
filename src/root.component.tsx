import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Helmet from "react-helmet";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  waist: Yup.number()
    .min(100)
    .max(1000000)
    .required("Waist measurement is required."),
  hip: Yup.number()
    .min(100)
    .max(1000000)
    .required("Hip measurement is required."),
  neck: Yup.number()
    .min(100)
    .max(1000000)
    .required("Neck measurement is required."),
  weight: Yup.number()
    .min(1)
    .max(999)
    .required("Weight measurement is required."),
});

export default function Root(props) {
  return (
    <Formik
      initialValues={{ waist: 0, hip: 0, neck: 0, weight: 0 }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          setSubmitting(true);
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 1000);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <Form onSubmit={handleSubmit}>
          <Helmet>
            <link
              rel="stylesheet"
              href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
              integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
              crossOrigin="anonymous"
            ></link>
          </Helmet>

          <Form.Group>
            <Form.Label>Waist (mm)</Form.Label>
            <Form.Control
              name="waist"
              type="text"
              placeholder=""
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.waist}
              className={touched.waist && errors.waist ? "error" : null}
            />
            <Form.Text className="text-muted">
              Above belly button, but below the ribs. Stand up straight, but
              relaxed! Take the measurement after you've gently exhailed.
            </Form.Text>
            {touched.waist && errors.waist ? (
              <div className="error-message">{errors.waist}</div>
            ) : null}
          </Form.Group>

          <Form.Group>
            <Form.Label>Hip (mm)</Form.Label>
            <Form.Control
              name="hip"
              type=""
              placeholder=""
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.hip}
              className={touched.hip && errors.hip ? "error" : null}
            />
            <Form.Text className="text-muted">
              Measure the largest part of your butt, just below where your
              thighs rotate in your pelvis.
            </Form.Text>
            {touched.hip && errors.hip ? (
              <div className="error-message">{errors.hip}</div>
            ) : null}
          </Form.Group>

          <Form.Group>
            <Form.Label>Neck (mm)</Form.Label>
            <Form.Control
              name="neck"
              type=""
              placeholder=""
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.neck}
              className={touched.neck && errors.neck ? "error" : null}
            />
            <Form.Text className="text-muted">
              Measure the smallest part of your neck. This is easier with either
              a mirror, or another person.
            </Form.Text>
            {touched.neck && errors.neck ? (
              <div className="error-message">{errors.neck}</div>
            ) : null}
          </Form.Group>

          <Form.Group>
            <Form.Label>Weight (kg)</Form.Label>
            <Form.Control
              name="weight"
              type=""
              placeholder=""
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.weight}
              className={touched.weight && errors.weight ? "error" : null}
            />

            {touched.weight && errors.weight ? (
              <div className="error-message">{errors.weight}</div>
            ) : null}
          </Form.Group>

          <Form.Group>
            <Button variant="primary" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Please wait..." : "Ok"}
            </Button>
          </Form.Group>
        </Form>
      )}
    </Formik>
  );
}
