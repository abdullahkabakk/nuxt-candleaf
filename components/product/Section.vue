<template>
  <Container class="py-20">
    <SectionTitleDescription
      id="product"
      :title="$t('home.products.title')"
      :description="$t('home.products.description')"
    />
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pb-10">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </Container>
</template>
