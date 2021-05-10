<template>
    <div class="nav-bar">
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand>
                <img src="~assets/img/common/logowhite.png">
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>

                <b-navbar-nav>
                    <slot name="left-align"></slot>
                </b-navbar-nav>

                <b-navbar-nav class="ml-auto">
                    <slot name="right-align"></slot>
                    <b-nav-item href="/admin"><b-icon icon="person"></b-icon></b-nav-item>
                </b-navbar-nav>
                
            </b-collapse>

        </b-navbar>
    </div>
  
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style>
  img {
      max-width: 180px;
  }
  #nav-abr {
      color: black;
  }

</style>