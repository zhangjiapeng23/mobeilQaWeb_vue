<template>
  <div class="project-register">
    <div class="row">
      <div class="col-md-6 offset-md-3" style="background-color: snow; padding: 30px">
        <h2 class="text-center">Register Project</h2>
        <form>
          <div class="form-row">
            <div class="form-group col-md-12">
              <label for="projectName">Project Name</label>
              <input class="form-control" type="text" id="projectName">
            </div>
            <div class="form-group col-md-6">
              <label for="AndroidId">Android ID</label>
              <input class="form-control" type="text" id="AndroidId">
            </div>
            <div class="form-group col-md-6">
              <label for="iOSId">iOS ID</label>
              <input class="form-control" type="text" id="iOSId">
            </div>
            <p style="margin-bottom: 8px;padding: 5px">Support Region</p>
            <div class="form-check form-check-inline col-md-12">
              <div class="form-row">
                <div v-for="(item, index) in supportRegion" :key="index" class="regionOptions col-md-3">
                  <input class="form-check-input" type="checkbox" :value="item.value" :id="item.name">
                  <label class="form-check-label" :for="item.name">{{item.name}}</label>
                </div>
              </div>

            </div>
            <div class="form-group col-md-12" style="margin-top: 16px">
              <label for="uploadProjectLogo">Project Logo</label>
              <input type="file" class="form-control-file" id="uploadProjectLogo">
            </div>
            <button type="button" class="btn btn-primary" style="margin-left: 5px">Create</button>
          </div>
        </form>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "ProjectRegister",
  components: {},
  data() {
    return {
      supportRegion: [
        {
          name: 'US',
          value: 1
        },
        {
          name: 'HongKong',
          value: 2
        },
        {
          name: 'HongKong',
          value: 2
        },
        {
          name: 'HongKong',
          value: 2
        },
        {
          name: 'HongKong',
          value: 2
        },
        {
          name: 'HongKong',
          value: 2
        },
        {
          name: 'HongKong',
          value: 2
        },
        {
          name: 'HongKong',
          value: 2
        },
        {
          name: 'HongKong',
          value: 2
        },
        {
          name: 'HongKong',
          value: 2
        }
      ]
    }
  }
}
</script>

<style scoped>
  .project-register {
    margin-top: 10px;
  }
  .regionOptions {
    margin-right: 10px;
  }
  .form-check-label {
    font-size: 14px;
  }

</style>