import { Formik, Form, Field } from 'formik';
import TextField from '@material-ui/core/TextField';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { StyledPaper, useFormStyles } from './AddMem.styled';
import { useDispatch } from 'react-redux';
import { AddMem } from 'data/actions/mem.actions.js';

const AddMemForm = ({ setOpenModal }) => {
  const dispatch = useDispatch();
  const { form, button } = useFormStyles();
  return (
    <StyledPaper>
      <Typography id='add-new-mem' variant={'h5'}>
        Dodaj mema
      </Typography>
      <Formik
        initialValues={{
          title: 'kopytko',
          mem_image:
            'https://kopytko.pl',
        }}
        validationSchema={Yup.object().shape({
          title: Yup.string()
            .min(2, 'Title is too short!')
            .max(16, 'Too Long!')
            .required('Required'),
          mem_image: Yup.string()
            .url('Invalid URL Mem Image!')
            .required('Required'),
        })}
        onSubmit={(values) => {
          dispatch(AddMem({ uuid: uuidv4(), ...values }));
          setOpenModal(false);
        }}
      >
        {({ touched, errors }) => (
          <Form autoComplete='off' className={form}>
            <Field
              name='title'
              render={({ field }) => (
                <TextField
                  {...field}
                  error={touched.title && errors.title}
                  label='Tytuł mema'
                  margin='normal'
                  helperText={touched.title && errors.title}
                />
              )}
            />
            <Field name='mem_image'>
              {({ field }) => (
                <TextField
                  {...field}
                  margin='normal'
                  error={touched.mem_image && errors.mem_image}
                  label='Tu dej link do mema'
                  helperText={touched.mem_image && errors.mem_image}
                  FormHelperTextProps={{
                    filled: true,
                  }}
                  defaultValue='Hello World'
                />
              )}
            </Field>
            <Button
              className={button}
              variant='contained'
              color='primary'
              type='submit'
            >
              Dodaj
            </Button>
          </Form>
        )}
      </Formik>
    </StyledPaper>
  );
};

export default AddMemForm;
