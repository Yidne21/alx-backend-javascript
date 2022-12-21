/*a functio which returns a rejected promise */
export default function uploadPhoto(filename) {
    return Promise.reject(new Error(`${filename} cannot be processed`));
}
