const {getSushiSpots, getReviewById} = require('./API_caller');

const getAndFormatTopSushiSpots = async () => {
    let sushiSpots = await getSushiSpots();

    return await Promise.all(sushiSpots.businesses.map(async (business) => 
      {
        let callResult = await getReviewById(business.id);
        let excerpt = callResult?.reviews?.[0]?.text?.substring(0,25) ?? ""
  
        return {
          name: business.name, 
          address: [business.location.address1,business.location.city].join(', '),
          excerpt: excerpt !== "" ? excerpt + "..." : excerpt,
          reviewer_name: callResult?.reviews?.[0]?.user?.name ?? ""
        };
      }));
  }

module.exports = {
    getAndFormatTopSushiSpots
};