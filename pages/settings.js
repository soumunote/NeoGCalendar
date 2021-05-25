import { ErrorMessage, Formik } from "formik";

export default function Settings() {
  return (
    <>
      <Formik>
        <Form>

          <label htmlFor="neoDbUsername">
            Username
            <Field name="neoDbUsername"/>
            <ErrorMessage name="neoDbUsername"/>
          </label>
        
          <label htmlFor="neoDbPassword">
            Password
            <Field name="neoDbPassword"/>
            <ErrorMessage name="neoDbPassword"/>
          </label>

          <label htmlFor="neoDbHostname">
            Hostname
            <Field name="neoDbHostname"/>
            <ErrorMessage name="neoDbHostname"/>
          </label>  

          

        </Form>
      </Formik>
    </>
  );
}