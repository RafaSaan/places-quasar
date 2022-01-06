<template>
  <div class="q-pa-md row justify-center q-mt-xl">
    <q-form class="q-gutter-md col-xs-12 col-sm-12 col-md-6">
      <q-input
        filled
        label="Correo electronico"
        type="email"
        hint="Correo"
        no-error-icon
        required
        v-model="loginData.email"
        lazy-rules
        :rules="[
          (val) => (val && val.length > 0) || 'El campo correo es obligatorio',
          isValidEmail,
        ]"
      />

      <q-input
        filled
        type="password"
        label="Contraseña*"
        lazy-rules
        hint="Contraseña"
        no-error-icon
        required
        v-model="loginData.password"
        :rules="[
          (val) => (val !== null && val !== '') || 'Contraseña incorrecta',
          (val) =>
            (val && val.length > 0) || 'El campo contraseña es obligatorio',
        ]"
      />

      <div class="row justify-end">
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
        <q-btn label="Submit" type="submit" color="primary" />
      </div>
    </q-form>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  name: "loginView",
  setup() {
    return {
      loginData: ref({
        email: "rafasanchez@gmail.com",
        password: "123456;",
      }),
      isValidEmail(val) {
        const emailPattern =
          /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
        return emailPattern.test(val) || "El correo no parece ser válido";
      },
    };
  },
};
</script>

<style></style>
