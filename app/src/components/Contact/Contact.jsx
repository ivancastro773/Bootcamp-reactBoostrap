import React from "react";
import { Formik, Form, Field } from "formik";
import Schema from "./validation/Schema";
//errors type
import errorHandle from "./validation/Errors";
import './validation/Errors.css';
const initialValue = { name: "", email: "", phone: 0, message: "" };

const Contact = () => {
  const fnValidationForm = (v) => alert(JSON.stringify(v));
  return (
    <section className="page-section" id="contact">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-8 col-xl-6 text-center">
            <h2 className="mt-0">Let's Get In Touch!</h2>
            <hr className="divider" />
            <p className="text-muted mb-5">
              Ready to start your next project with us? Send us a messages and
              we will get back to you as soon as possible!
            </p>
          </div>
        </div>

        <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
          <div className="col-lg-6">
            <Formik
              initialValues={initialValue}
              validationSchema={Schema}
              onSubmit={fnValidationForm}
            >
              {({ errors }) => {
                return (
                  <Form id="contactForm" data-sb-form-api-token="API_TOKEN">
                    <div className="form-floating mb-3">
                      <Field
                        className="form-control"
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your name..."
                        data-sb-validations="required"
                      />
                      {errorHandle(errors).name()}
                      <label for="name">Full name</label>
                    </div>

                    <div className="form-floating mb-3">
                      <Field
                        className="form-control"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="name@example.com"
                        data-sb-validations="required,email"
                      />
                      {errorHandle(errors).email()}
                      <label for="email">Email address</label>
                    </div>

                    <div className="form-floating mb-3">
                      <Field
                        className="form-control"
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(123) 456-7890"
                        data-sb-validations="required"
                      />
                      {errorHandle(errors).phone()}
                      <label for="phone">Phone number</label>
                    </div>

                    <div className="form-floating mb-3">
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        type="text"
                        placeholder="Enter your message here..."
                        data-sb-validations="required"
                      ></textarea>
                      {errorHandle(errors).message()}
                      <label for="message">Message</label>
                    </div>

                    <div className="d-grid">
                      <button
                        className="btn btn-primary btn-xl"
                        id="submitButton"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-4 text-center mb-5 mb-lg-0">
            <i className="bi-phone fs-2 mb-3 text-muted"></i>
            <div>+1 (555) 123-4567</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
