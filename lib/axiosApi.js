import axios from "axios";
import { gql } from "graphql-tag";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"; // Replace with your Strapi GraphQL API URL

// Function to fetch data from Strapi using GraphQL
export const axiosApi = async () => {
  try {
    const query = gql`
      query GetStrapiData {
        // Your GraphQL query here
      }
    `;

    const response = await axios.post(API_URL, {
      query: query,
    });

    return response.data.data;
  } catch (error) {
    throw new Error("Error fetching Strapi data");
  }
};

export const fetchLogoUrl = async () => {
  try {
    const response = await axios.post(`${API_URL}/graphql`, {
      query: gql`
        query {
          logo {
            url
          }
        }
      `,
    });

    const { url } = response.data.data.logo;
    return url;
  } catch (error) {
    console.error("Error fetching logo URL:", error);
    return null; // Set a default value or handle the error as needed
  }
};
