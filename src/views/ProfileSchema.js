import * as Yup from 'yup';

const ProfileSchema = Yup.object().shape({
  telefono: Yup.string()
    .email('Invalid email')
    .required('Required'),
});

export default ProfileSchema;