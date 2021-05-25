import { 
  Formik,
  Form,
  Field,
  ErrorMessage, 
} from "formik";

export default function Settings() {
  return (
    <>
      <Formik>
        <Form>

          <div className="form-group">
            <label htmlFor="neoDbUsername">Username</label>
            <Field name="neoDbUsername"/>
            <ErrorMessage name="neoDbUsername"/>
          </div>
        
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

          <label htmlFor="">
            Port
            <Field name="neoDbPort"/>
            <ErrorMessage name="neoDbPort"/>
          </label>

        </Form>
      </Formik>
    </>
  );
}