export default class Config {

    static root() {
        let root = "";
    
        if (window.location.hostname.endsWith('github.io')) {
            root = "/portfolio_static";
        }

        return root;
    }
}
