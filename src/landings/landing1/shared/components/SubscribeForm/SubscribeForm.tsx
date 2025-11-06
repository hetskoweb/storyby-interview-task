import { useState } from 'react';
import './SubscribeForm.scss';

export const SubscribeForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Subscribed:', email);

    setEmail('');
  };

  return (
    <form className="subscribe-form" onSubmit={handleSubmit}>
      <input
        type="email"
        className="subscribe-form__input"
        placeholder="Your email address"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <button type="submit" className="subscribe-form__button">
        Subscribe
      </button>
    </form>
  );
};
