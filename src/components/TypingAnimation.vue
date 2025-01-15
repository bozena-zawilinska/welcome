<template>
  <div class="typing">
    <component :is="wrapperElement">{{ displayedText }}</component>
    <span class="cursor">|</span>
  </div>
</template>

<script>
export default {
  name: "TypingAnimation",
  props: {
    text: {
      type: String,
      required: true,
    },
    speed: {
      type: Number,
      default: 100, // Typing speed in ms
    },
    wrapperElement: {
      type: String,
      default: "span", // Default wrapper element
      validator: (value) => {
        // Allow only valid HTML tags
        return ["span", "p", "h1", "h2", "h3", "h4", "h5", "h6", "div"].includes(value);
      },
    },
  },
  data() {
    return {
      displayedText: "",
      index: 0,
    };
  },
  mounted() {
    this.startTyping();
  },
  methods: {
    startTyping() {
      if (this.index < this.text.length) {
        this.displayedText += this.text[this.index];
        this.index++;
        setTimeout(this.startTyping, this.speed);
      }
    },
  },
};
</script>

<style scoped>
.typing {
  display: flex;
  align-items: center;
}

.cursor {
  animation: blink 1s steps(2, start) infinite;
}

@keyframes blink {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>