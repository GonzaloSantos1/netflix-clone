import './Featured.scss';
import React from 'react';

const Featured = () => {
  return (
    <div className='featured'>
      <img
        className='featured__cover'
        src='https://occ-0-6510-358.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABayunW0uV3Fid-d6EN5jK6kqmnL_CNLG5shpWNbfbJWLF7xZI4dxuDsFSDHvRRQtl3I-dX6PlqsabexqCv6BTgUSSq_c.webp'
        alt='Featured movie'
      />
      <div className='info'>
        <img
          src='https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABZ5PpCaJsy80lBfapXpES-AUMCULOHmEtbtUWff03VSU_KzbtVm-ms5r0Zq3fg5eNjKUQHVTH-31gX1XfaIHxMMOdrjvPSaJafpgFGxGp8LfrKSyVcGADCS8Os7jw_E17Ah6nc4DwszNfyc2waU5GZIXTPo_5YhZbtJJW5DhLRW3fA.png?r=999'
          alt=''
          className='featured__title'
        />
        <div className='buttons'>
          <button className='play'>
            <i className='bx bx-play' />
            <span>Reproducir</span>
          </button>
          <button className='more-info'>
            <i className='bx bx-info-circle' />
            <span>Más información</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
