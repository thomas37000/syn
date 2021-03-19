/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import './Input.css';

export default function InputId() {
  return (
    <div>
      <form className="input">
        <label htmlFor="inputidentifiant" className="label">
          Votre identifiant
          <input
            className="simple"
            type="text"
            pattern="(?=.*[a-z]).{3,}"
            title="Votre email doit contenir au moins 3 caractères en minuscules"
            id="inputidentifiant"
            name="inputemail"
            placeholder="Votre identifiant"
            required
            // value={username}
            onChange=""
          />
        </label>
        <legend className="[colorid]" />
        <div className="styles.inputIcone">
          <label htmlFor="inputpassword" className="label">
            Mot de passe
            <input
              className="password"
              // type={type}
              placeholder="Votre mot de passe"
              pattern="(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Votre mot de passe doit contenir 8 caractères, une majuscule et une minuscule"
              required
              id="inputpassword"
              name="inputpassword"
              // value={password}
              onChange=""
            />
            <div>
              <i className="i" onKeyPress="{() => ()}" onClick="{() => ()}">
                {/* {open ? <MdpVisible /> : <MdpInvisible />} */}
              </i>
            </div>
          </label>
          <legend className="colorpass" />
        </div>
        <button
          onMouseEnter="{() => ()}"
          onMouseLeave="{() => ()}"
          className="buttonPrimary"
          type="button"
          onClick=""
        >
          <p>Se connecter</p>
        </button>
      </form>
    </div>
  );
}
