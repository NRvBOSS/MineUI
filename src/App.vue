<script setup>
import mButton from "./components/mButton.vue";
import mInput from "./components/mInput.vue";
import mBadge from "./components/mBadge.vue";
import mTitle from "./components/mTitle.vue";
import mCard from "./components/mCard.vue";
import mToggleSwitch from "./components/mToggleSwitch.vue";
import { ref } from "vue";

// State for buttons
// const isLoading = ref(false);
// const simulateLoad = () => {
//   isLoading.value = true;
//   setTimeout(() => {
//     isLoading.value = false;
//   }, 2000);
// };

// State for input
</script>

<template>
  <div class="flex flex-col items-start p-10 gap-10">
    <!-- Examples for mButton component -->
    <mButton> Click me </mButton>

    <!-- Examples for mInput component -->
    <mInput placeholder="Write something" bordered size="xl" />

    <!-- Examples for mBadge component -->
    <mBadge size="sm" color="success"> 100 </mBadge>
    <mBadge color="info"> ! </mBadge>
    <div class="relative inline-block">
      <mButton variant="outline" size="xl" rounded>
        <mBadge position="top-right" color="primary" dot /> Click
        me(dot)</mButton
      >
    </div>

    <!-- Examples for mTitle component -->
    <mTitle bold="" size="4xl"></mTitle>

    <!-- Examples for mCard component -->
    <div class="flex flex-wrap gap-4">
      <mCard
        image="https://e3.365dm.com/25/04/768x432/skynews-liverpool-salah-liverpool-fc_6899155.jpg?20250427184510"
        title="Liverpool FC"
        content="Liverpool is best and the biggest club in the world."
        link="https://www.liverpoolfc.com/"
        linkText="Visit Liverpool FC"
      >
      </mCard>
      <div class="p-8 bg-gray-50 dark:bg-gray-300">
        <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
          mCard Component Examples
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Example 1: Basic Card with Image -->
          <mCard
            image="https://e3.365dm.com/25/04/768x432/skynews-liverpool-salah-liverpool-fc_6899155.jpg?20250427184510"
            title="Liverpool FC"
            content="Liverpool is one of the most successful football clubs in England with a rich history and passionate fanbase."
            link="https://www.liverpoolfc.com/"
            linkText="Official Website"
          />

          <!-- Example 2: Secondary Variant -->
          <mCard
            image="https://www.brettmartin.com/images/default-source/daylight-systems-1/application-case-studies/stadia-and-arena/anfield-anfield-rd-stand-(2024)/anfield-day---6.jpg?sfvrsn=805eb2db_3"
            title="Anfield Stadium"
            content="The iconic home of Liverpool FC since 1892, with a capacity of 53,394 and famous for its atmosphere."
            link="https://www.liverpoolfc.com/anfield"
            linkText="Stadium Tours"
            variant="secondary"
          />

          <!-- Example 3: Minimal Variant -->
          <mCard
            title="Liverpool FC History"
            content="Founded in 1892, Liverpool FC has won 19 League Titles, 8 FA Cups, 9 League Cups, 6 European Cups and many more honors."
            link="https://www.liverpoolfc.com/history"
            linkText="Explore History"
            variant="minimal"
          />

          <!-- Example 4: Card without Link -->
          <mCard
            image="https://thepostcalvin.com/wp-content/uploads/2019/09/YNWA.jpg"
            title="You'll Never Walk Alone"
            content="The club's anthem, adopted in the 1960s, is sung passionately by fans before every match at Anfield."
          />

          <!-- Example 5: Content-heavy Card -->
          <mCard
            title="Current Squad"
            content="Liverpool's current squad features world-class players like Mohamed Salah, Virgil van Dijk, and Alisson Becker under manager Jürgen Klopp."
            link="https://www.liverpoolfc.com/team/first-team"
            linkText="View Full Squad"
          />

          <!-- Example 6: Image-only Card -->
          <mCard
            image="https://media.istockphoto.com/id/484234714/vector/example-free-grunge-retro-blue-isolated-stamp.jpg?s=612x612&w=0&k=20&c=97KgKGpcAKnn50Ubd8PawjUybzIesoXws7PdU_MJGzE="
            link="https://www.liverpoolfc.com/"
            variant="secondary"
          />
        </div>
      </div>
    </div>

    <!-- Examples for mToggleSwitch component -->
    <div class="space-y-6 p-6">
      <!-- Basic Toggle -->
      <mToggleSwitch v-model="toggle1" />

      <!-- Colored Toggles -->
      <mToggleSwitch v-model="toggle2" color="primary" />
      <mToggleSwitch v-model="toggle3" color="success" />

      <!-- Different Sizes -->
      <mToggleSwitch v-model="toggle4" size="sm" />
      <mToggleSwitch v-model="toggle5" size="lg" />

      <!-- With Custom Labels -->
      <mToggleSwitch
        v-model="toggle6"
        on-label="Enabled"
        off-label="Disabled"
      />

      <!-- Disabled State -->
      <mToggleSwitch v-model="toggle7" disabled />
    </div>
  </div>
</template>
