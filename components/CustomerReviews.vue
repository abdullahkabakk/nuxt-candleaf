<script setup lang="ts">
import SectionTitleDescription from '~/components/SectionTitleDescription.vue';
import customers from '~/utils/customers';
</script>

<template>
  <div class="bg-primary/10 dark:bg-background-dark py-20">
    <SectionTitleDescription
      :title="$t('home.customerReviews.title')"
      :description="$t('home.customerReviews.description')"
    />
    <Container>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div v-for="customer in customers">
          <CustomerReviewCard :customer="customer" />
        </div>
      </div>
    </Container>
  </div>
</template>
