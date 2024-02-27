<template>
  <div>
    <form @submit.prevent="handleSubmit()" class="form" @click="closeAllSelectors()">
      <div class="form_required"><span style="color: red">*</span> Поле обязательное для заполнения.</div>
      <div class="form__inputWrapper">
        <input 
          :value="surname" 
          @input="setSurname($event.target.value)"
          type="text" 
          placeholder="Фамилия" 
          class="input"
          :class="{'form_inputError': ($v.surname.$dirty && !$v.surname.required)}">
        <span class="form_decor">*</span>
        <div v-if="($v.surname.$dirty && !$v.surname.required)" :class="{'form_error': ($v.surname.$dirty && !$v.surname.required)}">Поле должно быть заполненным</div>
      </div>

      <div class="form__inputWrapper">
        <input 
          :value="name" 
          @input="setName($event.target.value)"
          type="text" 
          placeholder="Имя" 
          class="input"
          :class="{'form_inputError': ($v.name.$dirty && !$v.name.required)}">
        <span class="form_decor">*</span>
        <div v-if="($v.name.$dirty && !$v.name.required)" :class="{'form_error': ($v.name.$dirty && !$v.name.required)}">Поле должно быть заполненным</div>
      </div>

      <div class="form__inputWrapper">
        <input 
          :value="patronymic"
          @input="setPatronymic($event.target.value)"
          type="text" 
          placeholder="Отчество" 
          class="input">
      </div>

      <div class="form__inputWrapper">
        <input 
          :value="dateOfBirth"
          @input="setDateOfBirth($event.target.value)"
          type="text" 
          maxlength="10"
          placeholder="Дата рождения: дд.мм.гггг" 
          class="input"
          :class="{'form_inputError': ($v.dateOfBirth.$dirty && !$v.dateOfBirth.required) || !$v.dateOfBirth.correctDateOfBirth}">
        <span class="form_decor">*</span>
        <div v-if="($v.dateOfBirth.$dirty && !$v.dateOfBirth.required)" :class="{'form_error': ($v.dateOfBirth.$dirty && !$v.dateOfBirth.required)}">Поле должно быть заполненным</div>
        <div v-else-if="!$v.dateOfBirth.correctDateOfBirth" :class="{'form_error': !$v.dateOfBirth.correctDateOfBirth}">Поле должно быть формата дд.мм.гггг</div>
        <div v-if="isLettersInDateOfBirth" :class="{'form_error': isLettersInDateOfBirth}">Поле не должно содержать букв</div>
      </div>

      <div class="form__inputWrapper">
        <input 
        :value="tel" 
        @input="setTel($event.target.value)"
        type="text" 
        maxlength="16"
        placeholder="Телефон: 7(555)-55-55-555" 
        class="input"
        :class="{'form_inputError': ($v.tel.$dirty && !$v.tel.required) || !$v.tel.correctTel}"
        >
        <span class="form_decor">*</span>
        <div v-if="($v.tel.$dirty && !$v.tel.required)" :class="{'form_error': ($v.tel.$dirty && !$v.tel.required)}">Поле должно быть заполненным</div>
        <div v-else-if="!$v.tel.correctTel" :class="{'form_error': !$v.tel.correctTel}">Поле должно быть формата 7(555)-55-55-555</div>
        <div v-if="isLettersInTel" :class="{'form_error': isLettersInTel}">Поле не должно содержать букв</div>
      </div>
      
      <div class="form_radioInputs">
        <span>Пол:</span>
        <div>
          <label for="male" style="cursor: pointer;">Мужской</label>
          <input 
            value="male"
            id="male"
            name="sex"
            @change="setSex($event.target.value)"
            type="radio"
            style="margin-left: 5px; cursor: pointer;">
        </div>
        <div>
          <label for="female" style="cursor: pointer;">Женский</label>
          <input 
            value="female"
            id="female"
            name="sex"
            @change="setSex($event.target.value)"
            type="radio"
            style="margin-left: 5px; cursor: pointer;">
        </div>
      </div>


      <div class="form_selectorGoups">
        <button v-if="!$v.clientGroup.required" class="form_chosenCurrentSelector" :class="{'form_chosenCurrentSelector-error' : (!$v.clientGroup.required && $v.clientGroup.$dirty) || (!$v.clientGroup.required && isFirstClientOpenGroupSelector)}" @click.stop.prevent="openClientsSelector()">
          Группа клиентов
          <span class="form_chosenCurrentSelectorArrowLeft" :class="{'form_chosenCurrentSelectorArrowLeft-rotate' : isClientGroupSelector}"></span>
          <span class="form_chosenCurrentSelectorArrowRight" :class="{'form_chosenCurrentSelectorArrowRight-rotate' : isClientGroupSelector}"></span>
          <span class="form_decor">*</span>
        </button>
        <button v-else class="form_chosenCurrentSelector" @click.stop.prevent="isClientGroupSelector = !isClientGroupSelector">
          <button class="form_chosenCurrentSelectorItem" v-for="client in clientGroup" :key="client" @click.stop.prevent="removeChosenClient(client)">
            {{ client }}
            <span class="form_chosenCurrentSelectorArrowLeft" :class="{'form_chosenCurrentSelectorArrowLeft-rotate' : isClientGroupSelector}"></span>
            <span class="form_chosenCurrentSelectorArrowRight" :class="{'form_chosenCurrentSelectorArrowRight-rotate' : isClientGroupSelector}"></span>
          </button>
          <span class="form_decor">*</span>
        </button>
        
        <div v-if="isClientGroupSelector" class="form_currentSelector" @click.stop>
          <button class="form_currentSelectorItem" v-for="clientOfSelector in clientGroupSelector" :key="clientOfSelector" @click.stop.prevent="addClient(clientOfSelector)">
            {{ clientOfSelector }}
          </button>
        </div>
        <div v-if="(!$v.clientGroup.required && $v.clientGroup.$dirty) || (!$v.clientGroup.required && isFirstClientOpenGroupSelector)" :class="{'form_error': (!$v.clientGroup.required && $v.clientGroup.$dirty) || (!$v.clientGroup.required && isFirstClientOpenGroupSelector)}">Поле должно быть заполненным</div>
      </div>


      <div class="form_selectorGoups">
        <button v-if="doctor.length == 0" class="form_chosenCurrentSelector" @click.stop.prevent="openDoctorsSelector()">
          Лечащий врач
          <span class="form_chosenCurrentSelectorArrowLeft" :class="{'form_chosenCurrentSelectorArrowLeft-rotate' : isDoctorGroupSelector}"></span>
          <span class="form_chosenCurrentSelectorArrowRight" :class="{'form_chosenCurrentSelectorArrowRight-rotate' : isDoctorGroupSelector}"></span>
        </button>
        <button v-else class="form_chosenCurrentSelector" @click.stop.prevent="isDoctorGroupSelector = !isDoctorGroupSelector">
          <div class="form_chosenCurrentSelectorItem form_chosenCurrentSelectorItem-noHover">
            {{ doctor }}
            <span class="form_chosenCurrentSelectorArrowLeft" :class="{'form_chosenCurrentSelectorArrowLeft-rotate' : isDoctorGroupSelector}"></span>
            <span class="form_chosenCurrentSelectorArrowRight" :class="{'form_chosenCurrentSelectorArrowRight-rotate' : isDoctorGroupSelector}"></span>
          </div>
        </button>
        
        <div v-if="isDoctorGroupSelector" class="form_currentSelector" @click.stop>
          <button class="form_currentSelectorItem" v-for="doctorOfSelector in doctorGroupSelector" :key="doctorOfSelector" @click.stop.prevent="addDoctor(doctorOfSelector)">
            {{ doctorOfSelector }}
          </button>
        </div>
      </div>


      <div class="form_checkbox">
        <label for="SMS" style="cursor: pointer;">Не отправлять СМС</label>
        <input 
          :value="sendSMS"
          @change="setSms()" 
          type="checkbox" 
          id="SMS" 
          style="cursor: pointer;">
      </div>

      <h3 class="form_sectionTitle">Адрес</h3>
      <div class="form__inputWrapper">
        <input 
          :value="index"
          @input="setIndex($event.target.value)"
          type="number" 
          placeholder="Индекс" 
          class="input">
      </div>

      <div class="form__inputWrapper">
        <input 
          :value="country"
          @input="setCountry($event.target.value)"
          type="text" 
          placeholder="Страна" 
          class="input">
      </div>

      <div class="form__inputWrapper">
        <input 
          :value="region"
          @input="setRegion($event.target.value)"
          type="text" 
          placeholder="Область" 
          class="input">
      </div>

      <div class="form__inputWrapper">
        <input 
          :value="city"
          @input="setCity($event.target.value)"
          type="text" 
          placeholder="Город" 
          class="input"
          :class="{'form_inputError': ($v.city.$dirty && !$v.city.required)}">
        <span class="form_decor">*</span>
        <div v-if="($v.city.$dirty && !$v.city.required)" :class="{'form_error': ($v.city.$dirty && !$v.city.required)}">Поле должно быть заполненным</div>
      </div>

      <div class="form__inputWrapper">
        <input 
          :value="street"
          @input="setStreet($event.target.value)"
          type="text" 
          placeholder="Улица" 
          class="input">
      </div>

      <div class="form__inputWrapper form_lastInput">
        <input 
          :value="house"
          @input="setHouse($event.target.value)"
          type="text" 
          placeholder="Дом" 
          class="input">
      </div>

      <h3 class="form_sectionTitle">Паспорт</h3>
      <div class="form_selectorGoups">
        <button v-if="!$v.document.required" class="form_chosenCurrentSelector" :class="{'form_chosenCurrentSelector-error' : (!$v.document.required && isFirstDocumentOpenGroupSelector) || (!$v.document.required && $v.document.$dirty)}" @click.stop.prevent="openDocumentsSelector()">
          Тип документа
          <span class="form_chosenCurrentSelectorArrowLeft" :class="{'form_chosenCurrentSelectorArrowLeft-rotate' : isDocumentGroupSelector}"></span>
          <span class="form_chosenCurrentSelectorArrowRight" :class="{'form_chosenCurrentSelectorArrowRight-rotate' : isDocumentGroupSelector}"></span>
          <span class="form_decor">*</span>
        </button>
        <button v-else class="form_chosenCurrentSelector" @click.stop.prevent="isDocumentGroupSelector = !isDocumentGroupSelector">
          <div class="form_chosenCurrentSelectorItem form_chosenCurrentSelectorItem-noHover">
            {{ document }}
            <span class="form_chosenCurrentSelectorArrowLeft" :class="{'form_chosenCurrentSelectorArrowLeft-rotate' : isDocumentGroupSelector}"></span>
            <span class="form_chosenCurrentSelectorArrowRight" :class="{'form_chosenCurrentSelectorArrowRight-rotate' : isDocumentGroupSelector}"></span>
          </div>
          <span class="form_decor">*</span>
        </button>
        
        <div v-if="isDocumentGroupSelector" class="form_currentSelector" @click.stop>
          <button class="form_currentSelectorItem" v-for="documentOfSelector in documentGroupSelector" :key="documentOfSelector" @click.stop.prevent="addDocument(documentOfSelector)">
            {{ documentOfSelector }}
          </button>
        </div>
        <div v-if="(!$v.document.required && isFirstDocumentOpenGroupSelector) || (!$v.document.required && $v.document.$dirty)" :class="{'form_error': (!$v.document.required && isFirstDocumentOpenGroupSelector) || (!$v.document.required && $v.document.$dirty)}">Поле должно быть заполненным</div>
      </div>

      <div class="form__inputWrapper">
        <input 
          :value="passportSeries"
          @input="setPassportSeries($event.target.value)"
          type="number" 
          placeholder="Серия" 
          class="input">
      </div>

      <div class="form__inputWrapper">
        <input 
          :value="passportNumber"
          @input="setPassportNumber($event.target.value)"
          type="number" 
          placeholder="Номер" 
          class="input">
      </div>

      <div class="form__inputWrapper">
        <input 
          :value="issuedBy"
          @input="setIssuedBy($event.target.value)"
          type="text" 
          placeholder="Кем выдан" 
          class="input">
      </div>

      <div class="form__inputWrapper form_lastInput" style="margin-bottom: 30px;">
        <input 
          :value="dateOfIssue" 
          @input="setDateOfIssue($event.target.value)"
          type="text" 
          placeholder="Дата выдачи: дд.мм.гггг" 
          maxlength="10"
          class="input"
          :class="{'form_inputError': ($v.dateOfIssue.$dirty && !$v.dateOfIssue.required) || !$v.dateOfIssue.correctDateOfIssue}">
        <span class="form_decor">*</span>
        <div v-if="($v.dateOfIssue.$dirty && !$v.dateOfIssue.required)" :class="{'form_error': ($v.dateOfIssue.$dirty && !$v.dateOfIssue.required)}">Поле должно быть заполненным</div>
        <div v-else-if="!$v.dateOfIssue.correctDateOfIssue" :class="{'form_error': !$v.dateOfIssue.correctDateOfIssue}">Поле должно быть формата дд.мм.гггг</div>
        <div v-if="isLettersInDateOfIssue" :class="{'form_error': isLettersInDateOfIssue}">Поле не должно содержать букв</div>
      </div>
      <button class="form_submitBtn">Создать</button>
      <div v-if="successfulCreated" style="font-size: 20px; font-weight: bold; text-align: center; color: #14a61a;">Клиент успешно создан!</div>
    </form>
  </div>
