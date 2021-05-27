<template>
  <div class="parent">
    <svg
      id="curveUpColor"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="100%"
      height="100"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      class="bg-curve h-16 sm:h-32 -mb-px"
    >
      <path stroke-width="6" d="M 0 100 C 51 93 51 6 100 100 Z" />
    </svg>
    <div class="pb-12 bg-darkblue bg-image mx-auto p-5 w-full overflow-hidden">
      <div class="mx-auto my-5 max-w-5xl relative lg:pl-6">
        <div class="flex flex-col sm:flex-row">
          <div class="sm:mr-24 md:mr-56">
            <h2 id="contact" class="font-bold text-white mb-10 mt-5 text-3xl sm:text-4xl">
              Let's work together!
            </h2>
            <h3 class="font-bold text-gray-200 mb-10 text-xl lg:text-2xl">
              Have a project you'd like to discuss?
            </h3>
          </div>
          <div class="ml-5">
            <ul class="list-none space-y-4">
              <li class="text-white text-2xl">
                <MailIcon class="social-icon" />
                <a el="noreferrer" target="_blank" href="mailto:oliver@noles.nz">oliver@noles.nz</a>
              </li>
              <li class="text-white text-2xl">
                <CodeIcon class="social-icon" />
                <a rel="noreferrer" target="_blank" href="https://www.github.com/olinoles">On Github</a>
              </li>
              <li class="text-white text-2xl">
                <LinkIcon class="social-icon" />
                <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/oliver-noles-2390a8178/">On LinkedIn</a>
              </li>
              <li class="text-white text-2xl">
                <UsersIcon class="social-icon" />
                <a rel="noreferrer" target="_blank" href="https://www.facebook.com/oliver.noles/">On Facebook</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MailIcon, LinkIcon, UsersIcon, CodeIcon } from '@vue-hero-icons/solid'
export default {
  components: {
    MailIcon, LinkIcon, UsersIcon, CodeIcon
  }
}
</script>

<style scoped>
.social-icon {
  height:25px;
  width: auto;
  display:inline-block;
  margin-right: 5px
}
.bg-darkblue {
  background-color: #14213D;
}
.parent {
  margin-top:-130px;
}
.bg-curve {
  fill: #14213D;
  stroke: #14213D;
}
</style>
