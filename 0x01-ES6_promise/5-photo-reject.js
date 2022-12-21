export default function uploadPhoto(filename){
    return new Promise((reject) => {
        reject(`${filename} cannot be processed`)
    })
}