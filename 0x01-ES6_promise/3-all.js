import { uploadPhoto, createUser } from "./utils";

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((res) => {
      const { body } = res[0];
      const { firstname, lastname } = res[1];
      console.log(`${body} ${firstname} ${lastname}`);
    })
    .catch(() => console.log("Signup system offline"));
}
