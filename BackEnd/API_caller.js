const axios = require('axios');

const apiKey = 'vGsXzOgLxpJWIp50VuJEpYWRwhL6cGajRm6Suy0z9cTtELhH9SwX64dx86ZllSqKmQbncu7Zs2rCcUaltntfCgzW2VZRMkNahpQKukNkkWUN2CKBBR69Xs32xdWXY3Yx';

const term = 'sushi';
const location = 'Salt%20Lake%20City'
const params = `location=${location}&term=${term}&sort_by=rating&limit=5`

const getSushiSpots = async () => {
    try {
        let resp = await axios.get(`https://api.yelp.com/v3/businesses/search?${params}`, {
            headers: {
              'Authorization': `Bearer ${apiKey}`
            }
        });
        return resp.data;
    } catch (err) {
        console.error(err);
    }
};

const getReviewById = async (id) => {
    try {
        const resp = await axios.get(`https://api.yelp.com/v3/businesses/${id}/reviews`, {
            headers: {
              'Authorization': `Bearer ${apiKey}`
            }
        });
        return resp.data;
    } catch (err) {
        console.error(err);
    }
}

module.exports = {
    getSushiSpots,
    getReviewById
  };