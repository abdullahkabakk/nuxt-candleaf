<template>
<Container class="py-20">
  <SectionTitleDescription title="Products" description="Order it for you or for your beloved ones" />
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pb-10">
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </div>
</Container>
</template>