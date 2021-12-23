import { combineReducers, createStore } from "redux";

let initialState = {
  home: [
    {
      title: "Your Favorite Place for Free Bootstrap Themes",
      description:
        "Start Bootstrap can help you build better websites using the Bootstrap framework! Just download a theme and start customizing, no strings attached!",
      btn: "FIND OUT MORE",
    },
  ],
  about: [
    {
      title: "We've got what you need!",
      description:
        "Start Bootstrap has everything you need to get your new website up and running in no time! Choose one of our open source, free to download, and easy to use themes! No strings attached!",
      btn: "GET STARTED",
    },
  ],
  services: [
    { title: "At Your Service" },
    {
      description: "Sturdy Themes",
      btn: "Our themes are updated regularly to keep them bug free!",
    },
    {
      description: "Up to Date",
      btn: "All dependencies are kept current to keep things fresh.",
    },
    {
      description: "Ready to Publish",
      btn: "You can use this design as is, or you can make changes!",
    },
    {
      description: "Made with Love",
      btn: "Is it really open source if it's not made with love?",
    },
  ],
  call: [{ title: "Free Download at Start Bootstrap!", btn: "DOWNLOAD NOW" }],
  contact: [
    {
      title: "Let's Get In Touch!",
      description:
        "Ready to start your next project with us? Send us a messages and we will get back to you as soon as possible!",
    },
  ],
};

const TAGS = {
  GET_HOME: "GET_HOME",
  GET_ABOUT: "GET_ABOUT",
  GET_SERVICES: "GET_SERVICES",
  GET_CALL: "GET_CALL",
  GET_CONTACT: "GET_CONTACT",
};

function reducer(state, action) {
  switch (action.type) {
    case TAGS.GET_HOME:
      return state;
    case TAGS.GET_ABOUT:
      return state;
    case TAGS.GET_SERVICES:
      return state;
    case TAGS.GET_CALL:
      return state;
    case TAGS.GET_CONTACT:
      return state;
    default:
      return state;
  }
}
function actionGetHome(){
    return{
     type:TAGS.GET_HOME
    }
 }
let store = createStore(reducer,initialState);
export{
    TAGS,
    actionGetHome
}

export default store;