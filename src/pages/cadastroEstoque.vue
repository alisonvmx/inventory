<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable max-len -->
<template>
  <div class="title"><p>Cadastrar Estoque</p></div>
  <q-page>
    <q-form @submit="handleSubmit">
      <q-input outlined v-model="name" label="Nome" class="q-mb-md"/>
      <q-input outlined type="textarea" v-model="cpf" label="Descrição" class="q-mb-md"/>
      <q-input outlined v-model="te" label="Quantidade Itens" type="number" class="q-mb-md"/>
      <q-checkbox keep-color v-model="red" label="Estoque Ilimitado" color="red" style="color: red;" class="q-mb-md"/>
      <q-btn type="submit" label="Salvar" color="primary" class="q-mb-md" style="display: block;"/>
    </q-form>
  </q-page>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    return {
      model: ref(5),
      red: ref(false),
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
