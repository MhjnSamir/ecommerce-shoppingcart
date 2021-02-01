interface AuthTokenService {
    setToken: Function;
    getAccessToken: Function;
    getRefreshToken: Function;
    clearToken: Function;
}

const [at, rt] = [btoa(btoa("access_token")), btoa(btoa("refresh_token"))] 
// User Agent text data
const ua = btoa(btoa(navigator.userAgent.replace(/[^A-Za-z]/g,'')))
// Product
const p = btoa(btoa(navigator.product))
const encodeToken = (token: string) => {
    try {
        return JSON.stringify({ uavrt: ua, pvrt: p, tkvrt: token });
    } catch (e) {
        return token;
    }
}
const decodeToken = (token: string) => {
    try {
        const {uavrt, pvrt, tkvrt} = JSON.parse(token);
        if(uavrt === ua && pvrt === p)
        return tkvrt;
    } catch (e) {
        return token;
    }
}

function setToken(tokenObj: any) {
    try{
        localStorage.setItem(at, encodeToken(tokenObj));
    }
    catch(e){
        console.log("Local Store error", e);
    }
}

function getAccessToken() {
    let accessToken = "";
    try{
        accessToken = decodeToken(localStorage.getItem(at) || "");
    }
    catch(e){
        console.log("Local Store error", e);
    }
    return accessToken;
}

function getRefreshToken() {
    let refreshToken = "";
    try{
        refreshToken = localStorage.getItem(rt) || "";
    }
    catch(e){
        console.log("Local Store error", e);
    }
    return refreshToken;
}

function clearToken() {
    localStorage.removeItem(at);
    localStorage.removeItem(rt);
}

const TokenService: AuthTokenService = {
    setToken: setToken,
    getAccessToken: getAccessToken,
    getRefreshToken: getRefreshToken,
    clearToken: clearToken,
};
export default TokenService;
