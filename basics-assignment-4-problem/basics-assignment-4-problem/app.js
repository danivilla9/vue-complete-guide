const app = Vue.createApp({
  data() {
    return {
      userInput1: "",
      paragraphVisible: true,
      userInput2: "",
    };
  },
  methods: {
    toggleParagraphVisibility() {
      this.paragraphVisible = !this.paragraphVisible;
    },
  },
  computed: {
    getClassUserInput1() {
      if (this.userInput1 === "user1") return { user1: true };
      else if (this.userInput1 === "user2") return { user2: true };
      else return "";
    },
    getClassVisibilityParagraph() {
      //return this.paragraphVisible ? {visible: this.paragraphVisible} : {hidden: this.paragraphVisible};
      console.log(this.paragraphVisible);
      if (this.paragraphVisible) 
        return { visible: true };
      else 
        return { hidden: true };
    },
    getClassBackgroundColor() {
        return this.userInput2;
    }
  },
});

app.mount("#assignment");
