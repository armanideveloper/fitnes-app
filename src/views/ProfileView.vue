<template>
  <div class="settings-page profile">
    <div class="container">
      <settings-page-header items-start>
        <div class="profile-avatar">
          <img ref="avatar" :src="profileAvatarPreview" alt="" class="profile-avatar__img" />

          <div class="profile-avatar__input-wrapper">
            <input id="avatarInput" ref="avatarInput" type="file" @change="uploadNewAvatar" hidden />
            <label for="avatarInput"><img :src="require('@/assets/images/icons/camera.svg')" alt="" /></label>
          </div>
        </div>
      </settings-page-header>

      <main>
        <form id="profile-form" action="" class="profile__form profile-form" @submit.prevent="profileDataHandler">
          <fieldset class="profile-form__fields">
            <base-text-input id="firstname" v-model="profileData.name">First name *</base-text-input>
            <base-text-input id="surname" v-model="profileData.surname">Surname *</base-text-input>
            <base-text-input class="col-full" id="address" v-model="profileData.address" input-text-align="left"
              >Address *
            </base-text-input>
            <base-text-input class="col-full" id="email" v-model="profileData.email">Email *</base-text-input>
            <base-text-input id="birthday" v-model="profileData.birthday">Date of birth</base-text-input>
            <base-text-input id="phone" v-model="profileData.phone">Phone</base-text-input>

            <div class="profile-form__fields-wrapper col-full">
              <p class="profile-form__fields-label">Gender *</p>

              <div class="profile-form__radio-wrapper w-100">
                <div class="profile-form-radio" v-for="gender in genderOptions" :key="gender">
                  <label class="profile-form-radio__label"
                    ><input
                      class="profile-form-radio__input"
                      type="radio"
                      :value="gender"
                      v-model="profileData.gender"
                    />{{ gender }}</label
                  >
                </div>
              </div>
            </div>
          </fieldset>

          <base-button class="base-blue-btn">Apply changes</base-button>
        </form>
      </main>
    </div>
  </div>
</template>

<script>
// import BaseRadioInput from '@/components/BaseRadioInput';
import BaseButton from '@/components/BaseButton';
import BaseTextInput from '@/components/BaseTextInput';
import SettingsPageHeader from '@/components/SettingsPageHeader';

export default {
  name: 'ProfileView',
  components: {
    // BaseRadioInput,
    BaseButton,
    BaseTextInput,
    SettingsPageHeader,
  },
  metaInfo: {
    title: 'Profile',
  },
  data() {
    return {
      profileData: {
        avatar: require('@/assets/images/avatar.png'),
        name: '',
        surname: '',
        address: '',
        email: '',
        birthday: '',
        phone: '',
        gender: 'Male',
      },
      avatarPreviewImg: '',
      genderOptions: ['Male', 'Female'],
    };
  },
  computed: {
    profileAvatarPreview: {
      get() {
        if (!this.avatarPreviewImg) {
          return this.profileData.avatar;
        }

        return this.avatarPreviewImg;
      },
      set(val) {
        this.avatarPreviewImg = val;
      },
    },
  },
  methods: {
    uploadNewAvatar(e) {
      const input = e.target;
      // Ensure that you have a file before attempting to read it
      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        const reader = new FileReader();
        // Define a callback function to run, when FileReader finishes its job
        reader.onload = e => {
          // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
          // Read image as base64 and set to imageData
          this.profileData.avatar = input.files[0];
          this.profileAvatarPreview = e.target.result;
        };
        // Start the reader job - read file as a data url (base64 format)
        reader.readAsDataURL(input.files[0]);
      }
    },
    profileDataHandler() {
      console.table(this.profileData);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars/_colors.scss';
@import '@/assets/styles/vars/_mixins.scss';

@mixin fields-grid-base {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 8px;
}

.profile {
  padding-bottom: 66px;
}

.profile-form {
  &__fields {
    @include fields-grid-base;
    grid-row-gap: 37px;
    margin-bottom: 58px;
  }

  &__fields-wrapper {
    @include base-label-mixin;
  }

  &__radio-wrapper {
    @include fields-grid-base;
  }

  .col-full {
    grid-column: span 2;
  }
}

.profile-form-radio {
  @include base-input-mixin;
  padding: 17px 22px;

  &__label {
    display: grid;
    align-items: center;
    grid-template-columns: 24px auto;
    gap: 20px;
  }

  &__input {
    appearance: none;
    display: grid;
    place-content: center;
    width: 100%;
    height: 24px;
    background-color: #fff;
    border: 1px solid $dark-black;
    border-radius: 50%;

    &::before {
      content: url('@/assets/images/icons/checkmark.svg');
      transform: scale(0);
      transition: 0.2s transform ease-in-out;
    }

    &:checked {
      background-color: $light-green-2;

      &::before {
        transform: scale(1);
      }
    }
  }
}

.profile-avatar {
  position: relative;
  width: 82px;
  height: 82px;
  margin: 0 auto;

  &__img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  &__input-wrapper {
    position: absolute;
    top: -7px;
    right: -14px;
    display: flex;
    width: 36px;
    height: 36px;
    background-color: $blue-2;
    border: 2px solid #fff;
    border-radius: 50%;

    label {
      width: 100%;
      height: 100%;
    }

    input {
      clip: rect(0 0 0 0);
      width: 1px;
      height: 1px;
      margin: -1px;
    }
  }
}
</style>