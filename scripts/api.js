
export async function getBooks() {
    const url = 'https://openlibrary.org/search.json?q=the+lord+of+the+rings';
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`response status: ${res.status}`);
        }
        const result = await res.json();
        console.log(result);
    } catch (error) {
        console.error(error.message);
    }
}
