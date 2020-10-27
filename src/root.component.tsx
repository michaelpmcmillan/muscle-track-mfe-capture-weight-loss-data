import React from "react";
import Form from "react-bootstrap/Form";
import Helmet from "react-helmet";
import { Formik } from "formik";
import { ValidationSchema } from "./validation";
import { FORM, BUTTON, FORM_GROUP } from "./styles";

export default function Root(props) {
  return (
    <Formik
      initialValues={{ waist: "", hip: "", neck: "", weight: "", height: "" }}
      validationSchema={ValidationSchema}
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
        <FORM onSubmit={handleSubmit}>
          <Helmet>
            <link
              rel="stylesheet"
              href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
              integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
              crossOrigin="anonymous"
            ></link>
          </Helmet>

          <FORM_GROUP>
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
          </FORM_GROUP>

          <FORM_GROUP>
            <Form.Label>Height (cm)</Form.Label>
            <Form.Control
              name="height"
              type="text"
              placeholder=""
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.height}
              className={touched.height && errors.height ? "error" : null}
            />
            <Form.Text className="text-muted">
              Make sure you're standing up straight!
            </Form.Text>
            {touched.height && errors.height ? (
              <div className="error-message">{errors.height}</div>
            ) : null}
          </FORM_GROUP>

          <FORM_GROUP>
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
          </FORM_GROUP>

          <FORM_GROUP>
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
          </FORM_GROUP>

          <FORM_GROUP>
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
          </FORM_GROUP>

          <FORM_GROUP>
            <BUTTON variant="primary" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Please wait..." : "Ok"}
            </BUTTON>
          </FORM_GROUP>
        </FORM>
      )}
    </Formik>
  );
}
