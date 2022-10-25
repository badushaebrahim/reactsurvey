import React from 'react'
import { Formik } from 'formik';
function Surveyformik() {
    return (
        <div className='wrap'>
            <div >
                <center><h1>Survey Forms</h1></center>
                <Formik
                    initialValues={{ name: '', email: '', age: '' ,choice: 'select'}}
                    validate={values => {
                        const errors = {};
                        console.log(values.choice)
                        if(values.choice=='select') { errors.choice = 'Required'; }
                        else{errors.choice = '';}
                        
                        if (!values.name) { errors.name = 'Required'; }
                        else { errors.name = ''; }
                       
                        if (!values.age) { errors.age = 'Required'; }

                        else { errors.age = ''; }
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
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
                        /* and other goodies */
                    }) => (
                        <div className='card'>

                            <form onSubmit={handleSubmit}>
                                <div>
                                    <h4>Name</h4><br></br>
                                    <input
                                        type="text"
                                        name="name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                    /><br />
                                    <small className='errors'>{errors.name && touched.name && errors.name}</small><br />
                                </div>

                                <div>
                                    <h4>Email</h4>
                                    <input
                                        type="text"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    /><br />
                                    <small className='errors'> {errors.email && touched.email && errors.email}<br /></small>

                                </div>



                                <div>
                                    <h4>DOB</h4>
                                    <input
                                        type="date"
                                        name="age"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.age}
                                    /><br />
                                    <small className='errors'> {errors.age && touched.age && errors.age}<br /></small>

                                </div>

                                <div>
                                    <h4>Which Option best describes you ?</h4>
                                    <select
                                        name="choice"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.choice}>

                                        <option value="select" >select</option>

                                        <option >Student</option>
                                        <option >Non-Student</option>

                                    </select>
                                    <small className='errors'> {errors.choice && touched.choice && errors.choice}<br /></small>
                                </div>

                                <div>
                                    <h4>Which Option best describes you ?</h4>
                                    <select
                                        name="choice"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.choice}>

                                        <option value="select" >select</option>

                                        <option >Student</option>
                                        <option >Non-Student</option>

                                    </select>
                                    <small className='errors'> {errors.choice && touched.choice && errors.choice}<br /></small>
                                </div>



                                <button type="submit" disabled={isSubmitting}>
                                    Submit
                                </button>
                            </form>

                        </div>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Surveyformik