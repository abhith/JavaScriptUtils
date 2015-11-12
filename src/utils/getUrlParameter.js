/**
 * Created by abhith on 12/11/2015.
 */
/* Get url parameter.
 *  Don't add dummyPath and it will take the URL
 *  Example:
 ************************************************************/
function getUrlParameter(param, dummyPath) {
    var sPageUrl = dummyPath || window.location.search.substring(1),
        sUrlVariables = sPageUrl.split(/[&||?]/),
        res;

    for (var i = 0; i < sUrlVariables.length; i += 1) {
        var paramName = sUrlVariables[i],
            sParameterName = (paramName || '').split('=');

        if (sParameterName[0] === param) {
            res = sParameterName[1];
        }
    }

    return res;
}
