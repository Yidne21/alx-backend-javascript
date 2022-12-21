/* eslint-disable */

import { uploadPhoto, createUser } from "./utils";

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((res) => {
      const { body } = res[0];
      const { firstName, lastName } = res[1];
      console.log(`${body} ${firstName} ${lastName}`);
    })
    .catch(() => console.log("Signup system offline"));
}
