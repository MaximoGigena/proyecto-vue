import * as yup from 'yup';

export const registroSchema = yup.object().shape({
  nombre: yup.string().required('El nombre es obligatorio').min(2, 'El nombre debe tener al menos 2 caracteres'),
  correo: yup.string().email('El correo electrónico no es válido').required('El correo electrónico es obligatorio'),
});