<template>
  <div class="settings-page payments">
    <div class="container">
      <settings-page-header>Payments</settings-page-header>

      <main>
        <ul class="payments__list">
          <payments-item
            v-for="(item, index) in payments"
            :key="`payments-item_${index}`"
            :payment-date="item.paymentDate"
            :paid="item.paid"
            :sum="item.sum"
            :name="item.name"
          />
        </ul>
      </main>
    </div>
  </div>
</template>

<script>
import SettingsPageHeader from '@/components/SettingsPageHeader';
import PaymentsItem from '@/components/PaymentsItem';

export default {
  name: 'PaymentsView',
  components: {
    SettingsPageHeader,
    PaymentsItem,
  },
  metaInfo: {
    title: 'Payments',
  },
  data: () => ({
    payments: [
      {
        name: 'Standard membership - 150 RON',
        sum: '150 RON',
        paid: false,
      },
      {
        name: 'Standard membership - 150 RON',
        sum: '150 RON',
        paid: true,
        paymentDate: '12.07.2022',
      },
      {
        name: 'Pachet PT 12 intrari',
        sum: '150 RON',
        paid: false,
      },
      {
        name: 'Pachet PT 12 intrari',
        sum: '150 RON',
        paid: true,
        paymentDate: '12.07.2022',
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.payments {
}
</style>
