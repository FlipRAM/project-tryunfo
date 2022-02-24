import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name-input">
          Name:
          <input id="name-input" type="text" data-testid="name-input" />
        </label>
        <label htmlFor="description-input">
          Description:
          <textarea id="description-input" data-testid="description-input" />
        </label>
        <label htmlFor="attr1-input">
          Attr1:
          <input id="attr1-input" type="number" data-testid="attr1-input" />
        </label>
        <label htmlFor="attr2-input">
          Attr2:
          <input id="attr2-input" type="number" data-testid="attr2-input" />
        </label>
        <label htmlFor="attr3-input">
          Attr3:
          <input id="attr3-input" type="number" data-testid="attr3-input" />
        </label>
        <label htmlFor="image-input">
          Image:
          <input id="image-input" type="text" data-testid="image-input" />
        </label>
        <label htmlFor="rare-input">
          Raridade:
          <select id="rare-input" data-testid="rare-input" name="rarity">
            <option selected value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          <input id="trunfo-input" data-testid="trunfo-input" type="checkbox" />
          Super Trybe Trunfo
        </label>
        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
