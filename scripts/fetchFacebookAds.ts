import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const accessToken = process.env.VITE_FACEBOOK_ACCESS_TOKEN;
const adAccountId = process.env.VITE_FACEBOOK_AD_ACCOUNT_ID;

console.log('Access Token:', accessToken);
console.log('Ad Account ID:', adAccountId);

const fetchAds = async () => {
  try {
    const response = await axios.get(
      `https://graph.facebook.com/v12.0/act_${adAccountId}/ads`,
      {
        params: {
          access_token: accessToken,
        },
      }
    );
    console.log('Ads:', response.data.data);
  } catch (error: any) {
    console.error('Error fetching ads:', error.response ? error.response.data : error.message);
  }
};

fetchAds();