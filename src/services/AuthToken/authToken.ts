interface AuthTokenService {
    setToken: (tokenObj: any) => void;
    getAccessToken: () => string;
    getRefreshToken: () => string;
    clearToken: () => void;
}

/**
 * Persist token item to web local storage
 * 
 * @param tokenObj token from server
 */
function setToken(tokenObj: any) {
    localStorage.setItem("access_token", tokenObj);
}


/**
 * Get access token from storage.
 *
 * @returns {string}
 */
function getAccessToken(): string {
    let accessToken = "";
    try {
        accessToken = localStorage.getItem("access_token") || "";
    }
    catch (e) {
        console.log("Local Store token error", e);
    }
    return accessToken;
}

/**
 * Get refresh token from storage.
 *
 * @returns {string}
 */
function getRefreshToken(): string {
    let refreshToken = "";
    try {
        refreshToken = localStorage.getItem("refresh_token") || "";
    }
    catch (e) {
        console.log("Local Store token error", e);
    }
    return refreshToken;
}

/**
 * Remove tokens from local storage.
 */
function clearToken() {
    localStorage.removeItem("tk");
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
}

/**
 * Manages JWT token for the application
 */
const TokenService: AuthTokenService = {
    setToken: setToken,
    getAccessToken: getAccessToken,
    getRefreshToken: getRefreshToken,
    clearToken: clearToken,
};

export default TokenService;