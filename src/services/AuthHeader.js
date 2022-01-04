export default function AuthHeader() {
    let x=localStorage.getItem("jwt")
    let user = x.toString()
    console.log("jwt")
    //   return { Authorization: 'Bearer ' + user.accessToken };
    return { Authorization: user };

}
