<template>
  <successful-action>
    <template v-slot:title>All done!</template>
    <template v-slot:doneBlockTitle>New password created</template>
    <template v-slot:doneBlockSubtitle>Go to Settings for other changes</template>
    <template v-slot:buttonText>Continue</template>
  </successful-action>
</template>

<script>
import SuccessfulAction from '@/components/SuccessfulAction';

export default {
  name: 'ChangePasswordSuccessView',
  components: {
    SuccessfulAction,
  },
  metaInfo: {
    title: 'Password changed successfully',
  },
};
</script>
