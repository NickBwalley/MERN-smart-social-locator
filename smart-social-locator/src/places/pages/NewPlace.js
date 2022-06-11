import React from "react";
import { useCallback } from "react/cjs/react.production.min";

import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_REQUIR,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import "./NewPlace.css";

const NewPlace = () => {
  const titleInputHandler = useCallback((id, value, isValid) => {}, []);
  const descriptionInputHandler = useCallback((id, value, isValid) => {}, []);

  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={titleInputHandler}
      />
      <Input
        id="description"
        element="textarea"
        type="Description"
        label="Title"
        validators={[VALIDATOR_MINILENGTH(5)]}
        errorText="Please enter a valid description (atleast 5 characters)."
        onInput={descriptionInputHandler}
      />
    </form>
  );
};

export default NewPlace;
