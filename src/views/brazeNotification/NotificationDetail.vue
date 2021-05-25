<template>
  <div id="notification-detail" class="row">
    <div class="col-md-2 col-sm-2">
      <h3>{{projectName}}</h3>
    </div>
    <div class="col-md-6 col-sm-6 text-right">
      <p v-show="testAccount.length" class="test-account-display">
        Test Account:&nbsp;<span style="text-decoration: underline">{{testAccount}}</span>
      </p>
    </div>
    <div class="col-md-4 col-sm-4 text-right">
      <b-btn class="test-account" @click="" size="sm" variant="secondary" v-b-modal="'test-account'">Test Account</b-btn>
      <b-btn class="reset-all" @click="switchSelectBtn" size="sm" variant="primary" v-if="isSelectAll">Reset All</b-btn>
      <b-btn class="select-all" @click="switchSelectBtn" size="sm" variant="info" v-else>Select All</b-btn>

      <b-modal id="test-account" centered title="Test Account">
        <b-input-group prepend="Account">
          <b-form-input :value="testAccount" id="test-account-input"></b-form-input>
        </b-input-group>
        <template v-slot:modal-footer>
          <b-btn variant="info" size="sm" @click="hideModal('test-account')">CANCEL</b-btn>
          <b-btn variant="success" size="sm" style="width: 70px" @click="changeAccount">OK</b-btn>
        </template>
      </b-modal>
    </div>

    <div class="col-md-4 col-sm-12" id="deeplink-group">
      <b-list-group>
        <b-list-group-item variant="info">
          DEEPLINK
          <button class="add-btn"  v-b-modal="'add-deeplink'">
            <b-icon icon="plus-square"
                    variant="dark"></b-icon>
          </button>
          <b-modal id="add-deeplink" title="Deeplink">
            <b-input-group prepend="test">
              <b-form-input id="add-deeplink-input"></b-form-input>
            </b-input-group>
            <template v-slot:modal-footer>
              <b-btn variant="info" size="sm" @click="hideModal('add-deeplink')">CANCEL</b-btn>
              <b-btn variant="success" size="sm" @click="" style="width: 70px;">OK</b-btn>
            </template>
          </b-modal>
        </b-list-group-item>
        <b-list-group-item>
          <b-form-checkbox-group stacked
                                 :options="deeplinkGroup"
                                 v-model="deeplinkSelect"
                                 class="checkbox-items">
          </b-form-checkbox-group>
        </b-list-group-item>
      </b-list-group>
    </div>

    <div class="col-md-4 col-sm-12" id="general-group">
      <b-list-group>
        <b-list-group-item variant="success">
          GENERAL
          <button class="add-btn">
            <b-icon icon="plus-square" variant="dark"></b-icon>
          </button>
        </b-list-group-item>
        <b-list-group-item>
          <b-form-checkbox-group stacked
                                 :options="generalGroup"
                                 v-model="generalSelect"
                                 class="checkbox-items">
          </b-form-checkbox-group>
        </b-list-group-item>
      </b-list-group>
    </div>
    <div class="col-md-4 col-sm-12" id="push-group">
      <b-list-group>
        <b-list-group-item variant="secondary">
          PUSH TYPE
          <button class="add-btn">
            <b-icon icon="plus-square" variant="dark"></b-icon>
          </button>
        </b-list-group-item>
        <b-list-group-item>
          <b-form-checkbox-group stacked
                                 :options="pushTypeGroup"
                                 v-model="pushTypeSelect"
                                 class="checkbox-items">
          </b-form-checkbox-group>
        </b-list-group-item>
      </b-list-group>

    </div>

  </div>
</template>

<script>
import {getNotificationDetail} from "network/brazeNotification";

export default {
  name: "NotificationDetail",
  data() {
    return {
      projectName: this.$route.params.notificationDetail,
      deeplinkGroup: [],
      generalGroup: [],
      pushTypeGroup: [],
      deeplinkSelect: [],
      generalSelect: [],
      pushTypeSelect: [],
      isSelectAll: false,
      testAccount: 'james@zhangjieps.com',

    }
  },
  methods: {
    hideModal(id) {
      this.$bvModal.hide(id);
    },
    getNotification() {
      getNotificationDetail(this.projectName).then(res => {
        const deeplinkGroup = res.deeplink;
        const generalGroup =  res.general;
        const pushTypeGroup = res.push_type;
        for (let item of deeplinkGroup) {
          this.deeplinkGroup.push({
            text: item.content,
            value: item
          })
        }
        for (let item of generalGroup) {
          this.generalGroup.push({
            text: item.content,
            value: item
          })
        }
        for (let item of pushTypeGroup) {
          this.pushTypeGroup.push({
            text: item.content,
            value: item
          })
        }
      })
    },
    switchSelectBtn() {
      this.isSelectAll = !this.isSelectAll;
    },
    changeAccount() {
      const newAccount = document.getElementById('test-account-input').value;
      this.testAccount = newAccount;
      this.hideModal('test-account');

    }
  },
  created() {
    this.getNotification()
  }






}
</script>

<style scoped>
  .select-all {
    border: none;
    width: 90px;
  }
  .reset-all {
    border: none;
    width: 90px;
  }
  .test-account {
    border: none;
    margin-right: 20px;
  }
  .test-account-display {
    font-size: 20px;
  }
  .checkbox-items {
    word-break: break-all;
  }
  #deeplink-group {
    margin-top: 30px;
  }
  #general-group {
    margin-top: 30px;
  }
  #push-group {
    margin-top: 30px;
  }
  .add-btn {
    border: none;
    background-color: transparent;
    margin-left: 180px;
  }




</style>