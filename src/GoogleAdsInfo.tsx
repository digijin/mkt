import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GoogleAdsInfo: React.FC = () => {
  const [ads, setAds] = useState<any[]>([]);
  const [newAdName, setNewAdName] = useState('');
  const accessToken = import.meta.env.VITE_GOOGLE_ACCESS_TOKEN;
  const adAccountId = import.meta.env.VITE_GOOGLE_AD_ACCOUNT_ID;

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await axios.get(
          `https://googleads.googleapis.com/v12/customers/${adAccountId}/ads`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setAds(response.data.data);
      } catch (error) {
        console.error('Error fetching ads:', error);
      }
    };

    fetchAds();
  }, [accessToken, adAccountId]);

  const handleNewAdSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://googleads.googleapis.com/v12/customers/${adAccountId}/ads`,
        {
          name: newAdName,
          // Add other required fields for creating an ad
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log('New ad created:', response.data);
      setNewAdName('');
    } catch (error) {
      console.error('Error creating new ad:', error);
    }
  };

  return (
    <div>
      <h2>Google Ads</h2>
      {ads.length > 0 ? (
        <ul>
          {ads.map((ad) => (
            <li key={ad.id}>{ad.name}</li>
          ))}
        </ul>
      ) : (
        <p>No ads found.</p>
      )}
      <form onSubmit={handleNewAdSubmit}>
        <input
          type="text"
          value={newAdName}
          onChange={(e) => setNewAdName(e.target.value)}
          placeholder="New Ad Name"
          required
        />
        <button type="submit">Lodge New Ad</button>
      </form>
    </div>
  );
};

export default GoogleAdsInfo;