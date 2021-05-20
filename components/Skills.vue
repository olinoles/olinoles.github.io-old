<template>
  <div id="skills" class="pb-24 med-blue lg:pt-20 bg-image mx-auto p-5 w-full">
    <div class="mx-auto my-5 max-w-5xl relative">
      <div class="bg-white shadow-xl rounded-lg">
        <div class="px-4 py-5 sm:px-6">
          <h2 class="title mb-4 text-2xl lg:text-4xl">
            Skills & Experience
          </h2>
          <div class="flex flex-col lg:flex-row">
            <div class="flex-grow max-w-lg">
              <h3 class="subtitle text-xl lg:text-3xl">
                Technologies and tools I use
              </h3>
              <div class="grid grid-cols-3 md:grid-cols-4 mr-10">
                <ToolIcon label="HTML5" icon="html.png" />
                <ToolIcon label="Javascript ES6" icon="js.png" />
                <ToolIcon label="CSS" icon="css.png" />
                <ToolIcon label="GraphQL" icon="graphql.png" />
                <ToolIcon label="Nuxt JS" icon="nuxt.png" />
                <ToolIcon label="Visual Studio C#" icon="visualstudio.png" />
                <ToolIcon label="Wordpress" icon="wordpress.png" />
                <ToolIcon label="Git" icon="git.png" />
                <ToolIcon label="Vue JS" icon="vuejs.png" />
                <ToolIcon label="Adobe Illustrator" icon="illustrator.png" />
                <ToolIcon label="Adobe Photoshop" icon="photoshop.png" />
              </div>
            </div>
            <div class="flex-grow lg:border-l lg:pl-10 max-w-xl">
              <h3 class="subtitle mt-10 lg:mt-0 text-xl lg:text-3xl">
                I am experienced in
              </h3>
              <p>
                <ul class="list-disc list-outside ml-5 leading-6 exp-list">
                  <li>Developing <b>full-stack applications</b> using modern javascript frameworks</li>
                  <li>Developing with <b>Wordpress</b> CMS and <b>WooCommerce</b></li>
                  <li>Building <b>Visual Studio C#</b> desktop applications</li>
                  <li>Integrating web & desktop applications with <b>RESTful API services</b></li>
                  <li>Vector creation in <b>Adobe Illustrator</b></li>
                  <li>Photo manipulation & colour correction in <b>Adobe Photoshop</b></li>
                  <li>Code & project management using <b>Git</b></li>
                  <li>Website performance analysis using <b>Google Analytics</b></li>
                  <li>Marketing automation in <b>Klaviyo</b> & <b>Facebook Ads Manager</b></li>
                  <ul />
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ToolIcon from './ToolIcon.vue'
export default {
  components: { ToolIcon }

}
</script>
<style scoped>
.med-blue {
  background-color: #335480
}
.bg-image {
  background-image: url(~/assets/circuit-board.svg);
  background-size: 100%;
}
@media (min-width:640px) {
  .bg-image {
    background-size: 20%;
  }
}
.title {
  color: #353F4B;
  font-weight:bold;
}
.subtitle {
  color: #243453;
  margin-bottom:14px;
}
.exp-list li {
  padding-bottom: 3px;
  color:#243453;
}
</style>
