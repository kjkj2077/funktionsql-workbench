import axios from "axios";

function Logout2() {

    axios({
        url: '../Translation'
    }).then((res)=>{
        console.log(res);
        localStorage.removeItem("username");
        localStorage.removeItem("re-token");
        localStorage.removeItem("ac-token");
        document.location.href = '/';
    }).catch(error => {
        console.log(error);  
        window.alert("접속실패.");
    });
}
export default Logout2;