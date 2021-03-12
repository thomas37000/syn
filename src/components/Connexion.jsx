import React from 'react';
import { Link } from 'react-router-dom';
import InputId from './common/InputId';
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
        <a
          href="https://www.helloasso.com/associations/womenatnantes"
          className="linksMdp2"
          target="_blank"
          rel="noreferrer"
        >
          Je n&apos;ai pas de compte: je clique ici pour m&apos;inscrire à
          l&apos; association sur HelloAsso
        </a>
      </div>
    </>
  );
}
