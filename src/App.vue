<template>
  <q-layout view="lHh LpR lFf">
    <q-page-container>
      <q-page class="flex flex-center">
        <user-form />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import UserForm from '@/components/forms/UserForm.vue';
</script>
