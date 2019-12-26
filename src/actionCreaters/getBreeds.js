import { Client } from "@petfinder/petfinder-js";

const client = new Client({
  apiKey: process.env.API_KEY,
  secret: process.env.API_SECRET
});

export default () => (dispatch, getState) => {
  const { animal } = getState();
  if (animal) {
    client.animalData.breeds(animal).then(resp => {
      // Do something with resp.data.breeds
      // console.log(resp);
      if (Array.isArray(resp.data.breeds)) {
        // this.setState({
        //   breeds: resp.data.breeds
        // });
        dispatch({ type: "SET_BREEDS", payload: resp.data.breeds });
      } else {
        // this.setState({ breeds: [] });
        dispatch({ type: "SET_BREEDS", payload: [] });
      }
    });
  } else {
    // this.setState({ breeds: [] });
    dispatch({ type: "SET_BREEDS", payload: [] });
  }
};
