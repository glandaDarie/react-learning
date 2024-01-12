export const createApiUrl : CallableFunction = (url : string, endpoint : string , params : Record<string, any> | null = null) : string =>  { 
    let finalUrl : string = "";
    finalUrl = [url, endpoint].join("/");
    if(params === null) {
        return finalUrl;
    }
    const paramsToString : string = Object.entries(params).reduce((accumulator, [key, value]) => {
        return accumulator + (key + "=" + value);
      }, "");

    finalUrl = [finalUrl, paramsToString].join("?"); 
    return finalUrl;
};

