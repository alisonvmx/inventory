<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable max-len -->
<template>
  <div class="title"><p>Inventário</p></div>
  <q-page>
    <q-form @submit="handleSubmit">
      <q-select outlined v-model="model" :options="estoques"  label="Estoque" class="q-mb-md"/>
      <q-btn type="submit" label="Select" color="primary"/>
    </q-form>
    <div class="table">
      <q-table
        flat
        :rows="rows"
        :columns="columns"
        row-key="name"
      />
    </div>
    <div class="imprimir" style="display: flex; justify-content: end;">
      <q-btn type="submit" label="Imprimir" color="black" style="margin: 30px 20px;"/>
    </div>
  </q-page>

</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    return {
      model: ref(''),

      historico: [
        'Saída', 'Entrada',
      ],
      estoques: [
        'ex: 1 andar', 'ex: Setor Sul',
      ],
      date: ref('2023-05-31 19:30'),
      columns: [
        { name: 'nome', field: 'nome', label: 'Nome' },
        { name: 'codigo', field: 'codigo', label: 'Código' },
        { name: 'quantidade_total', field: 'quantidade_total', label: 'Qtd. Total' },
        { name: 'quantidade_disponivel', field: 'quantidade_disponivel', label: 'Qtd. Disponivel' },
      ],
      rows: [
        {
          nome: 'Sofá',
          codigo: '64646',
          quantidade_total: '100',
          quantidade_disponivel: '20',
        },
        {
          nome: 'Projetor',
          codigo: '73383',
          quantidade_total: '20',
          quantidade_disponivel: '10',
        },
        {
          nome: 'Geladeira',
          codigo: '82864',
          quantidade_total: '50',
          quantidade_disponivel: '30',
        },
        {
          nome: 'notebook',
          codigo: '15422',
          quantidade_total: '70',
          quantidade_disponivel: '50',
        },
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
  font-weight: bold;
}
.q-table{
  padding: 5px;
}
.table{
  margin: 10px;
}

</style>
