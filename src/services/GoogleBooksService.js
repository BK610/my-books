export default class GoogleBooksService {
    static instance = null;

    baseUrl = "";
    static getInstance() {
        if(GoogleBooksService.instance === null) {
            GoogleBooksService.instance = new GoogleBooksService();
        }
        return this.instance;
    }

    function = input =>
        fetch(this.baseUrl + input)
            .then(response => response.json());
}