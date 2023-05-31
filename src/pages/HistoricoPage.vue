<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable max-len -->
<template>
  <div class="title"><p>Histórico</p></div>
  <q-page>
    <q-form @submit="handleSubmit">
      <q-select outlined v-model="model" :options="historico"  label="Tipo de Transação" class="q-mb-md"/>
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
        { name: 'codigo', field: 'codigo', label: 'Transação' },
        { name: 'identificacao', field: 'identificacao', label: 'Nome' },
        { name: 'teste', field: 'teste', label: 'Código' },
        { name: 'recebedor', field: 'recebedor', label: 'Catégoria' },
        { name: 'data_de_recebimento', field: 'data_de_recebimento', label: 'Data da Operação' },
      ],
      rows: [
        {
          codigo: 'Saída',
          identificacao: 'Sofá',
          teste: '62252',
          recebedor: 'movéis',
          data_de_recebimento: '03/05/2023',
        },
        {
          codigo: 'Entrada',
          identificacao: 'Projetos Led',
          teste: '75464',
          recebedor: 'Iluminaçao',
          data_de_recebimento: '09/04/2023',
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
