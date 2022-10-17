<template>
  <successful-action>
    <template v-slot:title>Thanks!</template>
    <template v-slot:doneBlockTitle>Payment successful</template>
    <template v-slot:doneBlockSubtitle>Your membership is active. Enjoy!</template>
    <template v-slot:buttonText>Continue</template>
  </successful-action>
</template>

<script>
import SuccessfulAction from '@/components/SuccessfulAction';

export default {
  name: 'PaymentSuccessView',
  components: {
    SuccessfulAction,
  },
  metaInfo: {
    title: 'Payment has been confirmed',
  },
};
</script>
