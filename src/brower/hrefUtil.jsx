/**
 * Created by zengruda on 10/21/16.
 */
export default {
    changeHash: (hash) => {
        let href = window.location.href;
        href = href.substring(0, href.indexOf("#"));
        window.location.href = href + "#" + hash;
    }
};
