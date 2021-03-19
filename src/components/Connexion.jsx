import React from 'react';
import { Link } from 'react-router-dom';
import InputId from './Cards/InputId';
import './Connexion.css';

export default function Connexion() {
  return (
    <>
      <h1 className="h1MdpId">Slide Your Net</h1>
      <InputId />
      <div className="linksMdpView">
        <Link to="/identifiants-perdus" className="linksMdp">
          J&apos;ai perdu mes identifiants
        </Link>
        <a href="/" className="linksMdp2" target="_blank" rel="noreferrer">
          Je n&apos;ai pas de compte: inscription
        </a>
      </div>
    </>
  );
}
