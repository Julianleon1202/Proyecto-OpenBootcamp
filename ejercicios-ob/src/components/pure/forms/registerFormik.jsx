import React from 'react';
import { User } from '../../../models/newContact';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const RegisterFormik = () => {


    let user = new User() 

    const initialValues = {
        username: '',
        name: '',
        lastName: '',
        email: '',
        password: '',
        confirm: '',

    }

    const registerSchema = Yup.object().shape(
        {
            username: Yup.string()
                .min(6, 'Nombre de usuario demasiado corto')
                .max(12, 'Nombre de usuario demasiado largo')
                .required('El nombre de usuario es requerido'),
            email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
            name: Yup.string()
                .min(2, 'Nombre demasiado corto')
                .required('El rol es necesario'),
            lastName: Yup.string()
                .min(2, 'Apellido demasiado corto')
                .required('El rol es necesario'),
            password: Yup.string()
                .min(6, 'Contraseña demasiado corta')
                .required('Password is required'),
            confirm:Yup.string()
                .when("password",{
                    is: value => (value && value.length > 0 ? true : false),
                    then: Yup.string().oneOf(
                        [Yup.ref("password")],
                        'Las contaseñas no coinciden'
                    )
                }).required('Es necesario confirmar la contraseña')
        }

    )

    const submit = (values) => {
        alert('register user')
    }

    return (
        <div>
            <h4>Register Formik</h4>
            <Formik
                initialValues = {initialValues}
                validationSchema = {registerSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
            {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                        <Form>
                            <label htmlFor="username">Nombre de usuario</label>
                            <Field id="username" name="username" placeholder="Tu nombre de usuario" />

                            {
                            errors.username && touched.username &&
                                (
                                    <ErrorMessage name="username" component='div' />
                                )
                            }

                            <label htmlFor="name">Nombre</label>
                            <Field id="name" name="name" placeholder="Digite su nombre" />

                            {
                            errors.name && touched.name &&
                                (
                                    <ErrorMessage name="name" component='div' />
                                )
                            }

                            <label htmlFor="lastName">Apellido</label>
                            <Field id="lastName" name="lastName" placeholder="Digite su apellido" />

                            {
                            errors.lastName && touched.lastName &&
                                (
                                    <ErrorMessage name="lastName" component='div' />
                                )
                            }

                            <label htmlFor="email">Email</label>
                            <Field id="email" name="email" placeholder="example@email.com" />

                            {
                            errors.email && touched.email &&
                                (
                                    <ErrorMessage name="email" component='div' />
                                )
                            }

                            <label htmlFor="password">Password</label>
                            <Field
                            id="password"
                            name="password"
                            placeholder="Digite su contraseña"
                            type="password"
                            />

                            { errors.password && touched.password &&
                                (
                                        <ErrorMessage name="password" component='div'/>
                                )
                            }

                            <label htmlFor="confirm">Password</label>
                            <Field
                            id="confirm"
                            name="confirm"
                            placeholder="Confirme su contraseña"
                            type="password"
                            />

                            { errors.confirm && touched.confirm &&
                                (
                                        <ErrorMessage name="confirm" component='div'/>
                                )
                            }

                            <button type="submit">Registro de contacto</button>
                            {isSubmitting ? (<p>Su contacto se está creando...</p>) : null}

                            {/* <label htmlFor="role">Rol de usuario</label> */}
                        </Form>
                    )
            }            

            </Formik>
        </div>
    );
}    

export default RegisterFormik;
