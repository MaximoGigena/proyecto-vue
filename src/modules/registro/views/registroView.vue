<template> 
    <div> 
        <Form :validation-schema="schema" @submit="onSubmit" v-slot="{ errors }">
            <div>   
                <h1>Formulario de Registro</h1>
                <label for="nombre">Nombre de usuario:</label>
                <Field  type="text" name="nombre" id="nombre" placeholder="Ingrese el nombre de usuario" v-model="nombre" />
                <ErrorMessage :name="'nombre'" :errors="errors" />
            </div> 
            <div>    
                <label for="correo">Correo:</label>
                <Field  type="email" id="correo" placeholder="ingrese su email" name="correo" v-model="email" />
                <ErrorMessage :name="'correo'" :errors="errors" />
            </div>
            <div>
            <button type="submit">registrar</button>
            </div>
        </Form>
    </div> 
</template>
<script setup> 
    import { ref } from 'vue';
    import { Form, Field } from 'vee-validate';
    import { registroSchema as schema} from '../schemas/validationSchemas.js';
    import { ErrorMessage } from 'vee-validate';
    import { useRegistrarStore } from '../stores/registrarStore.js';
   
    const registrarStore = useRegistrarStore()

    const nombre = ref('')
    const email = ref('')

    const onSubmit = (values) => {
        console.log('Formulario enviado:', values);
        registrarStore.guardarRegistro(nombre.value, email.value)
    };
</script> 

<style setup>
</style>