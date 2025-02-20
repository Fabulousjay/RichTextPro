'use client'


import { FC } from 'react';
import RichEditor from './components/rich-editor/RichEditor';

const Home: FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <RichEditor />
    </div>
  );
};

export default Home