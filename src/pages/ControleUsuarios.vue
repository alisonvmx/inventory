<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable max-len -->
<template>
  <div class="title"><p>Cadastrar Usuário</p></div>
  <q-page>
    <q-form @submit="handleSubmit">
      <q-input outlined v-model="name" label="Nome" class="q-mb-md"/>
      <q-input outlined v-model="cpf" label="CPF" class="q-mb-md"/>
      <q-input outlined v-model="cpf" label="Senha" class="q-mb-md"/>
      <q-input outlined v-model="cpf" label="Número CTPS" class="q-mb-md"/>
      <q-select outlined v-model="model" :options="options"  label="Perfil" class="q-mb-md"/>

      <q-btn type="submit" label="Salvar" color="primary"/>
    </q-form>
  </q-page>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    return {
      model: ref('Funcionário'),

      options: [
        'Funcionario', 'Gerente',
      ],
    };
  },
};
</script>

<style>
  .q-form {
    padding: 10px 10px 10px 10px;
    margin: 0% 0% 5% 0%;
  }
.title{
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 2% 0% 0%;
  }
p{
  font-size: 20px;
  margin: 0%;
}

</style>