</template>

<script>
import {required, helpers} from 'vuelidate/lib/validators'
const correctTel = helpers.regex('correctTel', /7+\(\d{3}\)-\d{2}-\d{2}-\d{3}/)
const correctDateOfBirth = helpers.regex('correctDateOfBirth', /\d{2}.\d{2}.\d{4}/)
const correctDateOfIssue = helpers.regex('correctDateOfIssue', /\d{2}.\d{2}.\d{4}/)

export default {
  name: "App",
  data() {
    return {
      surname: '',
      name: '',
      patronymic: '',
      dateOfBirth: '',
      isLettersInDateOfBirth: false,
      formattedDateOfBirth: '',
      tel: '',
      isLettersInTel: false,
      formattedTel: '',
      sex: '',
      clientGroup: [],
      clientGroupSelector: ['VIP', 'Проблемные', 'ОМС'],
      isClientGroupSelector: false,
      isFirstClientOpenGroupSelector: false,
      doctor: '',
      doctorGroupSelector: ['Иванов', 'Захаров', 'Чернышева'],
      isDoctorGroupSelector: false,
      isFirstDoctorOpenGroupSelector: false,
      sendSMS: true,
      index: '',
      country: '',
      region: '',
      city: '',
      street: '',
      house: '',
      document: '',
      documentGroupSelector: ['Паспорт', 'Свидетельство о рождении', 'Вод. удостоверение'],
      isDocumentGroupSelector: false,
      isFirstDocumentOpenGroupSelector: false,
      passportSeries: '',
      passportNumber: '',
      issuedBy: '',
      dateOfIssue: '',
      isLettersInDateOfIssue: false,
      formattedDateOfIssue: '',
      successfulCreated: false,
    }
  },
  validations: {
    surname: {
      required,
    },
    name: {
      required,
    },
    dateOfBirth: {
      required,
      correctDateOfBirth
    },
    tel: {
      required,
      correctTel
    },
    clientGroup: {
      required,
    },
    city: {
      required,
    },
    document: {
      required
    },
    dateOfIssue: {
      required,
      correctDateOfIssue
    },
  },
  methods: {
    setSurname(newValue) {
      this.surname = newValue.trim()
      this.$v.surname.$touch()
    },

    setName(newValue) {
      this.name = newValue.trim()
      this.$v.name.$touch()
    },

    setPatronymic(newValue) {
      this.patronymic = newValue.trim()
    },

    setDateOfBirth(newValue) {
      if(newValue.length >= 10) {
        this.dateOfBirth = newValue.trim()
        this.dateOfBirth = this.dateOfBirth.slice(0,10)
        return
      } else {
        this.dateOfBirth = newValue.trim()
      }
      
      const pattern = /\./gi   
      const  changedNewValue = newValue.replace(pattern, '') 
      if(!Number(changedNewValue)) {
        this.isLettersInDateOfBirth = true
      } else {this.isLettersInDateOfBirth = false}
      if(this.dateOfBirth.length == 0) {
        this.isLettersInDateOfBirth = false
      }

      this.$v.dateOfBirth.$touch()
      if(this.formattedDateOfBirth.length > newValue.length) {
        this.dateOfBirth = newValue
        this.formattedDateOfBirth = newValue
        return
      } 
      if(newValue.length == 1) {
        this.formattedDateOfBirth = newValue
        this.dateOfBirth = this.formattedDateOfBirth
        return
      }
      if(newValue.length == 3) {
        this.formattedDateOfBirth += `.${newValue[newValue.length - 1]}`
        this.dateOfBirth = this.formattedDateOfBirth
        return
      }
      if(newValue.length == 6) {
        this.formattedDateOfBirth += `.${newValue[newValue.length - 1]}`
        this.dateOfBirth = this.formattedDateOfBirth
        return
      }
      if(newValue.length > 1) {
        this.formattedDateOfBirth += newValue[newValue.length - 1]
        this.dateOfBirth = this.formattedDateOfBirth
        return 
      }
    },

    setTel(newValue) {
      if(newValue.length >= 16) {
        this.tel = newValue
        this.tel = this.tel.slice(0,10)
        return
      } else {
        this.tel = newValue
      }
      
      const pattern = /\-/gi  
      const  changedNewValue = newValue.replace(pattern, '') 
      if(!Number(changedNewValue.replace('(', '').replace(')', ''))) {
        this.isLettersInTel = true
      } else {this.isLettersInTel = false}
      if(this.tel.length == 0) {
        this.isLettersInTel = false
      }

      this.$v.tel.$touch()
      if(this.formattedTel.length > newValue.length) {
        this.tel = newValue
        this.formattedTel = newValue
        return
      } 
      if(newValue.length == 1) {
        this.formattedTel = `7(${newValue}`
        this.tel = this.formattedTel
        return
      } 
      if(newValue.length == 6) {
        this.formattedTel += `)-${newValue[newValue.length - 1]}`
        this.tel = this.formattedTel
        return
      } 
      if(newValue.length == 10) {
        this.formattedTel += `-${newValue[newValue.length - 1]}`
        this.tel = this.formattedTel
        return
      } 
      if(newValue.length == 13) {
        this.formattedTel += `-${newValue[newValue.length - 1]}`
        this.tel = this.formattedTel
        return
      } 
      if(newValue.length > 1) {
        this.formattedTel += newValue[newValue.length - 1]
        this.tel = this.formattedTel
        return
      } 
    },
    setSex(radioSex) {
      this.sex = radioSex
    },
    removeChosenClient(chosenClient) {
      this.clientGroup = this.clientGroup.filter( client => client !== chosenClient)
    },
    addClient(addedClient) {
      if(!this.clientGroup.includes(addedClient)) {
        this.clientGroup.push(addedClient)
      }
    },
    openClientsSelector() {
      this.isClientGroupSelector = !this.isClientGroupSelector
      this.isFirstClientOpenGroupSelector = true
    },
    openDoctorsSelector() {
      this.isDoctorGroupSelector = !this.isDoctorGroupSelector
      this.isFirstDoctorOpenGroupSelector = true
    },
    addDoctor(chosenDoctor) {
      this.doctor = chosenDoctor
    },
    closeAllSelectors() {
      this.isClientGroupSelector = false
      this.isDoctorGroupSelector = false
      this.isDocumentGroupSelector = false
    },
    setSms() {
      this.sendSMS = !this.sendSMS
    },
    setIndex(newValue) {
      this.index = newValue.trim()
    },
    setCountry(newValue) {
      this.country = newValue.trim()
    },
    setRegion(newValue) {
      this.region = newValue.trim()
    },
    setCity(newValue) {
      this.city = newValue.trim()
      this.$v.city.$touch()
    },
    setStreet(newValue) {
      this.street = newValue.trim()
    },
    setHouse(newValue) {
      this.house = newValue.trim()
    },
    openDocumentsSelector() {
      this.isDocumentGroupSelector = !this.isDocumentGroupSelector
      this.isFirstDocumentOpenGroupSelector = true
    },
    addDocument(chosenDocument) {
      this.document = chosenDocument
    },
    setPassportSeries(newValue) {
      this.passportSeries = newValue.trim()
    },
    setPassportNumber(newValue) {
      this.passportNumber = newValue.trim()
    },
    setIssuedBy(newValue) {
      this.issuedBy = newValue.trim()
    },
    setDateOfIssue(newValue) {
      if(newValue.length >= 10) {
        this.dateOfIssue = newValue.trim()
        this.dateOfIssue = this.dateOfIssue.slice(0,10)
        return
      } else {
        this.dateOfIssue = newValue.trim()
      }
      const pattern = /\./gi   
      const  changedNewValue = newValue.replace(pattern, '')  
      if(!Number(changedNewValue)) {
        this.isLettersInDateOfIssue = true
      } else {this.isLettersInDateOfIssue = false}
      if(this.dateOfIssue.length == 0) {
        this.isLettersInDateOfIssue = false
      }

      this.$v.dateOfIssue.$touch()
      if(this.formattedDateOfIssue.length > newValue.length) {
        this.dateOfIssue = newValue
        this.formattedDateOfIssue = newValue
        return
      } 
      if(newValue.length == 1) {
        this.formattedDateOfIssue = newValue
        this.dateOfIssue = this.formattedDateOfIssue
        return
      }
      if(newValue.length == 3) {
        this.formattedDateOfIssue += `.${newValue[newValue.length - 1]}`
        this.dateOfIssue = this.formattedDateOfIssue
        return
      }
      if(newValue.length == 6) {
        this.formattedDateOfIssue += `.${newValue[newValue.length - 1]}`
        this.dateOfIssue = this.formattedDateOfIssue
        return
      }
      if(newValue.length > 1) {
        this.formattedDateOfIssue += newValue[newValue.length - 1]
        this.dateOfIssue = this.formattedDateOfIssue
        return 
      }
    },
    handleSubmit() {
     if(this.$v.$invalid) { 
      this.$v.$touch()
      this.successfulCreated = false
     } else {
      this.successfulCreated = true
     }
    }, 
  },
}
</script>

