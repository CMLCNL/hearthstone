import axios from "axios"

const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '6c6be7f90cmsh01fd6b3bf992066p174bdejsn743a17a835b8',
        'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
    }
};
export default {
    getAllCards: async () => {
        options["url"] = 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards'
        let result = await axios.request(options);
        return result.data;
    },
    searchCardByName: async (search) => {
        options["url"] = 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/' + encodeURI(search)
        let result = await axios.request(options);
        return result.data;
    }
}