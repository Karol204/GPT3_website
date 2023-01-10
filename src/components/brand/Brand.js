import React from 'react';
import './Brand.css';
import Slack from '../../assets/slack.png';
import Google from '../../assets/google.png';
import Shopify from '../../assets/shopify.png';
import Dropbox from '../../assets/dropbox.png';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={Slack} alt="Slack" />
    </div>
    <div>
      <img src={Google} alt="Google" />
    </div>
    <div>
      <img src={Shopify} alt="Shopify" />
    </div>
    <div>
      <img src={Dropbox} alt="Dropbox" />
    </div>
  </div>
);

export default Brand;