<style lang="sass">
*
  margin: 0
  padding: 0
  box-sizing: border-box

body
  padding: 20px
  font-family: sans-serif

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button 
  -webkit-appearance: none
  margin: 0

$primary-color: #14a61a
$secondary-color-bg-hover: rgb(205, 249, 207)

.form
  padding: 25px 15px
  margin: auto
  max-width: 500px
  border: 1px solid $primary-color
  border-radius: 10px

  .form_required 
    margin-bottom: 15px

  .form__inputWrapper 
    position: relative
    margin-bottom: 15px

  .form_lastInput
    margin-bottom: 30px

  .input 
    padding: 10px 20px 10px 10px
    width: 100%
    border: 1px solid $primary-color
    border-radius: 10px

  .form_inputError 
    border: 1px solid red
    outline: 1px solid red

  .form_decor
    position: absolute
    top: 7px
    right: 7px
    color: red

  .form_error 
    margin: 5px 0 0 5px
    color: red

  .form_selectorGoups
    margin-bottom: 15px

  .form_chosenCurrentSelector 
    position: relative
    display: flex
    gap: 10px
    align-items: center
    width: 100%
    padding: 9px
    margin-bottom: 5px
    border: 1px solid $primary-color
    border-radius: 5px
    background-color: white
    font-size: 16px
    cursor: pointer

  .form_chosenCurrentSelector-error
    border: 1px solid red

  .form_chosenCurrentSelectorArrowLeft
    position: absolute
    top: 50%
    transform: translateY(-50%) rotate(-45deg)
    right: 31px
    width: 2px
    height: 10px
    background-color: black

  .form_chosenCurrentSelectorArrowLeft-rotate
    transform: translateY(-50%) rotate(45deg)

  .form_chosenCurrentSelectorArrowRight
    position: absolute
    top: 50%
    transform: translateY(-50%) rotate(45deg)
    right: 25px
    width: 2px
    height: 10px
    background-color: black

  .form_chosenCurrentSelectorArrowRight-rotate 
    transform: translateY(-50%) rotate(-45deg)

  .form_chosenCurrentSelectorItem
    padding: 5px
    background-color: $secondary-color-bg-hover
    border: none
    border-radius: 5px
    cursor: pointer
    font-size: 16px
    transition: .3s
    &:hover
      background-color: #efa7a7
    &:focus
      background-color: #efa7a7
      

  .form_chosenCurrentSelectorItem-noHover
    background-color: transparent
    pointer-events: none

  .form_currentSelector
    border: 1px solid $primary-color
    padding: 5px
    border-radius: 5px

  .form_currentSelectorItem
    width: 100%
    padding: 5px
    border: none
    background-color: white
    cursor: pointer
    text-align: left
    font-size: 16px
    transition: .3s
    &:hover 
      background-color: $secondary-color-bg-hover
    &:focus-visible
      background-color: $secondary-color-bg-hover

  .form_checkbox
    display: flex 
    gap: 5px 
    padding: 10px 
    border-radius: 10px 
    border: 1px solid #14a61a 
    margin-bottom: 30px

  .form_radioInputs
    display: flex 
    gap: 20px 
    padding: 10px
    border-radius: 10px
    border: 1px solid $primary-color
    margin-bottom: 15px

  .form_sectionTitle
    margin-bottom: 15px

  .form_submitBtn 
    display: block
    padding: 10px
    margin: auto auto 15px auto
    background-color: white
    border: 1px solid $primary-color
    border-radius: 5px
    cursor: pointer
    font-size: 16px
    transition: .3s
    &:hover
      background-color: $secondary-color-bg-hover
    &:focus-visible
      background-color: $secondary-color-bg-hover

@media (max-width: 450px) 
  body 
    padding: 10px
    font-size: 14px


  .form
    padding: 15px 10px

    .form_sectionTitle
      margin-bottom: 5px

    .form__inputWrapper, .form_selectorGoups, .form_radioInputs
      margin-bottom: 10px

    .form_chosenCurrentSelector, .form_currentSelectorItem, .form_chosenCurrentSelectorItem
      font-size: 14px


@media (hover: none) 
  .form
    .form_chosenCurrentSelectorItem
      &:hover 
        background: none
      &:active
        background-color: #efa7a7

    .form_currentSelectorItem, .form_submitBtn 
      &:hover 
        background: none
      &:active
        background-color: $secondary-color-bg-hover
      
    .form_checkbox 
      margin-bottom: 15px

    .form_lastInput
      margin-bottom: 15px
</style>
