import { useState } from "react";

const ValidationPostcode = () => {
  const [postcode, setPostcode] = useState("");
  const [validatedPostcode, setValidatedPostcode] = useState(false);

  const onFormSubmit = (event) => {
    event.preventDefault();

    setValidatedPostcode(
      /^([A-Za-z][A-Ha-hJ-Yj-y]?[0-9][A-Za-z0-9]? ?[0-9][A-Za-z]{2}|[Gg][Ii][Rr] ?0[Aa]{2})$/.test(
        postcode
      )
    );
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label>
        Podaj kod pocztowy
        <input
          value={postcode}
          onChange={({target}) => setPostcode(target.value)}
        ></input>
      </label>
      <button>Sprawdź poprawność kodu pocztowego</button>
      <p>Kod pocztowy jest{validatedPostcode? " poprawny":" niepoprawny"}</p>
    </form>
  );
};

export default ValidationPostcode;
