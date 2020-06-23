export function storageChecker(i){
    let storageVal = lsGetItem(localStorage.key(i));
    return(!storageVal && isNaN(storageVal)?0:lsGetItem(localStorage.key(i)));
}

export function lsGetItem(key){
    return localStorage.getItem(key);
}

