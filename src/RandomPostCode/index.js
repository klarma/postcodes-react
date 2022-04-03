import { useState } from "react";

const RandomPostcode = () => {
  const [postcodes, setPostcodes] = useState({
    state: "loading",
    randomPostcode: null,
  });

  const fetchRandomPostcode = async () => {
    try {
      const response = await fetch("https://api.postcodes.io/random/postcodes");

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const { result } = await response.json();

      setPostcodes({
        status: "success",
        randomPostcode: result.postcode,
      });
    } catch (error) {
      setPostcodes({ status: "error" });
      console.error(error);
    }
  };

  return (
    <>
      <button onClick={fetchRandomPostcode}>Draw UK postcode</button>
      <p>{postcodes.randomPostcode ? postcodes.randomPostcode : "PL1 3BW"}</p>
    </>
  );
};

export default RandomPostcode;
