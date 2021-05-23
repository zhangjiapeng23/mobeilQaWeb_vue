<template>
  <div id="deeplink-edit" class="container">
    <div class="row">
      <div class="col-md-12">
        <hr>
      </div>
      <div class="col-md-12">
        <div class="list-group">
          <div class="list-group-item" v-for="(item, index) in deeplinkItems" :key="index">
            <a :href="item" style="float: left">{{item}}</a>
            <div class="edit-group text-right">
              <b-icon icon="trash-fill" class="remove-btn" @click="removeItem(index)"></b-icon>
              <b-icon icon="pencil-fill" class="modify-btn" v-b-modal="'modify-'+index">
              </b-icon>
              <b-modal :id="'modify-'+index" centered title="Modify deeplink">
                <b-input-group :prepend="scheme" class="modal-modify">
                  <b-form-input :value="deeplinkItems[index].split('//')[1]"></b-form-input>
                </b-input-group>
                <template v-slot:modal-footer>
                  <b-btn variant="info" @click="hideModal('modify-'+index)" size="sm">CANCEL</b-btn>
                  <b-btn variant="success" @click="" size="sm">OK</b-btn>
                </template>
              </b-modal>
            </div>
            <span style="clear: both"></span>
          </div>
        </div>


      </div>


    </div>
  </div>

</template>

<script>
export default {
  name: "DeeplinkEdit",
  methods: {
    removeItem(index) {
      alert("Do you confirm remove?")
    },
    hideModal(id) {
      this.$bvModal.hide(id);
    }
  },
  data() {
    return {
      deeplinkItems: this.deeplinkList,
      projectScheme: this.scheme
    }
  },
  props: {
    deeplinkList: {
      type: Array,
      default() {
        return []
      }
    },
    scheme: {
      type: String,
      default() {
        return '';
      }
    }
  }
}
</script>

<style scoped>
.col-md-12 {
  padding: 0;
}
hr {
  margin-top: 2px;
}
.remove-btn {
  margin-right: 20px;
}
.modal-modify {
  margin-top: 30px;
  margin-bottom: 30px;
}


</style>