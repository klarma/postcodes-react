import { useEffect, useState } from "react";

const RandomPostcode = () => {
  const [activeComponent, setActiveComponent] = useState(false);
  const [postcodes, setPostcodes] = useState({
    state: "loading",
    randomPostcode: null,
  });

  useEffect(() => {
    const fetchRandomPostcode = async () => {
      try {
        const response = await fetch(
          "https://api.postcodes.io/random/postcodes"
        );

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

    fetchRandomPostcode();
  }, [activeComponent]);

  return (
    <>
      <button onClick={() => setActiveComponent(!activeComponent)}>
        Draw UK postcode
      </button>
      <p>{postcodes.randomPostcode}</p>
    </>
  );
};

export default RandomPostcode;
