<template>
  <div>
    <div id="header-bg" class="max-w-5xl mx-auto h-56 object-cover bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white text-5xl font-semibold pl-10 flex items-center">
      AS COLOURMATIC
    </div>
    <div class="flex mx-auto my-5 max-w-5xl relative">
      <div id="summary" class="flex-shrink-0 border-r-2 border-gray-300 pr-10 pl-10 py-5">
        <img
          src="~/static/images/colourmatic-logo.jpg"
          class="w-full h-auto mb-12"
        >
        <h3>
          Case Study
        </h3>
        <p>AS Colourmatic</p>
        <p>AS Colour, Auckland</p>
        <h3>
          Type
        </h3>
        <p>Interactive Display</p>
        <h3>
          Languages used
        </h3>
        <p>Visual Studio C#</p>
        <p>Adobe ActionScript</p>
      </div>
      <div id="content" class="px-10 pb-5">
        <h3>
          Goal
        </h3>
        <p>
          To produce a fun and interactive display to inspire customers to make new clothing choices.
        </p>
        <h3>
          My Experience
        </h3>
        <p>
          I was chosen to work on this project for my experience using Adobe Animate and ActionScript. I worked closely with another developer to build a front and back-end system that would provide a fun experience for the users.
          <br><br><img class="h-44 m-5 mr-0" align="right" src="~/static/images/kinect.jpg">
          We used an Xbox Kinect system to track users limb movements, then map it into the back-end through the Kinect SDK. The triggers were then sent to the front-end to advance the animations on-screen. I was responsible for the developing the user-friendly front-end application and integrating it with our C# Kinect application running behind the scenes.
        </p>

        <h3>
          Challenges
        </h3>
        <p>
          The first difficult challenge we ran into with this project was the integration of two very different technologies - a Visual Studio C# application and Adobe ActionScript. An unusual duo chosen due for their strengths in functionality and animations. The front-end and back-end applications needed to communicate their states with each other to provide a seamless experience for the user. We achieved this by integrating the front-end animations in a C# form which used event handlers to communicate.
          <br><br>
          The second challenge we experienced was the difficulty in accurately isolating the users t-shirt colour, to provide them their complimentary colour and recommendation. The outdoor lighting on the street also made it difficult for the camera to see colour on the user's clothing. We overcame this by building filters which compensate for the overall image lighting and enhanced saturation and brightness of the subject. The t-shirt colour was isolated by taking an average colour of the space surrounding the Kinect skeleton.
        </p>
        <iframe
          src="https://player.vimeo.com/video/312834441"
          width="640"
          height="360"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
          class="my-10"
        />
        <h3>
          Conclusion
        </h3>
        <p>
          I had a great time working with a new team on this project and learnt a lot during the development. AS Colour was a great brand to develop this project for and gave us a lot of creative freedom in the final product.
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  layout: 'project',
  head () {
    return {
      title: 'Oliver Noles - AS Colourmatic',
      description: 'Oliver Noles Portfolio. AS Colourmatic Project'
    }
  }
}
</script>

<style scoped>
#header-bg {
  background-image:
    linear-gradient(to bottom, rgba(0, 0, 0, 0.768), rgba(126, 126, 126, 0.494)),
    url(~/assets/colourmatic-1.jpg);
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
}
#content p, #summary p {
    font-size: 1.25rem/* 20px */;
    line-height: 1.75rem/* 28px */;
}
#content h3, #summary h3 {
    font-size: 1.24rem/* 20px */;
    line-height: 1.75rem/* 28px */;
    font-weight:600;
    text-transform:uppercase;
    margin-top: 1.25rem;
    margin-bottom:0.75rem;
}
</style>
