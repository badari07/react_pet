import { Client } from "@petfinder/petfinder-js";

const client = new Client({
  apiKey: process.env.API_KEY,
  secret: process.env.API_SECRET
});

export default function getAnimals() {
  return function getAnimalsThunk(dispatch, getState) {
    const { Animals } = getState();
    if (Animals.length === 0)
      client.animalData.types().then(resp => {
        // Do something with resp.data.types
        //   console.log(resp);
        dispatch({
          type: "SET_ANIMALS",
          payload: resp.data.types.map(type => type.name)
        });
      });
  };
}
