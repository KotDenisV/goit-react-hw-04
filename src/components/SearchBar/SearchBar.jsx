import { Formik, Form, Field, ErrorMessage } from 'formik';
import s from './SearchBar.module.css';
import * as Yup from "yup";

function SearchBar({ setQuery }) {
    const initialValues = {
      query: '',
    };

    const handleSubmit = values => {
      console.log(values);
      setQuery(values.query);
    };
    
    const registerSchema = Yup.object({
      query: Yup.string().required('This field is required!')        
    });

    return (
        <div className={s.formWrapper}>
            <Formik validationSchema={registerSchema} initialValues={initialValues} onSubmit={handleSubmit}>
                <Form className={s.form}>
                    <Field className={s.input} name='query' placeholder='Enter search value' type='search' />
                    <ErrorMessage name='query' component='span' className={s.error} />
                    <button type="submit">Search</button>
                </Form>
            </Formik>            
        </div>
    )
}

export default SearchBar;