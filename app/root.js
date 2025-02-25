export default function root() {
        let root = '';
    
        if (window.location.hostname.endsWith('github.io')) {
            root = "/Portfolio";
        }

        return root;
}
