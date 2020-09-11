import React, { useState } from 'react';
import ToggleSwitch from './ToggleSwitch';

export default function Form() {
  let [newsletter, setNewsletter] = useState(false);
  let [daily, setDaily] = useState(false);
  let [weekly, setWeekly] = useState(false);
  let [monthly, setMonthly] = useState(false);

  const onNewsletterChange = (checked) => {
    setNewsletter(checked);
    // Disable all other options if newsletter is false
    if (!checked) {
      setDaily(false);
      setWeekly(false);
      setMonthly(false);
    }
  }

  return (
    <div>
      <h1>Opt-in for Newsletter</h1>
      <div>
        <ToggleSwitch id="newsletter" checked={newsletter} onChange={onNewsletterChange} />
        <label htmlFor="newsletter">Send me Marketing Emails!</label>
      </div>
      <div>
        <ToggleSwitch id="daily" small disabled={!newsletter} checked={daily} onChange={setDaily} />
        <label htmlFor="daily">Daily Briefs</label>
      </div>
      <div>
         <ToggleSwitch id="weekly" small disabled={!newsletter} checked={weekly} onChange={setWeekly}/>
        <label htmlFor="weekly">Weekly Summary</label>
      </div>
      <div>
        <ToggleSwitch id="monthly" small disabled={!newsletter} checked={monthly} onChange={setMonthly}/>
        <label htmlFor="monthly">Monthly Digest</label>
      </div>
      <div>
        <h2>States</h2>
        <p>Newsletter: {String(newsletter)}</p>
        <p>Daily: {String(daily)}</p>
        <p>Weekly: {String(weekly)}</p>
        <p>Monthly: {String(monthly)}</p>
      </div>
    </div>
  );
}