import React, { useState } from 'react';
import FormRowInput from '../FormRowInput';
import FormRowSelect from '../FormRowSelect';




const EmbedVideo: React.FC = () => {
  const [videoProvider, setVideoProvider] = useState('Youtube');
  const [url, setUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ videoProvider, url });
  };

  return (
    <form onSubmit={handleSubmit} className="w-[659px] bg-white p-6 rounded">
      <FormRowSelect
        label="VIDEO PROVIDER"
        options={['Youtube', 'Vimeo']}
        value={videoProvider}
        onChange={(e) => setVideoProvider(e.target.value)}
      />
      <FormRowInput
        label="URL"
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

    </form>
  );
};

export default EmbedVideo;
